'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
require(path.join(root, 'examples/coast/data.js'));
const data = globalThis.COAST_DATA;
const { TIMES, VIBES, recommend, validPlace } = require(path.join(root, 'examples/coast/app.js'));

let checks = 0;
function check(name, fn) {
  fn();
  checks += 1;
  process.stdout.write(`ok ${checks} - ${name}\n`);
}

check('curated dataset has five unique valid places', () => {
  assert.equal(data.length, 5);
  assert.equal(new Set(data.map((place) => place.id)).size, data.length);
  assert.ok(data.every(validPlace));
});

const outcomes = new Map();
for (const time of Object.keys(TIMES)) {
  for (const vibe of Object.keys(VIBES)) {
    const label = `${time} + ${vibe}`;
    const first = recommend(data, time, vibe);
    const second = recommend(data, time, vibe);
    check(`${label} returns one deterministic supported result`, () => {
      assert.equal(first.error, undefined);
      assert.ok(validPlace(first.place));
      assert.ok(first.place.vibes.includes(vibe));
      assert.equal(first.time, time);
      assert.equal(first.vibe, vibe);
      assert.equal(typeof first.partial, 'boolean');
      assert.deepEqual(second, first);
    });
    outcomes.set(label, first);
  }
}

check('every vibe produces meaningful supported variation across time', () => {
  for (const vibe of Object.keys(VIBES)) {
    const names = Object.keys(TIMES).map((time) => outcomes.get(`${time} + ${vibe}`).place.name);
    assert.ok(new Set(names).size >= 2, `${vibe} should yield at least two places`);
  }
});

check('known time and vibe pairs reach the intended places', () => {
  assert.equal(recommend(data, 'golden-hour', 'scenery').place.id, 'dinosaur');
  assert.equal(recommend(data, 'morning', 'surf').place.id, 'pismo');
  assert.equal(recommend(data, 'sunset', 'surf').place.id, 'morro');
});

check('partial matches are disclosed', () => {
  const result = recommend(data, 'midday', 'surf');
  assert.equal(result.partial, true);
  assert.match(result.reason, /do not have a distinct time match/i);
});

check('surf interest never becomes a conditions or safety claim', () => {
  for (const time of Object.keys(TIMES)) {
    const result = recommend(data, time, 'surf');
    assert.match(result.note, /not a recommendation to enter the water/i);
    assert.match(result.note, /No swell, skill suitability or safety is assessed/i);
  }
});

check('invalid selections fail clearly', () => {
  assert.match(recommend(data, 'overnight', 'surf').error, /listed time and vibe/i);
  assert.match(recommend(data, 'morning', 'party').error, /listed time and vibe/i);
});

check('missing, empty, and malformed datasets fail clearly', () => {
  for (const broken of [undefined, null, [], {}, [{ id: 'short' }]]) {
    assert.match(recommend(broken, 'morning', 'relax').error, /place list is unavailable/i);
  }
});

check('a valid dataset with no supported vibe returns the explicit no-pick state', () => {
  const relaxOnly = [data.find((place) => place.id === 'avila')];
  assert.ok(relaxOnly.every(validPlace));
  assert.match(recommend(relaxOnly, 'morning', 'surf').error, /No supported pick for this vibe/i);
});

check('duplicate IDs are rejected', () => {
  assert.match(recommend([data[0], { ...data[1], id: data[0].id }], 'morning', 'relax').error, /place list is unavailable/i);
});

check('unsafe source URLs are rejected', () => {
  const unsafe = data.map((place, index) => index === 0 ? { ...place, source: 'https://example.com/fake' } : place);
  assert.equal(validPlace(unsafe[0]), false);
  assert.match(recommend(unsafe, 'morning', 'surf').error, /place list is unavailable/i);
});

check('stable file order resolves equal scores', () => {
  const tied = [
    { ...data[0], id: 'first', name: 'First' },
    { ...data[0], id: 'second', name: 'Second' }
  ];
  assert.equal(recommend(tied, 'morning', 'surf').place.id, 'first');
  assert.equal(recommend(tied.slice().reverse(), 'morning', 'surf').place.id, 'second');
});

