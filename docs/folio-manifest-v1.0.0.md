# Year 7 Multimedia folio manifest v1.0.0

Produced: 24 August 2026, Australia/Sydney  
Specialist stage: New TAS Course Site Builder Stage 11  
State: **historical Stage 11 handoff snapshot; the final local integration is reconciled in `specialist-reconciliation-v1.1.md`; not committed, pushed or deployed**

## Ownership and boundary

The historical specialist handoff owned only `handoff/folio/` and this manifest. Stage 13 subsequently integrated the retained runtime files into `folio.html`; exact final hashes and intentionally omitted preview/test files are recorded in `specialist-reconciliation-v1.1.md`.

This package is a calm eight-stage project-evidence folio. It does not reproduce theory lessons, copy quiz answers, make a formal assessment judgement, upload to Drive/Classroom or claim teacher-observed performance.

## Interaction and evidence contract

| Contract item | Value |
|---|---|
| Course ID | `year7multimedia` |
| Schema version | `1.0.0` |
| Text record | `year7multimedia:folio:v1:state` in browser `localStorage` |
| Compatible migration inputs | `year7multimedia:folio`; `year7multimedia:folio:v0:state` |
| Image records | IndexedDB `year7multimedia-folio`, store `images`, one image per stage |
| Image rules | JPG, PNG or WebP; maximum 3 MB per stage; type and size checked before storage |
| Editable backup | JSON with prompts' response state and embedded image data; MP4 files excluded |
| Restore | Course ID, schema, field record, image stage/type/size and embedded data checked before guarded overwrite |
| Submission export | Self-contained HTML containing prompt context, text and embedded images; no scripts or external styles; MP4 files excluded |
| Print | A4 browser print / Save PDF with controls hidden, complete auto-wrapped text values and one page for each stage after the orientation page in the tested fixture |
| Reset | Guarded deletion of only the current folio text record and current folio image store; legacy records are not deleted |
| Submission truth | Save, backup, export and print are preparation only, not formal submission evidence |

## Evidence-item map

| ID | Student action and selected evidence | Drive-first source purpose | Learning/activity relationship | Image and assessment boundary |
|---|---|---|---|---|
| `brief-audience` | Define the original business, slogan, products and audience; keep the concise brief and originality explanation. | `Business Planning Brainstorm`, Drive `13tX...`, text SHA-256 `DC7E5F09...AD533C`; controls the business-planning fields and responsible-AI boundary. | Module 1 planning may be revised into this card. Quiz answers remain separate. | No image required. Project evidence only; formal status is Teacher to confirm. |
| `visual-direction` | Set the palette, typography and observable criteria; add a mood board or visual-direction image and caption. | `Being a Graphic Designer`, Drive `18vZ...`, text SHA-256 `0DB87C1D...9288F`; controls palette, type, hierarchy and mood-board use. | Module 2 may generate alternatives; only the selected direction is retained. | Student-created image stays browser-local and is included in backup/export. Not automatically marked or submitted. |
| `logo-system` | Present the original logo, rationale and scale/contrast check; add a logo image and caption. | `Creating a Logo in Canva Demo Video`, Drive `1QwB...`, byte SHA-256 `4BDD6997...B5BE8`; workflow support only. | Module 3 ideation and critique remain learning work; the folio keeps the selected version and reason. | The teacher video is not criteria. Imported evidence must be the student's own work. |
| `menu-ethics` | Explain information hierarchy and one honest marketing decision; add the student's menu image and caption. | `Canteen Menu WWHS.jpg`, Drive `13iv...`, SHA-256 `2348BBD0...2F4D1`, for hierarchy only; marketing simulation master, Drive `1yFG...`, SHA-256 `8B4F519C...D8970`, for greenwashing and responsibility. | Modules 4 and 8 activities inform the card; full activity responses stay on their learning route. | The canteen image is not current price/product authority. No prices are copied into the folio package. |
| `poster-context` | Explain viewing order and a context-driven improvement; add a poster or mock-up and caption. | Current Drive poster and three mock-ups are the first visual exemplars; original poster Drive `15TN...`, SHA-256 `2E850274...AA13B`; poster demo Drive `1xN8...`, SHA-256 `EE27D90F...D9FFE`. | Module 5 construction and critique may produce drafts; only selected evidence and explanation belong here. | Drive images are exemplars, not student evidence. Student work must be original. |
| `uniform-application` | Apply the identity to a staff-uniform concept and justify consistency/suitability; add an image and caption. | `Creating a Staff Uniform in Canva Demo`, Drive `1hIu...`, SHA-256 `8D1CDA43...BF7A6`; controls the demonstrated application workflow. | Module 6 alternatives can be compared before selecting one concept. | Records a design decision, not teacher-observed practical competence. |
| `motion-advertisement` | Explain states, transition/timing, MP4 filename and playback check; add one useful still or storyboard image. | `Match and Move`, Drive `1yRW...`, SHA-256 `5662A70F...01AA4`, is the first-priority tutorial. `Match and Move Advertising`, Drive `1dk-...`, SHA-256 `3386649C...01507`, is retained only as a verified source-quality check (`REWORK`), not a finished exemplar. | Module 7 storyboard/motion practice stays separate; selected motion evidence is kept here. | The folio never imports or backs up MP4. A still and filename do not prove video submission. |
| `web-evaluation` | Record the teacher-approved site location, pages/media/access check, feedback, evaluation and a privacy-safe screenshot. | `Google Sites Demonstration`, Drive `1PV_...`, SHA-256 `F1D1A7F4...6840FC`; `Website Link`, Drive `1M_I...`, SHA-256 `C750AB88...E49`; evaluation form structure SHA-256 `36792E83...258BCE`. | Modules 9-10 build and evaluate the connected site; only final evidence and synthesis belong here. | Crop names, emails, account menus, comments and sharing details. A saved link is not proof of access or submission; publishing/submission settings are Teacher to confirm. |

