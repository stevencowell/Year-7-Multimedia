# Year 7 Multimedia presentation manifest v1.0

**Snapshot status:** historical pre-Stage 16 repair; superseded by `presentation-manifest-v1.1.md`  
**Historical Stage 07 handoff verdict:** PASS at handoff; the later independent Stage 16 audit required bounded repair  
**Current presentation authority:** `presentation-manifest-v1.1.md` and `resources/presentation-qa/render-integrity-manifest-v1.1.json`  
**Prepared:** 24 August 2026  
**Scope:** ten editable, classroom-ready PowerPoint decks for the integrated Year 7 Multimedia course.

## Source and fact boundary

The presentation package is derived from the current local course and uses these authorities in order:

1. `docs/source-map-v1.0.md`
2. `docs/drive-source-manifest-v1.0.md`
3. `docs/core-artefact-manifest-v1.0.md`
4. `data/course-content.js`
5. `data/media-data.js`
6. `docs/visual-production-manifest-v1.0.md` and `docs/video-manifest-v1.0.md`

The decks teach source-supported concepts and formative learning evidence. They do not invent software access, task conditions, product facts, formal assessment status or submission claims.

## Package register

| Module | Editable file | Three named teaching sections | Drive-first / approved visual use |
|---|---|---|---|
| 01 — The design challenge | `module-01-the-design-challenge.pptx` | Problem, purpose and brief; Users and target audiences; Original ideas and responsible AI | Approved audience-research photograph and editable course diagrams |
| 02 — Visual language | `module-02-visual-language.pptx` | Colour and meaning; Typography and tone; Hierarchy, layout and mood boards | Approved mood-board photograph and editable course diagrams |
| 03 — Logo systems | `module-03-logo-systems.pptx` | Symbols and recognition; Scale, contrast and simplicity; Logo variants and critique | Drive-first **Creating a Logo in Canva Demo Video** (3:15, MATCHED) plus editable diagrams |
| 04 — Menu information design | `module-04-menu-information-design.pptx` | Grouping and information architecture; Readability and scanning; Honest product information | Current Drive-sourced canteen menu image plus editable diagrams |
| 05 — Promotional poster | `module-05-promotional-poster.pptx` | Composition and focal point; Image selection and background removal; Calls to action and mock-ups | Current Drive poster artwork/mock-ups and **Create a poster in Canva** (7:54, MATCHED) |
| 06 — Brand applications | `module-06-brand-applications.pptx` | Consistent identity; Designing a staff uniform; Checking suitability and accessibility | **Creating a Staff Uniform in Canva Demo** (1:54, MATCHED) plus approved brand-application visuals |
| 07 — Motion advertising | `module-07-motion-advertising.pptx` | Frames, states and transitions; Match and Move; Timing, export and quality checks | Drive-first **Match and Move** (6:21, MATCHED); the supplied 0:16 advertising clip is visibly labelled REWORK and is not presented as a finished exemplar |
| 08 — Ethical marketing systems | `module-08-ethical-marketing-systems.pptx` | Persuasion and target groups; Greenwashing and truth; Ripple effects and designer responsibility | Approved source visuals and editable claim/evidence/system diagrams |
| 09 — Web portfolio | `module-09-web-portfolio.pptx` | Site structure and navigation; Preparing and embedding media; Publishing, access and submission | Drive-first **Google Sites Demonstration** (8:55, MATCHED) with exact Drive reference in presenter notes |
| 10 — Present, evaluate, improve | `module-10-present-evaluate-improve.pptx` | Success criteria and feedback; Explaining design decisions; Evaluation and next iteration | Approved peer-critique photograph and editable feedback, reasoning and evaluation diagrams |

Drive-first means relevant, approved Drive material is used before substitutes. Unrelated Drive media has not been forced into modules where it does not support the named theory.

## Classroom deck contract

Every deck is 16:9 and contains eight slides:

