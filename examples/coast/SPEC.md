# TARGET: SLO COAST

Completed instructor example. Students may build unrelated projects.

- **Thing:** A one-page SLO County coastal recommender called SLO COAST. The visitor selects a time of day and vibe, then receives one named beach or coastal spot with a useful reason.
- **Audience:** A first-time visitor who has been told to “go to the beach” but needs to choose which coastal spot fits the visit they have in mind.
- **Requirements:** Time choices are Sunrise, Morning, Midday, Golden hour, and Sunset. Vibes are Surf, Relax, Coastal walk, and Scenery. Both feed transparent deterministic matching against a small verified local dataset. Show a named result, the selection it responds to, a short explanation, and a compact source or current-information link. Handle partial or absent matches honestly.
- **Guardrails:** Coastal spots only. No restaurants, inland itinerary, accounts, live weather, tides, surf, date API, geolocation, runtime AI, or visitor API key. Do not imply safe conditions or unverified access. Time choices are descriptive preferences, not clock-time predictions. Source real-world facts; label illustrations and editorial preferences.
- **Experience:** A generous coastal hero, two compact selectors, and one results panel. Ocean ink, warm sand, and sun-orange detail. Changing time shifts the sky and sun palette with a short lightweight wave response. Keep contrast, keyboard use, mobile layout, and reduced-motion behavior intact. Avoid multiple grids and extra questions.
- **Test:** Exercise all 20 combinations, relevant data errors, repeatability, changed selections, keyboard controls, reduced motion, and 390, 768, and 1366 px layouts. Verify that recommendations reference stored facts and do not invent conditions. Serve correctly at a GitHub Pages project subpath. Human previews before approving release.
