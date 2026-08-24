# Year 7 Multimedia integrated candidate manifest v1.0

Produced: 24 August 2026, Australia/Sydney  
Orchestrator: New TAS Course Site Builder Stage 13  
State: **complete local candidate; frozen-payload digest and independent acceptance are recorded under `docs/audits/`**

## Course identity

- **Course:** Year 7 Technology — Multimedia
- **Connected project:** Fast Food Futures
- **Current curriculum authority:** Technology 7–8 Syllabus (2023)
- **Focus area:** Digital and communication technologies
- **Delivery frame:** provisional 20 lessons; exact timetable and rotation relationship are Teacher to confirm
- **Assessment status:** formative evidence guide, not a formal task notification
- **Release status:** local only; no commit, push or deployment

## Integrated student course

| Component | Integrated state |
|---|---:|
| Core routes | 16: home, activities, challenges, folio, assessment, teacher resources and 10 modules |
| Named theory sections | 30 |
| Feedback-rich knowledge checks | 90 |
| Scaffolded capstone evidence prompts | 30 |
| Applied Learning Activities | 19 |
| Challenge-bank tasks | 11, with Modules 1–10 covered |
| Purposeful visual placements | 36: 35 unique module visuals plus one separately recorded homepage source-image reuse |
| Drive video learning cards | 6 |
| Folio stages | 8 |
| Formative assessment evidence areas | 4 |

Each theory section has a learning intention, source-grounded explanation, worked example, misconception correction, three feedback-rich checks and a substantial saved evidence prompt. Browser-local saving is consistently described as practice evidence, not formal submission.

## Drive-first decision

All five current Drive images and all six current Drive videos are used before supplementary course-created media. Source images are preserved as exact local copies; the homepage reuse of the street mock-up has its own teaching purpose, Notice prompt and full-resolution link. Videos use privacy-conscious click-to-load Drive previews with a visible fallback link and no autoplay.

The supplied `Match and Move Advertising.mp4` is retained because it is current Drive media but is explicitly marked **REWORK**. Whole-clip verification found only Canva Home, Create a design and a blank A4 document in the 0:16 clip. It is not described as a finished advertisement. The 6:21 `Match and Move.mp4` tutorial and course-created explanatory diagrams provide the intended learning path.

The private response spreadsheet, student identities, responses, marks and analytics are excluded.

## Teacher package

- Ten editable 16:9 PowerPoint decks, eight slides per module and 80 slides total.
- Every slide includes presenter notes and a source block.
- Editable six-page teaching program and four-page delivery register.
- Seven backward-mapped outcomes: `TE4-SDP-01`, `TE4-PDP-01`, `TE4-PPM-01`, `TE4-DES-01`, `TE4-SAF-01`, `TE4-DIG-01`, `TE4-DIG-02`.
- Explicit Teacher-to-confirm register for timetable, formal assessment authority, output quantities, service access, sharing/submission permissions, replacement of the 0:16 clip and faculty outcome sign-off.

## Integration verification

| Gate | Result |
|---|---|
| 16 routes at 1440 × 900 and exactly 390 × 844 | PASS — 32/32 HTTP 200 |
| Console, page and referenced-request health | PASS — zero errors on final rerun |
| 390 px responsive containment | PASS — 16/16, zero horizontal overflow |
| Images and media | PASS — 35/35 unique module visuals plus one homepage reuse; 6/6 videos; no broken referenced images |
| Drive video interaction | PASS — click-to-load, Close, Escape, focus return and mobile containment |
| Knowledge-check save and reload | PASS |
| Activities and challenge coverage | PASS — 19 activities; Modules 1–10 represented in the challenge bank |
| Teacher resource links and Office signatures | PASS — 21/21 local, 11/11 external, 2 DOCX and 10 PPTX |
| Presentation render and overflow QA | PASS — 80/80 renders and 10/10 deck overflow tests |
| Teaching-program render | PASS — all 10 pages inspected across two documents |
| DOCX accessibility audit | PASS — 0 high, 0 medium, 0 low findings in each document |
| Runtime/privacy leak scan | PASS |

The first functional pass exposed only a missing favicon request. An explicit SVG favicon was added to all 16 routes, and the complete route/viewport gate was rerun cleanly.

## Frozen-candidate contract

The payload digest is computed over sorted relative path, byte length and file SHA-256 values. Files under `docs/audits/**` are deliberately excluded so independent content, visual and acceptance reports can be written without mutating the candidate they audit. The exact repaired-candidate digest and full file register are in `docs/audits/freeze-manifest-v1.1.json`; v1.0 remains only as the historical pre-repair freeze record.
