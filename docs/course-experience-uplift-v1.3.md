# Year 7 Multimedia course-experience uplift v1.3

Prepared: 24 August 2026  
Authority: Steve's rendered-site feedback requesting less wasted hero space, more photographic examples, and learning media distributed through the student pathway.

## Result

- The five authorised Drive images remain first-priority and unchanged.
- Eight distinct project-created photographic teaching examples fill genuine observation gaps. The visual set is now 43 qualifying assets: 5 Drive images, 13 generated photographs and 25 explanatory SVGs.
- The revised working range is 32–45. The uplift intentionally moves beyond the original 32–40 planning range because the previous set was 71% diagram-led and four modules had no photographic example.
- Every module now starts with its existing eight-slide editable PowerPoint, a rendered first-slide preview, Open larger, and a direct download before theory.
- Existing section-level videos remain immediately beside their matching explanations; no generic video was added to fill a quota.
- The portrait Drive street-poster hero remains uncropped and is given a narrower, taller presentation at desktop and mobile widths.

## New photographic teaching assets

All assets are fictional educational examples generated with the built-in image tool. They are not student work or documentary evidence. No external brand, identifiable person, school identifier or private source was used.

| Module / section | File | Teaching job | SHA-256 |
| --- | --- | --- | --- |
| M1 — Problem, purpose and brief | assets/visuals/generated-design-brief-planning-workspace.png | Separate purpose, audience, constraints and intended outputs before production | 19130015D79007A64DB461D0A39EEA0BA15D8B23ACDE4848B031B70B8EA993C1 |
| M2 — Colour and meaning | assets/visuals/generated-brand-direction-comparison.png | Compare warm/angular/dense and cool/rounded/calm brand directions | 7D5FE4D30622E0A73C94DFFBA8316F6D3575D7E1A92B5810823A48D4FA18DCFB |
| M3 — Symbols and recognition | assets/visuals/generated-logo-scale-context.png | Test one mark across large, medium and small applications | A4468F2DB31F2F9A58BD25D9383792D4FE875902EF6211A23C38D08E7A082378 |
| M4 — Readability and scanning | assets/visuals/generated-menu-scan-context.png | Observe grouping, alignment and spacing in a counter context without current menu claims | BBD4F9E29511AE84C25C15D2C8867F0F25730F1209957BB420147A4E6F65BCB5 |
| M7 — Frames, states and transitions | assets/visuals/generated-motion-storyboard-workspace.png | Compare controlled changes in position and scale across three states | 1BDA64F81663A8BD6525B02DF727FCB7710752018B4C01BCBC394E38D869C819 |
| M8 — Greenwashing and truth | assets/visuals/generated-green-claim-audit.png | Separate a green-looking treatment from claim evidence | 4A77BB320C9C09D195FDC2D2D8F69EFAD59AB728B49787F34025E9453B4B0930 |
| M8 — Ripple effects and designer responsibility | assets/visuals/generated-packaging-ripple-context.png | Trace one packaging decision across supply, service, delivery and end-of-use handling | DD72D967CEEE2C6303586DEBEA8B1B24C60ABF1F148E1FED5EC3B859FCD7A60A |
| M9 — Preparing and embedding media | assets/visuals/generated-responsive-portfolio-check.png | Compare one portfolio identity and media hierarchy across laptop and phone | 9F8885589B79B64F98745116A4F8F319A81877B034DA954EAAA1A84F4F2CAB6B |

Each is 1672 × 941 pixels and has a caption, focused Notice prompt, specific alt text and keyboard-operable Open larger control in data/media-data.js. A first M9 variant containing a misspelt checklist heading was rejected; only the corrected no-checklist version is included.

## Presentation integration

scripts/module-shell.js derives each existing deck and first-slide preview from the authoritative module slug:

- download: resources/presentations/module-NN-<slug>.pptx
- preview: resources/presentation-qa/renders/module-NN-<slug>/slide-1.png

The presentation card is rendered once per module after orientation and before the first theory section. Teacher Resources remains a useful whole-course collection, not the only access point.

## Focused verification

- JavaScript syntax: data/media-data.js and scripts/module-shell.js pass.
- Local HTTP: 44/44 affected routes, decks, previews and new image URLs return 200.
- All ten modules at approximately exact 390 CSS pixels: one presentation, three theory sections, four contents links, loaded preview and no page-level horizontal overflow.
- All eight photographs at the same mobile width: loaded at 1672 × 941, contained to the lesson column, caption present, Notice prompt present and Open larger present.
- Representative rendered checks: homepage hero at desktop/mobile, Module 3 presentation at desktop/mobile, Module 3 photographic placement, and larger-view close/focus return.

