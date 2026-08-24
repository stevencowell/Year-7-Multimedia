# Knowledge and evidence manifest v1.1

Built: 25 August 2026 (Australia/Sydney)

Status: **current evidence-uplift handoff; supersedes v1.0 for runtime counts and behaviour**

Course: Year 7 Technology — Multimedia
Stable namespace: `year7multimedia:`

## Owned artifacts

- `data/evidence-extension-v1.1.js` — additive q04/q05 and extended-response records.
- `scripts/module-shell.js` — grouped five-question checks, theory-return links, restored feedback, word counts and saved timestamps.
- `styles.css` — readable grouped-check and response states.
- `modules/module-01.html` through `module-10.html` — explicit versioned runtime loading.

The stable Stage 05 theory in `data/course-content.js` remains unchanged. The extension adds evidence against its exact section and block anchors.

## Evidence contract

- Each of the 30 substantial theory sections now contains five purposeful multiple-choice checks:
  - q01–q03 retain the accepted recall, concept-link and misconception records;
  - q04 interprets the section's theory or learning visual;
  - q05 applies or evaluates the idea in an authentic design scenario.
- Each multiple-choice option has answer-specific reasoning feedback. Hints remain answer-neutral. Feedback includes a visible link to the exact theory block.
- Each section now has one new scaffolded extended response, normally 75–110 words, followed by the retained higher-order capstone.
- Every written response shows a word guide, scaffold, sentence starters where useful, quality indicators, a live word count and a local saved/revisit state.
- All records are labelled or described as **Formative learning evidence**. Browser saving is not cloud sync, formal assessment, submission, teacher observation or a competency decision.

## Counts

| Item | Current total |
|---|---:|
| Modules | 10 |
| Named theory sections | 30 |
| Multiple-choice checks | 150 |
| Feedback-bearing options | 450 |
| New extended responses | 30 |
| Retained capstone responses | 30 |
| Unique saved evidence records | 210 |
| Saved records per module | 21 |

## Storage compatibility

Existing records are preserved exactly:

- q01–q03: `year7multimedia:check:<question-id>`
- capstone: `year7multimedia:evidence:<section-id>`

New records use:

- q04–q05: the same check pattern with new unique IDs;
- extended response: `year7multimedia:response:<section-id>-extended-01`;
- saved timestamp: `<record-key>:saved-at`.

No old question ID, option ID, capstone ID or storage key is renamed or reused. Existing progress may represent a smaller percentage because more evidence is now available, but no saved response is deleted or detached.

## Sequence map

