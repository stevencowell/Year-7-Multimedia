# Year 7 Multimedia integrated candidate manifest v1.1

Produced: 25 August 2026, Australia/Sydney

State: **evidence-uplift candidate definition; release state is recorded separately after independent acceptance**
Supersedes: v1.0 for evidence counts, runtime paths and save/revisit behaviour

## Candidate purpose

This incremental candidate strengthens evidence gathering at the end of every existing theory section. It preserves the accepted course identity, theory, visual assets, presentations, activities, folio, assessment boundary and navigation; one existing visual caption and alt description are corrected to match their photograph.

## Integrated student course

| Component | Current state |
|---|---:|
| Core routes | 16 |
| Modules | 10 |
| Named theory sections | 30 |
| Feedback-rich multiple-choice checks | 150 |
| Scaffolded extended responses | 30 |
| Retained higher-order capstones | 30 |
| Saved evidence records per module | 21 |
| Applied Learning Activities | 19 |
| Challenge-bank tasks | 11 |
| Folio stages | 8 |

Each section now ends with a grouped five-question knowledge check, one saved extended response, its linked applied activity where present, and the retained capstone. Visible theory links, restored answer feedback, word guides, word counts, autosave and timestamps strengthen revisit evidence without claiming submission.

## Changed runtime paths

- `data/evidence-extension-v1.1.js`
- `data/visual-overrides-v2.js`
- `scripts/module-shell.js`
- `styles.css`
- `modules/module-01.html` through `modules/module-10.html`

## Preserved boundaries

- Existing q01–q03 and capstone storage keys remain byte-for-byte compatible.
- The authoritative theory and source references in `data/course-content.js` are unchanged.
- The teacher program's explicit 90-check map remains the core set; the added records are supplementary formative evidence under the same section/outcome mapping.
- No assessment authority, task rule, weighting, date, software-access requirement, safety rule or publication setting is added.
- Generated and sourced image files, video, PowerPoint, folio, assessment and teacher-resource payloads are unchanged.
- The M07-S03 visual caption and alt description now name the storyboard, playback screens and editable-source/output tokens actually visible in the existing photograph.

## Candidate gates

The exact frozen tree must pass current content audit, affected visual/layout audit and course acceptance. Required journeys include legacy-data reload, new evidence save/reload, feedback/help coherence, keyboard/touch access, print output, every module at laptop width and exactly 390 px, and zero browser or asset failures.
