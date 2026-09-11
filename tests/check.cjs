'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

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

check('generated hero asset is local, documented, optimized, and has a fallback', () => {
  const html = fs.readFileSync(path.join(root, 'examples/coast/index.html'), 'utf8');
  const asset = path.join(root, 'examples/coast/assets/coast-illustration.webp');
  assert.ok(fs.existsSync(asset));
  assert.ok(fs.statSync(asset).size > 100000, 'hero asset should retain rich image detail');
  assert.ok(fs.statSync(asset).size < 1000000, 'hero asset should remain under 1 MB');
  assert.match(html, /src="assets\/coast-illustration\.webp"/);
  assert.match(html, /Generated imaginary coastline/i);
  assert.match(html, /onerror="this\.hidden=true"/);
  assert.match(html, /<(?:svg|div) class="ocean"/);
});

check('time mood uses a finite color transition with reduced-motion coverage', () => {
  const css = fs.readFileSync(path.join(root, 'examples/coast/style.css'), 'utf8');
  assert.match(css, /\.sky-tone\{[^}]*transition:background-color \.8s/);
  assert.match(css, /\.water-tone\{[^}]*transition:background-color \.8s/);
  assert.match(css, /\.sun\{[^}]*transition:left \.85s,top \.85s/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)[\s\S]*transition:none!important/);
  assert.doesNotMatch(css, /animation:[^;]*(infinite|linear\s+infinite)/i);
});

check('new native-radio DOM contract is complete with intended defaults', () => {
  const html = fs.readFileSync(path.join(root, 'examples/coast/index.html'), 'utf8');
  for (const time of Object.keys(TIMES)) assert.match(html, new RegExp(`id="time-${time}"[^>]+type="radio"[^>]+name="time"[^>]+value="${time}"`));
  for (const vibe of Object.keys(VIBES)) assert.match(html, new RegExp(`id="vibe-${vibe}"[^>]+type="radio"[^>]+name="vibe"[^>]+value="${vibe}"`));
  assert.match(html, /id="time-golden-hour"[^>]+checked/);
  assert.match(html, /id="vibe-scenery"[^>]+checked/);
  assert.match(html, /<fieldset id="time-group"/);
  assert.match(html, /<fieldset id="vibe-group"/);
  assert.doesNotMatch(html, /<select\b[^>]+(?:id|name)="(?:time|vibe)"/);
});

check('visitor header links to the picker and keeps project attribution in the footer', () => {
  const html = fs.readFileSync(path.join(root, 'examples/coast/index.html'), 'utf8');
  assert.match(html, /class="header-action" href="#picker">Find my spot/);
  assert.doesNotMatch(html, /A CPVC example/);
  assert.match(html, /A Cal Poly Vibe Coding project\./);
});

