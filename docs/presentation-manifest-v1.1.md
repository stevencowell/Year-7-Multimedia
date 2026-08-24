# Year 7 Multimedia presentation manifest v1.1

**Stage 07 source/build repair verdict:** PASS  
**Prepared:** 24 August 2026  
**Scope:** ten editable 16:9 PowerPoint decks, eight slides per module, repaired after the independent Stage 16 visual audit.  
**Release boundary:** complete local-candidate presentation package; no commit, push or deployment.

## Source and fact boundary

The repaired package remains derived from the current local course and these authorities, in order:

1. `docs/source-map-v1.0.md`
2. `docs/drive-source-manifest-v1.0.md`
3. `docs/core-artefact-manifest-v1.0.md`
4. `data/course-content.js`
5. `data/media-data.js`
6. `docs/visual-production-manifest-v1.0.md` and `docs/video-manifest-v1.0.md`

The decks teach source-supported concepts and formative learning evidence. They do not invent software access, task conditions, product facts, formal assessment status or submission claims.

## Repair register

The projection-scale explanatory treatment was rebuilt on:

- M01 slides 3–5; M02 slides 3–5; M03 slides 3–5;
- M04 slides 3–4; M05 slide 4; M06 slides 3 and 5;
- M07 slides 3–5; M08 slides 3–5; M09 slides 3 and 5; and
- M10 slides 3 and 5.

Each repaired diagram now uses fewer, larger concept labels in proportionally sized boxes, a clear relationship or sequence, and one concise decision statement. The change is a layout redesign, not an out-of-box type enlargement.

Additional bounded repairs:

- M04 slide 1 now shows an enlarged, readable crop of the supplied Drive canteen-menu source. The slide explicitly states that current details are not confirmed.
- M05, M06 and M07 slide 4 use 330 × 186 px Drive-first poster images with a projection-scale process strip, a visible teacher Ctrl+click instruction, watch-for prompt and separate discussion region.
- M03 slide 1, M05 slide 4, M06 slide 4, M07 slides 1 and 4, and M09 slide 4 now contain functioning external picture hyperlinks to their authorised Drive file IDs. No `CLICK TO LOAD` claim remains without a link.
- Every exported OOXML picture object has a non-empty meaningful `name`, `title` and `descr`. All 14/14 picture objects pass the machine check.
- M07 slide 5 still displays the exact source boundary: **“The supplied 0:16 clip is REWORK—not a finished motion exemplar.”**

## Package register and integrity

All files are under `resources/presentations/`.