const docs = [
  'README.md',
  'SPEC.md',
  'AGENTS.md',
  'docs/HELP.md',
  'docs/FACILITATOR.md',
  'examples/coast/SPEC.md',
  'examples/coast/AGENTS.md',
  'examples/coast/SOURCES.md'
];

check('all local Markdown links resolve', () => {
  for (const relative of docs) {
    const file = path.join(root, relative);
    assert.ok(fs.existsSync(file), `${relative} is missing`);
    const text = fs.readFileSync(file, 'utf8');
    const links = [...text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
    for (const link of links) {
      if (/^(https?:|mailto:|#)/.test(link)) continue;
      const target = link.split('#')[0];
      if (!target) continue;
      assert.ok(fs.existsSync(path.resolve(path.dirname(file), target)), `${relative} -> ${link}`);
    }
  }
});

check('README enforces deploy, portal success, and STOP 1 before agent work', () => {
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  const deploy = readme.indexOf('Copy and deploy the untouched starter');
  const submit = readme.indexOf('Submit the live starter before building');
  const stop = readme.indexOf('STOP 1: Live and submitted');
  const agent = readme.indexOf('Connect your agent to your copy');
  const brief = readme.indexOf('Approve your idea and instructions');
  assert.ok(deploy >= 0 && deploy < submit && submit < stop && stop < agent && agent < brief);
  assert.match(readme, /portal submission succeeds/i);
  assert.match(readme, /https:\/\/github\.com\/YOUR-USERNAME\/YOUR-REPO/);
  assert.match(readme, /https:\/\/YOUR-USERNAME\.github\.io\/YOUR-REPO\//);
});

check('browser fallback saves and reads the brief before STOP 2 and HTML generation', () => {
  const help = fs.readFileSync(path.join(root, 'docs/HELP.md'), 'utf8');
  const stop1 = help.indexOf('Confirm STOP 1 first');
  const propose = help.indexOf('propose all six TARGET lines');
  const branch = help.indexOf('create a build branch from `main`');
  const save = help.indexOf('save the approved TARGET in `SPEC.md`');
  const readback = help.indexOf('read back the six TARGET lines and standing rule');
  const starter = help.indexOf('Download the unchanged starter `index.html`');
  const stop2 = help.indexOf('**STOP 2:**');
  const generation = help.indexOf('Return one complete, self-contained HTML file');
  const sameBranch = help.indexOf('existing build branch that already contains the approved `SPEC.md` and `AGENTS.md`');
  assert.ok(stop1 >= 0 && stop1 < propose && propose < branch && branch < save);
  assert.ok(save < readback && readback < starter && starter < stop2 && stop2 < generation && generation < sameBranch);
  assert.match(help, /Preserve every saved requirement and\s+guardrail/i);
  assert.match(help, /Do not rewrite SPEC\.md or AGENTS\.md/i);
});

check('student instructions remain topic-neutral and the demo stays separate', () => {
  const studentText = ['README.md', 'SPEC.md', 'AGENTS.md']
    .map((relative) => fs.readFileSync(path.join(root, relative), 'utf8'))
    .join('\n');
  assert.doesNotMatch(studentText, /profile-(starter|finance|software|consumer)|Analyzer|Showcase/);
  assert.match(studentText, /one example, not your assignment/i);
  assert.match(studentText, /Do not impose the coastal example's topic/i);
});

check('demo has reduced-motion handling and only local runtime assets', () => {
  const html = fs.readFileSync(path.join(root, 'examples/coast/index.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'examples/coast/style.css'), 'utf8');
  assert.match(css, /prefers-reduced-motion\s*:\s*reduce/i);
  const runtimeRefs = [...html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)=["']([^"']+)["']/gi)]
    .map((match) => match[1]);
  assert.deepEqual(runtimeRefs.sort(), ['app.js', 'data.js', 'style.css']);
  assert.doesNotMatch(html, /<iframe\b|<video\b|<img\b[^>]+src=["']https?:/i);
  assert.doesNotMatch(fs.readFileSync(path.join(root, 'examples/coast/app.js'), 'utf8'), /\bfetch\s*\(|XMLHttpRequest|WebSocket|EventSource/);
});

process.stdout.write(`# ${checks} checks passed; 20 time/vibe combinations exercised.\n`);