function makeDomHarness(reducedMotion = false) {
  class Classes {
    constructor() { this.values = new Set(); }
    add(...names) { names.forEach((name) => this.values.add(name)); }
    remove(...names) { names.forEach((name) => this.values.delete(name)); }
    contains(name) { return this.values.has(name); }
  }
  class Element {
    constructor(id, options = {}) {
      Object.assign(this, { id, textContent: '', hidden: false, href: '', listeners: {}, classList: new Classes(), attributes: {}, focusCount: 0, scrollCalls: [], style: {} }, options);
    }
    addEventListener(type, listener) { (this.listeners[type] ||= []).push(listener); }
    dispatch(type) {
      const event = { target: this, preventDefault() { this.defaultPrevented = true; } };
      for (const listener of this.listeners[type] || []) listener(event);
      return event;
    }
    setAttribute(name, value) { this.attributes[name] = value; }
    focus(options) { this.focusCount += 1; this.focusOptions = options; }
    getBoundingClientRect() { return this.bounds || { top: 10, bottom: 650 }; }
    scrollIntoView(options) { this.scrollCalls.push(options); }
  }

  const times = Object.keys(TIMES).map((radioValue) => new Element(`time-${radioValue}`, { type: 'radio', name: 'time', value: radioValue, checked: radioValue === 'golden-hour' }));
  const vibes = Object.keys(VIBES).map((radioValue) => new Element(`vibe-${radioValue}`, { type: 'radio', name: 'vibe', value: radioValue, checked: radioValue === 'scenery' }));
  const radios = [...times, ...vibes];
  const elements = {};
  for (const id of ['status', 'result', 'spot-name', 'mood-label', 'scene-phase', 'change-pick', 'selection-label', 'spot-reason', 'spot-fact', 'spot-note', 'spot-source']) elements[id] = new Element(id);
  elements.result.hidden = true;
  const resultStage = new Element('result-stage', { bounds: { top: 0, bottom: 420, height: 420 } });
  elements.result.parentElement = resultStage;
  const form = new Element('coast-form');
  form.querySelectorAll = () => radios;
  form.querySelector = (selector) => {
    const name = selector.match(/name="([^"]+)"/)?.[1];
    return radios.find((radio) => radio.name === name && radio.checked);
  };
  elements['coast-form'] = form;
  for (const radio of radios) elements[radio.id] = radio;
  const body = new Element('body', { dataset: {} });
  const document = { body, getElementById: (id) => elements[id] || null };

  let nextTimer = 1;
  const timers = new Map();
  const setTimeout = (fn, delay) => { const id = nextTimer++; timers.set(id, { fn, delay }); return id; };
  const clearTimeout = (id) => timers.delete(id);
  const runThrough = (delay) => {
    for (const [id, timer] of [...timers].filter(([, timer]) => timer.delay <= delay).sort((a, b) => a[1].delay - b[1].delay)) {
      if (!timers.has(id)) continue;
      timers.delete(id);
      timer.fn();
    }
  };
  const context = { module: { exports: {} }, document, COAST_DATA: data, matchMedia: () => ({ matches: reducedMotion }), setTimeout, clearTimeout, innerHeight: 500 };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'examples/coast/app.js'), 'utf8'), context);
  const choose = (name, radioValue) => {
    const group = radios.filter((radio) => radio.name === name);
    group.forEach((radio) => { radio.checked = radio.value === radioValue; });
    group.find((radio) => radio.checked).dispatch('change');
  };
  return { body, elements, form, times, vibes, resultStage, choose, runThrough, timers };
}

check('radio bindings synchronize mood and invalidate a stale result', () => {
  const ui = makeDomHarness();
  assert.equal(ui.body.dataset.time, 'golden-hour');
  assert.equal(ui.elements['mood-label'].textContent, 'Golden hour');
  ui.elements.result.hidden = false;
  ui.choose('time', 'sunset');
  assert.equal(ui.body.dataset.time, 'sunset');
  assert.equal(ui.elements['mood-label'].textContent, 'Sunset');
  assert.equal(ui.elements['scene-phase'].textContent, 'Sunset');
  assert.equal(ui.elements.result.hidden, true);
  assert.ok(ui.body.classList.contains('wave-response'));
  ui.runThrough(900);
  assert.equal(ui.body.classList.contains('wave-response'), false);
});

check('submit reveals and announces the selected recommendation', () => {
  const ui = makeDomHarness();
  ui.form.dispatch('submit');
  assert.equal(ui.elements.result.hidden, false);
  assert.ok(ui.elements.result.classList.contains('revealing'));
  assert.equal(ui.elements['spot-name'].textContent, 'Dinosaur Caves Park');
  assert.match(ui.elements['selection-label'].textContent, /Golden hour \+ Scenery/);
  assert.equal(ui.elements['spot-name'].attributes.tabindex, '-1');
  assert.equal(ui.elements['spot-name'].focusCount, 1);
  assert.equal(ui.elements.result.scrollCalls.length, 1);
  ui.runThrough(650);
  assert.equal(ui.elements.result.classList.contains('revealing'), false);
});