| Module | Editable PPTX | Slides | SHA-256 | Render binding SHA-256 |
|---|---|---:|---|---|
| 01 | `module-01-the-design-challenge.pptx` | 8 | `3dce387f917b78c728a84fcbdf5e4b15533c170daf230c725f7e92bddeadb7cd` | `9e6cae600aee672e7ab267910bdc87fd06ed9b6e690560eeafeec9ffe439fafe` |
| 02 | `module-02-visual-language.pptx` | 8 | `23bfbfda2cb121df21616872f3f525d33808474ff36304d54d306813bd74bb75` | `2bd5419deaae491091477cbbe341246fe5390991a52c7cb127e7301277ee1440` |
| 03 | `module-03-logo-systems.pptx` | 8 | `4fd1f834296923515a7567c376fa2777304867e58e14552f2b1cbf415278672b` | `f428b653639326a1d7ba8bf170eb7f340e7f780712928395d237b59c86fa43f0` |
| 04 | `module-04-menu-information-design.pptx` | 8 | `a470577a5065b123a0633562d0d7bfe0889fb206d6218450e83cc20867b68294` | `b34b7f37a3ad16b12eda6b0c4770292b768fe6ad64d6d7a7661d03e64ef22529` |
| 05 | `module-05-promotional-poster.pptx` | 8 | `ee614b025a1168e97202c249faab6a5208484ba8e22e679d6925905f1f5e2d60` | `3a664131cbed3af7e87e3aafc06905ce8d99061026f110ea64a1c346ad20c7c6` |
| 06 | `module-06-brand-applications.pptx` | 8 | `f63931f1b363f30db420917c6260676678318a9aff6f5d9cc91b7c2a8047c432` | `544b636d251d9a7b23ba0e5d85bcf6b7acbaa720bab012bc174afda0124ba7fb` |
| 07 | `module-07-motion-advertising.pptx` | 8 | `7730e2a0cba09ab2c2f7d9d2a6c97e535d0b19741a1921b6c71ad7bec05c2877` | `16f59ccc4eb5acba059ec24faa48593850ea30f2c785fa637c24219b784e6bb8` |
| 08 | `module-08-ethical-marketing-systems.pptx` | 8 | `6dbe27eaca2d7d38ce18842f559d6b7e41740e1b460756447afca02dc0197e6c` | `8855929efa1311eef49dd68751d651e2f7b804093eaf31b1a0634d37db43d2b0` |
| 09 | `module-09-web-portfolio.pptx` | 8 | `b42a978a2358490edab2d280751f2d7a7e2408b4229313a7a0ea3982d2f78bb7` | `1702a5734dcd760e595b1e4cded1f97f923cb805358826ffbefc792898c4112d` |
| 10 | `module-10-present-evaluate-improve.pptx` | 8 | `293e28258fef4925d6a76cc2ad3220b639dc956c3cfe98ecbf2db1aeba56ffd2` | `c9d5f2c58510ed6eb1ac9dce9096c2499421e1dc390535d2829173fec0d8d6e6` |

Package render-binding SHA-256: `6b2a6ea852ea6dc6a1f2b434dc9d2a8bf305158ccefc088fedbdcf0d1e81a13d`.

## Classroom deck contract

Every deck contains:

1. a module title, approved visual or Drive poster, and teaching question;
2. a three-section learning path and retrieval warm-up;
3. three named, teacher-led theory-section slides;
4. a three-question stop–think–explain check;
5. substantial formative written-evidence scaffolding; and
6. an exit reflection with the explicit reminder that local save is not submission.

All 80 slides have presenter notes and a per-slide `[Sources]` block. Notes identify theory/check IDs, approved visual provenance, and relevant Drive titles/IDs. Drive posters do not autoplay and use teacher-controlled Ctrl+click directions.

## QA evidence

- Artifact operation was marked exactly once for this repair immediately before authoring: operation kind `edit`, 10 expected outputs, format `pptx`.
- Rebuild: 10/10 editable PPTX files and 80/80 slides generated by `@oai/artifact-tool`.
- Import/render: all ten post-processed PPTX packages imported successfully through artifact-tool and produced 80/80 full-size 1280 × 720 PNGs.
- Full-size visual inspection: 80/80 individual slides reviewed at original resolution; all 10 montages also inspected. Result: no clipping, overlap, degraded image, misleading interaction direction or projection-legibility failure.
- Overflow: 10/10 decks passed the installed `slides_test.py` logic through the documented Windows renderer workaround.
- OOXML: 14/14 pictures have complete meaningful accessibility metadata; six authorised Drive picture hyperlinks resolve to the expected Drive IDs; 80/80 `[Sources]` blocks are present.
- Source boundary: the M07 0:16 clip remains visibly marked REWORK and is not used as a finished exemplar.
- Signed-in dashboard frames were not used as decoration.

Machine-readable, candidate-resolvable evidence:

- `resources/presentation-qa/reports/ooxml-accessibility-and-links-v1.1.json`
- `resources/presentation-qa/render-integrity-manifest-v1.1.json`
- `resources/presentation-qa/reports/source-build-final-validation-v1.1.json`
- full-size renders: `resources/presentation-qa/renders/`
- montages: `resources/presentation-qa/montages/`

## Final boundary

This is a local Stage 07 PASS prepared with self-contained QA evidence for the frozen candidate and a fresh independent Stage 16 audit. No commit, push, release or deployment state was changed.
