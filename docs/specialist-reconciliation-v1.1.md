# Year 7 Multimedia specialist reconciliation v1.1

Produced: 24 August 2026, Australia/Sydney  
Owner: Stage 13 integration  
State: **current local integrated identity; no commit, push or deployment**

This record cross-walks the historical specialist handoff snapshots to the exact files retained in the final candidate. The older manifests remain useful evidence of what each specialist owned at handoff time; they are explicitly historical and do not override the final file hashes below. The aggregate candidate digest and complete file register are authoritative in `docs/audits/freeze-manifest-v1.1.json`.

| Specialist area | Historical handoff identity | Final integrated artifact | Bytes | Final SHA-256 | Current coverage and state |
|---|---|---|---:|---|---|
| Theory and knowledge/evidence | Historical Stage 05/06 snapshot: `0C4027EAF491EF431E55A2975A3326B4B12C9B13EA328D59A03CEFCC396A182B` | `data/course-content.js` | 149,743 | `8c514ee9a1e6db7547f32ef50b2e6c7011c822fae44416883e7a09387eb5ddff` | 30 named sections, 90 checks and 30 formative capstones across Modules 1–10 |
| Applied Learning Activities | Historical Stage 10 snapshot: `8C3A9B439D4B6260F01CAD05F8A2DFB7F734E746983DD3B0CE1FBC102A45408B` | `data/activity-data.js` | 35,153 | `bf419144953290dbc47161afbe7903262713e96516bc35ee05c1912af2cc1966` | 19 concept-linked activities and 11 challenge-bank tasks covering Modules 1–10 |
| Folio data | Historical Stage 11 `folio-data-v1.0.0.js`: `99B34BE85430BCDDE142B536C6E33A0F982F0307BA70BFE28FBED17A0B06FB0D` | `handoff/folio/folio-data-v1.0.0.js` | 20,188 | `acbc72186d9be48a5652947459b783bb8dde7e2035d90a2f044fb50f3cb56ced` | Eight integrated project-evidence stages; student-facing task directions reconciled |
| Folio runtime | Historical Stage 11 `folio-v1.0.0.js`: `A5C77E03E9D9E71E5C664D57658AB370C45A9E292E064E70B839FDC2B7D4AEDA` | `handoff/folio/folio-v1.0.0.js` | 29,653 | `8d129614e9d36664c1c9627d99830b2d233b0bd54b7acdee8713d3525810c61c` | Browser-local text/image storage, backup, restore, submission HTML, print and guarded reset |
| Folio presentation CSS | Historical Stage 11 `folio-v1.0.0.css`: `7FF7F2D3E9870ED46EF0D63B5602E46AD81ABDEE561DBB97E178666B17EB5F22` | `handoff/folio/folio-v1.0.0.css` | 9,865 | `7ff7f2d3e9870ed46ef0d63b5602e46ad81abdee561dbb97e178666b17eb5f22` | Retained scoped folio layout, mobile and A4 print treatment |
| Folio presentation | Historical Stage 11 `folio-fragment-v1.0.0.html`: `6EF794922C77BE36F350DA7B8E9345C10A76D396DE91F3FCCABFBC32EC9CD471` | `folio.html` | 5,957 | `663611bdfbe3f7e30fd59e1f0091f886cd586062affabd1f24de5c5c7c455b6a` | Direct student route with calm learning/submission boundary |
| Assessment data | Historical Stage 12 `assessment-data-v1.0.0.js`: `DDC1814C0ECDEBB6ED9AC558388D41C357C71671570674202458AAC0FEAC8BE5` | `handoff/assessment/assessment-data-v1.0.0.js` | 2,493 | `7f95924a65624036b1903e12d2098056ad0f74a18f0eaa9a1de40fabeb491977` | Four formative evidence areas; public runtime contains only course-safe evidence guidance |
| Assessment runtime | Historical Stage 12 `assessment-v1.0.0.js`: `715D48824BFEF8B86B32878F85007C53B9A1A373998942B5EA38BD475E7E0F4E` | `handoff/assessment/assessment-v1.0.0.js` | 4,420 | `101009a406e06aecd542fbefee6d0b30b57ceabfa1943a59312ac5a6a55da6db` | Version-bound internal read receipt and print control; visible status omits build/version metadata |
| Assessment presentation CSS | Historical Stage 12 `assessment-v1.0.0.css`: `A3D9D31A14209CF612B1A6DA2CF4E1DABA5B0CC72791A1975F3264C32288BE0C` | `handoff/assessment/assessment-v1.0.0.css` | 5,225 | `a3d9d31a14209cf612b1a6da2cf4e1daba5b0cc72791a1975f3264c32288be0c` | Retained scoped assessment layout, mobile and print treatment |
| Assessment presentation | Historical Stage 12 `assessment-fragment-v1.0.0.html`: `7E90AC830E45FE434F76649F41D7C81C60A359FB964CBE2F3205F564C439C539` | `assessment.html` | 6,347 | `196d1c225b9f847dd17bdabb52763ce575245fd032a04043d69eb9da44aa79c5` | Direct student route; formative evidence, separate formal notice and teacher hand-in direction |
| Integrated media map | Historical Stage 08/09 `data/media-data.js`: `B9FC02F6EBC9518E1318089272955BF7551DB8AD9D605A668703D96704A9365D` | `data/media-data.js` | 82,801 | `b9fc02f6ebc9518e1318089272955bf7551db8ad9d605a668703d96704a9365d` | 35 unique module teaching visuals and six Drive video cards; homepage reuse recorded separately |

## Presentation and program crosswalk

- Ten exact PPTX names are reconciled in `docs/presentation-manifest-v1.1.md` and the machine-readable render-integrity record packaged with the final QA evidence.
- The editable teaching program and delivery register are reconciled in `docs/program-manifest-v1.0.md`.
- The provisional 20-lesson program maps the same 30 named theory sections, 90 checks, 30 capstones, 19 activities, 35 module visuals, six Drive videos and eight folio stages.

## Intentionally omitted specialist-only files

The final package deliberately omits temporary `preview.html`, preview-loader, fragment, README and test files from the Stage 11 and Stage 12 handoff folders. It retains only the data, CSS and JavaScript files referenced by `folio.html` and `assessment.html`. Presentation `.inspect.ndjson`, authoring scripts and transient render workspaces are also omitted; the final digest-bound presentation QA evidence is packaged separately.

## Student/teacher separation after integration

- Student routes state only that browser-local work is preparation, saving is not submission, and any separate approved task notice and hand-in directions provided by the teacher control formal assessment.
- Source recovery, verification dates and unresolved authority summaries remain in `teacher-resources.html` and teacher-facing manifests; the full `TTC-01` to `TTC-08` register remains in the program data and editable teacher documents.
- The private response spreadsheet, student identities, responses, marks and analytics remain excluded.

## Revalidation boundary

Changing any final artifact above invalidates its row and the aggregate candidate digest. Historical snapshot hashes do not need to change; they identify the specialist handoff bytes from which integration began.