check('reset preserves choices, hides at midpoint, and restores focus at the end', () => {
  const ui = makeDomHarness();
  ui.choose('time', 'sunset');
  ui.choose('vibe', 'surf');
  ui.form.dispatch('submit');
  ui.elements['change-pick'].dispatch('click');
  assert.ok(ui.body.classList.contains('is-resetting'));
  assert.equal(ui.elements.result.hidden, false);
  assert.equal(ui.resultStage.style.minHeight, '420px');
  ui.runThrough(450);
  assert.equal(ui.elements.result.hidden, true);
  assert.match(ui.elements.status.textContent, /Choose a time and vibe/i);
  assert.equal(ui.resultStage.style.minHeight, '420px');
  ui.runThrough(900);
  assert.equal(ui.body.classList.contains('is-resetting'), false);
  assert.equal(ui.resultStage.style.minHeight, '');
  assert.equal(ui.times.find((radio) => radio.value === 'sunset').checked, true);
  assert.equal(ui.vibes.find((radio) => radio.value === 'surf').checked, true);
  assert.equal(ui.times.find((radio) => radio.value === 'sunset').focusCount, 1);
});

check('a new radio selection cancels an in-progress reset without stale timers', () => {
  const ui = makeDomHarness();
  ui.form.dispatch('submit');
  ui.elements['change-pick'].dispatch('click');
  ui.choose('time', 'morning');
  assert.equal(ui.body.classList.contains('is-resetting'), false);
  assert.equal(ui.resultStage.style.minHeight, '');
  assert.equal(ui.body.dataset.time, 'morning');
  assert.match(ui.elements.status.textContent, /Choices updated/i);
  ui.runThrough(1000);
  assert.match(ui.elements.status.textContent, /Choices updated/i);
});

check('submit cancels an in-progress reset and reveals the current pick', () => {
  const ui = makeDomHarness();
  ui.form.dispatch('submit');
  ui.elements['change-pick'].dispatch('click');
  ui.choose('vibe', 'surf');
  ui.elements['change-pick'].dispatch('click');
  ui.form.dispatch('submit');
  assert.equal(ui.body.classList.contains('is-resetting'), false);
  assert.equal(ui.resultStage.style.minHeight, '');
  assert.equal(ui.elements.result.hidden, false);
  assert.equal(ui.elements['spot-name'].textContent, 'Morro Rock Beach');
  ui.runThrough(1000);
  assert.equal(ui.elements.result.hidden, false);
});

check('rapid reset clicks replace prior timers and finish exactly once', () => {
  const ui = makeDomHarness();
  ui.form.dispatch('submit');
  ui.elements['change-pick'].dispatch('click');
  ui.elements['change-pick'].dispatch('click');
  assert.equal(ui.timers.size, 2);
  assert.equal(ui.resultStage.style.minHeight, '420px');
  ui.runThrough(450);
  assert.equal(ui.elements.result.hidden, true);
  ui.runThrough(900);
  assert.equal(ui.body.classList.contains('is-resetting'), false);
  assert.equal(ui.resultStage.style.minHeight, '');
  assert.equal(ui.times.find((radio) => radio.checked).focusCount, 1);
  assert.equal(ui.timers.size, 0);
});

check('reduced motion bypasses reveal and reset delays', () => {
  const ui = makeDomHarness(true);
  ui.choose('time', 'sunrise');
  assert.equal(ui.body.dataset.time, 'sunrise');
  assert.equal(ui.body.classList.contains('wave-response'), false);
  ui.form.dispatch('submit');
  assert.equal(ui.elements.result.hidden, false);
  assert.equal(ui.elements.result.classList.contains('revealing'), false);
  ui.elements['change-pick'].dispatch('click');
  assert.equal(ui.elements.result.hidden, true);
  assert.equal(ui.body.classList.contains('is-resetting'), false);
  assert.equal(ui.timers.size, 0);
  assert.equal(ui.times.find((radio) => radio.checked).focusCount, 1);
});

check('wave reset overlay is inert and hidden from assistive technology', () => {
  const html = fs.readFileSync(path.join(root, 'examples/coast/index.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'examples/coast/style.css'), 'utf8');
  assert.match(html, /<div id="wave-wipe" aria-hidden="true">/);
  assert.match(css, /#wave-wipe\{[^}]*pointer-events:none/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)[^}]*[\s\S]*#wave-wipe\{display:none\}/);
});

process.stdout.write(`# ${checks} checks passed; 20 time/vibe combinations exercised.\n`);