| Section | q04 help anchor | q05 help anchor | Extended-response key | Extended guide | Capstone guide |
|---|---|---|---|---:|---:|
| M01-S01 | `m01-s01-brief-role` | `m01-s01-example` | `year7multimedia:response:m01-s01-extended-01` | 80–100 words | 90–130 words |
| M01-S02 | `m01-s02-profile` | `m01-s02-example` | `year7multimedia:response:m01-s02-extended-01` | 80–100 words | 100–160 words |
| M01-S03 | `m01-s03-example` | `m01-s03-ai` | `year7multimedia:response:m01-s03-extended-01` | 90–110 words | 100–160 words |
| M02-S01 | `m02-s01-purpose` | `m02-s01-contrast` | `year7multimedia:response:m02-s01-extended-01` | 75–95 words | 100–160 words |
| M02-S02 | `m02-s02-system` | `m02-s02-legibility` | `year7multimedia:response:m02-s02-extended-01` | 80–100 words | 100–160 words |
| M02-S03 | `m02-s03-moodboard` | `m02-s03-hierarchy` | `year7multimedia:response:m02-s03-extended-01` | 90–110 words | 100–160 words |
| M03-S01 | `m03-s01-role` | `m03-s01-example` | `year7multimedia:response:m03-s01-extended-01` | 80–100 words | 100–160 words |
| M03-S02 | `m03-s02-scale` | `m03-s02-contrast` | `year7multimedia:response:m03-s02-extended-01` | 75–95 words | 100–160 words |
| M03-S03 | `m03-s03-family` | `m03-s03-critique` | `year7multimedia:response:m03-s03-extended-01` | 90–110 words | 100–160 words |
| M04-S01 | `m04-s01-source` | `m04-s01-example` | `year7multimedia:response:m04-s01-extended-01` | 80–100 words | 100–160 words |
| M04-S02 | `m04-s02-scan` | `m04-s02-example` | `year7multimedia:response:m04-s02-extended-01` | 75–95 words | 100–160 words |
| M04-S03 | `m04-s03-honesty` | `m04-s03-image-claim` | `year7multimedia:response:m04-s03-extended-01` | 90–110 words | 100–160 words |
| M05-S01 | `m05-s01-composition` | `m05-s01-balance` | `year7multimedia:response:m05-s01-extended-01` | 80–100 words | 100–160 words |
| M05-S02 | `m05-s02-example` | `m05-s02-removal` | `year7multimedia:response:m05-s02-extended-01` | 90–110 words | 100–160 words |
| M05-S03 | `m05-s03-example` | `m05-s03-action` | `year7multimedia:response:m05-s03-extended-01` | 80–100 words | 100–160 words |
| M06-S01 | `m06-s01-flexibility` | `m06-s01-system` | `year7multimedia:response:m06-s01-extended-01` | 90–110 words | 100–160 words |
| M06-S02 | `m06-s02-placement` | `m06-s02-example` | `year7multimedia:response:m06-s02-extended-01` | 80–100 words | 100–160 words |
| M06-S03 | `m06-s03-access` | `m06-s03-access` | `year7multimedia:response:m06-s03-extended-01` | 90–110 words | 100–160 words |
| M07-S01 | `m07-s01-continuity` | `m07-s01-states` | `year7multimedia:response:m07-s01-extended-01` | 80–100 words | 100–160 words |
| M07-S02 | `m07-s02-correspondence` | `m07-s02-example` | `year7multimedia:response:m07-s02-extended-01` | 80–100 words | 100–160 words |
| M07-S03 | `m07-s03-preflight` | `m07-s03-preflight` | `year7multimedia:response:m07-s03-extended-01` | 90–110 words | 100–160 words |
| M08-S01 | `m08-s01-persuasion` | `m08-s01-example` | `year7multimedia:response:m08-s01-extended-01` | 90–110 words | 100–160 words |
| M08-S02 | `m08-s02-test` | `m08-s02-example` | `year7multimedia:response:m08-s02-extended-01` | 90–110 words | 100–160 words |
| M08-S03 | `m08-s03-system` | `m08-s03-responsibility` | `year7multimedia:response:m08-s03-extended-01` | 90–110 words | 100–160 words |
| M09-S01 | `m09-s01-structure` | `m09-s01-example` | `year7multimedia:response:m09-s01-extended-01` | 80–100 words | 100–160 words |
| M09-S02 | `m09-s02-preparation` | `m09-s02-example` | `year7multimedia:response:m09-s02-extended-01` | 90–110 words | 100–160 words |
| M09-S03 | `m09-s03-states` | `m09-s03-example` | `year7multimedia:response:m09-s03-extended-01` | 90–110 words | 100–160 words |
| M10-S01 | `m10-s01-feedback` | `m10-s01-criteria` | `year7multimedia:response:m10-s01-extended-01` | 90–110 words | 100–160 words |
| M10-S02 | `m10-s02-evidence` | `m10-s02-evidence` | `year7multimedia:response:m10-s02-extended-01` | 90–110 words | 140–190 words |
| M10-S03 | `m10-s03-evaluation` | `m10-s03-improvement` | `year7multimedia:response:m10-s03-extended-01` | 100–110 words | 180–240 words |

## Program and assessment boundary

The existing teacher program continues to map the original 90 core checks explicitly. The 60 new multiple-choice checks and 30 extended responses are supplementary formative evidence attached to the same named theory sections, learning intentions, authorised outcomes and lesson sequence. They do not create a new outcome, project rule, formal task, mark, weighting, due date or submission method.

## Required verification

- Validate 10 modules, 30 sections, 150 checks, 450 options, one correct option per check, 30 extended responses and 30 capstones.
- Resolve every q04/q05, extended-response and capstone help anchor to a real theory block.
- Seed legacy q01–q03 and capstone values, reload, and confirm the same selected options and text return with visible feedback/saved state.
- Save and reload new q04/q05 and extended-response records without disturbing another section.
- Test keyboard/touch operation, live status, word counts, module print output and exact 390 CSS pixel containment.