1. module title, visual and teaching question;
2. three-section learning path and retrieval warm-up;
3. first named theory section;
4. second named theory section;
5. third named theory section;
6. three-question stop–think–explain check;
7. substantial formative learning-evidence prompt with scaffolding;
8. exit reflection and explicit reminder that local save is not submission.

Every slide has editable text/shapes, presenter notes for teacher-led explanation, and a `[Sources]` block. Notes identify the exact theory/check identifiers, visual source, and relevant Drive title/ID. Student-facing prompts use accessible Year 7 language and separate observations from unsupported claims.

## Historical pre-repair QA evidence

- Artifact operation marked exactly once immediately before authoring: `create`, ten expected outputs, `pptx`.
- Output count: 10 PPTX files, 80 slides, 30 named theory-section slides.
- OOXML validation: 80/80 slide records, 80/80 presenter-note records and 80/80 `[Sources]` blocks.
- Slide size: 12,192,000 × 6,858,000 EMU in every deck, ratio 1.777778 (16:9).
- Final artifact-tool renders: 80/80 PNGs present under `work/presentation-build/renders-final2/`.
- Visual inspection: all individual full-size slides reviewed during the final visual iteration; all 10 post-build montages re-inspected under `work/presentation-build/montages-final2/`.
- Focused correction: Module 7 slide 4 Drive-demo thumbnail, watch-for text, discussion heading and prompt now occupy separate readable regions. The corrected full-size render passed inspection.
- Overflow validation: all ten decks returned `Test passed. No overflow detected.` from the installed `slides_test.py` logic through the documented task-local Windows renderer workaround.
- Signed-in dashboard frames were not used as decoration.

The artifact renderer on this Windows runtime emits all valid PNG files and JSON before a Node teardown status occurs. `work/presentation-build/slides-test-artifact-workaround.py` accepts a render only when its JSON parses and every declared image exists; it then runs the installed overflow-test logic unchanged. Details and hashes are recorded in `work/presentation-build/final-validation-report.json`.

## Historical integrity register — superseded by v1.1

| File | Slides | SHA-256 |
|---|---:|---|
| `module-01-the-design-challenge.pptx` | 8 | `47b55791353d96d47415add6f8644a3078efd0e607169b2fe92546ef9e32e7b0` |
| `module-02-visual-language.pptx` | 8 | `02c83c1f61311a6b81c1b997ff353c9432e9b438e92d12dff16da0c305f07cd4` |
| `module-03-logo-systems.pptx` | 8 | `fde25117fd99b76b756b9b5e10691de70e69815823efb222ccca26cacc8fb655` |
| `module-04-menu-information-design.pptx` | 8 | `3ffd320be7d331e54cd87594110ac5ef3d70f73e8cfa5276f8c200289bf92aed` |
| `module-05-promotional-poster.pptx` | 8 | `bf89d9b8c89a1f958012d874bdffe74f484164e836a8db3f390fe9582a50dddb` |
| `module-06-brand-applications.pptx` | 8 | `f0528391918725087dc3891c2ed44a5b1c57e7d0b04c8e789db96325a91a8b01` |
| `module-07-motion-advertising.pptx` | 8 | `0c828932df890a205ae75317ce25f1a881b8df12c4f3dbc82854848864aed770` |
| `module-08-ethical-marketing-systems.pptx` | 8 | `f4636f5751c259f99a03f66077c5759abf03ee34fcb1afad29969a02e279328c` |
| `module-09-web-portfolio.pptx` | 8 | `124269b78e342bce2e7425adb9686ac28675e3f15573cd32b8927a79eccb92c0` |
| `module-10-present-evaluate-improve.pptx` | 8 | `dd01c22870655f68735b8dbbd76a7df664acd10755ae2ac13498f10747abcc10` |

## Release boundary

This record preserves the original local Stage 07 handoff identity only. It is not the current presentation package. The repaired local package and self-contained QA evidence are recorded in v1.1; no commit, push, deployment, assessment decision or release action is included.
