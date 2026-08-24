# Year 7 Multimedia specialist reconciliation v1.2

Produced: 25 August 2026 (Australia/Sydney)

Status: **current incremental reconciliation for the evidence uplift**
Supersedes: v1.1 only where evidence counts or runtime behaviour differ

## Reconciled change

| Domain | Current artifact | Reconciled state |
|---|---|---|
| Stable theory | `data/course-content.js` v1.0 | Unchanged; remains the controlling explanation and source boundary |
| Evidence extension | `data/evidence-extension-v1.1.js` | Adds 60 MCQs and 30 extended responses across all 30 sections |
| Evidence interface | `scripts/module-shell.js`, `styles.css` | Groups five checks; adds theory links, revisit feedback, word guides/counts and timestamped autosave |
| Visual metadata | `data/visual-overrides-v2.js` v2.0.1 | Corrects the M07-S03 caption and alt description to match the unchanged existing photograph |
| Module loaders | ten `modules/module-XX.html` routes | Load the explicit v1.1 evidence extension, cache-busted v2.0.1 visual metadata and cache-busted interface |
| Knowledge manifest | `docs/knowledge-evidence-manifest-v1.1.md` | Current counts, anchors and storage contract |
| Integrated manifest | `docs/integration-manifest-v1.1.md` | Current candidate shape and acceptance boundary |
| Teacher program | existing program data and DOCX | Retains the 90 explicitly mapped core checks; additions inherit the same section/outcome mapping as supplementary formative evidence |
| Assessment | existing formative guide and formal-task boundary | Unchanged |
| Image assets, presentations, videos and folio | current accepted artifacts | Asset payloads unchanged by this uplift |

## Reconciliation result

- 10 modules and 30 substantial theory sections remain intact.
- Evidence grows from 90 to 150 multiple-choice checks.
- Written evidence grows from 30 capstones to 30 extended responses plus 30 retained capstones.
- Existing student choices and capstone text remain attached to their original keys.
- No new teacher-controlled fact or `Teacher to confirm` item is created.
- The work remains browser-local formative learning evidence and is not formal submission.

Independent Stage 15, affected Stage 16 and Stage 17 reports must bind to the final frozen candidate digest; historical passes cannot certify this changed tree.