The existing Drive images and videos remain the first teaching/exemplar sources through their matching modules. This folio deliberately does not re-host them as decorative card media: its image controls are for students' own selected evidence. Stage 13 should integrate this handoff with the accepted Stage 08/09 media package, not duplicate or replace that package.

## Artifact inventory

| File | Bytes | SHA-256 |
|---|---:|---|
| `folio-data-v1.0.0.js` | 20,104 | `99B34BE85430BCDDE142B536C6E33A0F982F0307BA70BFE28FBED17A0B06FB0D` |
| `folio-fragment-v1.0.0.html` | 4,055 | `6EF794922C77BE36F350DA7B8E9345C10A76D396DE91F3FCCABFBC32EC9CD471` |
| `folio-v1.0.0.css` | 9,865 | `7FF7F2D3E9870ED46EF0D63B5602E46AD81ABDEE561DBB97E178666B17EB5F22` |
| `folio-v1.0.0.js` | 29,723 | `A5C77E03E9D9E71E5C664D57658AB370C45A9E292E064E70B839FDC2B7D4AEDA` |
| `preview-loader-v1.0.0.js` | 605 | `D7B87A3B1DDFE34A37BF4EE5CD1884180AC7454F181DAEEB5F4AE36649551E28` |
| `preview.html` | 486 | `F907E818B426BBF8AC21A2B196A08E68036298E989647235665C918E42C1F1D9` |
| `README.md` | 2,301 | `CD55DB1AEAEB58B1256103ED2215D69BCBAECB5D3449D12F577EC78228DBB316` |
| `test-folio-handoff.mjs` | 10,528 | `6BE236AA90CF09B00EE67E0BFC8B01A2CB746EDB9D12E29952674967AB37E1FF` |

The hashes above identify the final specialist handoff bytes. Stage 13 must re-hash the integrated candidate because integration changes the course digest.

## Focused QA

Final focused test result: **PASS**.

- eight unique stages rendered;
- first use and namespaced text autosave passed;
- save/reload restoration passed;
- compatible migration path is present and non-destructive;
- invalid image type was rejected;
- valid image persisted through IndexedDB and reload;
- editable JSON backup included text and image; guarded reset and restore passed;
- wrong-course backup was rejected;
- submission export was self-contained, contained the selected image and text, contained no script or external stylesheet, and retained the non-submission boundary;
- print controls were hidden; final tested A4 output was nine pages (orientation plus eight complete stage pages), visually inspected with no clipping, overlap, blank spill page or black-glyph fault;
- 1440 x 900 and exact 390 x 844 rendered without horizontal overflow;
- visible touch controls were at least 44 px high;
- browser console/page errors: zero.

QA is specialist-level only. Direct `folio.html` navigation and complete-course interaction remain Stage 13/17 responsibilities.

## Historical Stage 13 integration request — completed

1. Replace only the current Stage 11 placeholder in `folio.html` with `handoff/folio/folio-fragment-v1.0.0.html`.
2. Load the scoped CSS, data and script in the order recorded in `handoff/folio/README.md`.
3. Preserve the site header, footer, navigation and existing `year7multimedia:` family namespace.
4. Bind an exact Stage 10 activity link only where a final activity-to-card contract exists; otherwise retain the current module revisit links.
5. Re-run direct-route, navigation, print and 390 px checks after integration.

## Unresolved items

- Formal assessment status, task identity, due information, weighting, criteria and submission route: **Teacher to confirm**.
- External/domain-only Google Sites publication rule: **Teacher to confirm**.
- Final Stage 10 activity anchors: wait for the integrated activity manifest; do not guess them.
- Complete course certification and publication: outside Stage 11 ownership.
