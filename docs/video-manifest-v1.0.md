# Video manifest v1.0

Built and checked: 24 August 2026  
Course: **Year 7 Technology — Multimedia: Fast Food Futures**  
Source dependency: `drive-source-manifest-v1.0.md`, `core-artefact-manifest-v1.0.md` and `source-map-v1.0.md`

Snapshot status: **historical Stage 09 production record; final integrated video-card identity is reconciled in `specialist-reconciliation-v1.1.md`**

## Result

- All **6** exact current Drive videos are mapped with their verified IDs, byte digests, browser-read durations, custom privacy-safe posters, click-to-load preview URLs and direct Drive fallbacks.
- Anonymous headless-browser checks returned HTTP 200, the exact Drive title and no sign-in prompt for every `/preview` and `/view` URL.
- Outcome: **5 MATCHED**, **1 REWORK**.
- No clip autoplays. A Drive iframe is created only after a real student button action.
- Every clip has an answerable **Watch for** prompt and an equivalent non-video route.
- Video posters are not teaching visuals and do not contribute to the 32–40 visual target.

## Important source finding

`Match and Move Advertising.mp4` is the exact authorised Drive file and its bytes match SHA-256 `3386649C…01507`, but full-clip sampling at 1, 3, 5, 8, 11, 14 and 15.5 seconds shows **Canva Home → Create a design → blank A4 document**. It does not show a finished motion advertisement. The source remains included because Steve required all six current videos, but it is labelled as a supplied source clip and **REWORK**, never as a finished exemplar. The verified 6:21 Match and Move tutorial plus the adjacent diagrams provide the intended equivalent learning path.

## Click-to-load implementation contract

Before action, render the custom poster, exact title, duration, source, Watch for prompt and **Open in Drive** fallback. Render no iframe.

After the student activates the play button:

1. create an iframe with the exact `previewUrl`;
2. preserve responsive 16:9 containment and a descriptive iframe title;
3. never add autoplay;
4. keep **Open in Drive** visible;
5. provide Close/Stop, Escape close and focus return;
6. keep the equivalent alternative adjacent;
7. create one library card per exact Drive ID and deep-link it to the named module section.

## Outcome table

| Module | Exact title | Duration | Outcome |
| ---: | --- | ---: | --- |
| 3 | Creating a Logo in Canva Demo Video.mp4 | 3:15 | **MATCHED** |
| 5 | Create a poster in Canva.mp4 | 7:54 | **MATCHED** |
| 6 | Creating a Staff Uniform in Canva Demo.mp4 | 1:54 | **MATCHED** |
| 7 | Match and Move.mp4 | 6:21 | **MATCHED** |
| 7 | Match and Move Advertising.mp4 | 0:16 | **REWORK** |
| 9 | Google Sites Demonstration.mp4 | 8:55 | **MATCHED** |

## Video records

### VD01 — Creating a Logo in Canva Demo Video.mp4

- **Outcome:** MATCHED
- **Module / section:** Module 3 — Logo variants and critique
- **Drive ID:** `1QwBddmlZ8KtJ_e1HzQFyY5EM-IpedPRg`
- **Source digest:** SHA-256 `4BDD6997A9A39E9D94A9CFEDC01467567BE473304D9CAE85400570A7719B5BE8`
- **Duration:** 3:15 (195.066667 seconds)
- **Frame size:** 1920 × 1080
- **Anonymous preview:** [Drive preview](https://drive.google.com/file/d/1QwBddmlZ8KtJ_e1HzQFyY5EM-IpedPRg/preview)
- **Direct fallback:** [Open in Drive](https://drive.google.com/file/d/1QwBddmlZ8KtJ_e1HzQFyY5EM-IpedPRg/view)
- **Poster:** `assets/video-posters/logo-canva-demo.svg`; SHA-256 `295DE4413F27658C00F869A802D80D1F3C2696811445948CFABD66E261946609`; Custom course poster; Drive account interface is not reproduced.
- **Teaching claim:** The supplied teacher screen recording demonstrates a Canva logo-production workflow; it does not establish a required template, licence or final logo style.
- **Reason to watch:** See how a logo is assembled and adjusted, then pause to apply the course scale and simplicity checks.
- **Watch for:** Which visible editing decision improves control or recognition, and when should you stop to test the mark at small size?
- **Sampled segment:** Frames sampled at 1:10; audio checked at 0:05–0:11, 1:20–1:26 and 2:40–2:46.
- **Audio/intelligibility:** No spoken content detected in three sampled segments; the visual screen workflow is legible when paused and must remain paired with the written alternative.
- **Equivalent non-video path:** visual `logo-simplicity-test`, visual `logo-scale-test`, visual `logo-variant-system`. Follow the adjacent written logo workflow, complete the scale-test diagram and record one reason for each retained shape or type choice.
- **Placement request:** `modules/module-03.html`, adjacent to **Logo variants and critique**
- **Library card:** exact title, Drive source, duration, custom poster, Watch for, theory deep-link and Open in Drive.
- **Playback:** click-to-load; no autoplay; Close/Stop, Escape and focus return required.

### VD02 — Create a poster in Canva.mp4

- **Outcome:** MATCHED
- **Module / section:** Module 5 — Image selection and background removal
- **Drive ID:** `1xN8xO5IlId6A7KnY-YQQjXK3_qygi-f3`
- **Source digest:** SHA-256 `EE27D90F469472143E3EE1951FE408099FDDD871689C7EE25155F620830D9FFE`
- **Duration:** 7:54 (473.961000 seconds)
- **Frame size:** 3840 × 2160
- **Anonymous preview:** [Drive preview](https://drive.google.com/file/d/1xN8xO5IlId6A7KnY-YQQjXK3_qygi-f3/preview)
- **Direct fallback:** [Open in Drive](https://drive.google.com/file/d/1xN8xO5IlId6A7KnY-YQQjXK3_qygi-f3/view)
- **Poster:** `assets/video-posters/poster-canva-demo.svg`; SHA-256 `B596176065812F7BE7F7328EEC2E7E03CC6AC9C826E9E41B0CB9D52EB36F6F34`; Custom course poster; Drive account interface is not reproduced.
- **Teaching claim:** The supplied teacher screen recording demonstrates the course poster-production workflow in Canva.
- **Reason to watch:** Observe how the teacher builds the supplied poster design, then compare each step with the focal-point and clean-edge checks.
- **Watch for:** Which step establishes the focal point, and where should the image edge be inspected before export?
- **Sampled segment:** Frames sampled at 3:30; audio checked at 0:05–0:11, 3:50–3:56 and 7:20–7:26.
- **Audio/intelligibility:** No spoken content detected in three sampled segments; the visual screen workflow is legible when paused and must remain paired with the written alternative.
- **Equivalent non-video path:** visual `poster-source-original`, visual `poster-layout-focal-point`, visual `background-removal-edge-check`. Use the adjacent step list and diagrams to build the poster, then compare the exported result with the complete supplied poster exemplar.
- **Placement request:** `modules/module-05.html`, adjacent to **Image selection and background removal**
- **Library card:** exact title, Drive source, duration, custom poster, Watch for, theory deep-link and Open in Drive.
- **Playback:** click-to-load; no autoplay; Close/Stop, Escape and focus return required.

### VD03 — Creating a Staff Uniform in Canva Demo.mp4

- **Outcome:** MATCHED
- **Module / section:** Module 6 — Designing a staff uniform
- **Drive ID:** `1hIuwMunPHaPjdVAjPsKlIWJEm9vYMkxl`
- **Source digest:** SHA-256 `8D1CDA437C03E5AF48E8AE7C2060C9FC8832AADC1DAAE120F01CF927B8FBF7A6`
- **Duration:** 1:54 (113.700000 seconds)
- **Frame size:** 1920 × 1080
- **Anonymous preview:** [Drive preview](https://drive.google.com/file/d/1hIuwMunPHaPjdVAjPsKlIWJEm9vYMkxl/preview)
- **Direct fallback:** [Open in Drive](https://drive.google.com/file/d/1hIuwMunPHaPjdVAjPsKlIWJEm9vYMkxl/view)
- **Poster:** `assets/video-posters/staff-uniform-canva-demo.svg`; SHA-256 `DC504F2F60DABE501A4CE00682656ECB0CDD72686913C4DF9B81D5F439E055F6`; Custom course poster; Drive account interface is not reproduced.
- **Teaching claim:** The supplied teacher screen recording shows a brand identity being applied to a staff-uniform concept.
- **Reason to watch:** See how placement and colour are adjusted on a garment rather than simply pasting the same mark at one size.
- **Watch for:** Where is the identity placed, and what would you check for visibility, contrast and practical suitability?
- **Sampled segment:** Frames sampled at 0:55; audio checked at 0:05–0:11, 0:55–1:01 and 1:40–1:46.
- **Audio/intelligibility:** No spoken content detected in three sampled segments; the visual screen workflow is legible when paused and must remain paired with the written alternative.
- **Equivalent non-video path:** visual `uniform-system`, visual `brand-consistency-system`, visual `accessibility-contrast-check`. Compare the generated uniform system with the consistency and accessibility diagrams, then annotate one suitable placement and one accessibility check.
- **Placement request:** `modules/module-06.html`, adjacent to **Designing a staff uniform**
- **Library card:** exact title, Drive source, duration, custom poster, Watch for, theory deep-link and Open in Drive.
- **Playback:** click-to-load; no autoplay; Close/Stop, Escape and focus return required.

### VD04 — Match and Move.mp4

- **Outcome:** MATCHED
- **Module / section:** Module 7 — Match and Move
- **Drive ID:** `1yRWtqn_jBI_IyJRJ8yyJ3KL1Fp1L8vgt`
- **Source digest:** SHA-256 `5662A70FE44811A36E2BDAE712E5869C9A6F065CC82A8CB9E7D2EA92C2C01AA4`
- **Duration:** 6:21 (381.266667 seconds)
- **Frame size:** 1920 × 1080
- **Anonymous preview:** [Drive preview](https://drive.google.com/file/d/1yRWtqn_jBI_IyJRJ8yyJ3KL1Fp1L8vgt/preview)
- **Direct fallback:** [Open in Drive](https://drive.google.com/file/d/1yRWtqn_jBI_IyJRJ8yyJ3KL1Fp1L8vgt/view)
- **Poster:** `assets/video-posters/match-and-move-demo.svg`; SHA-256 `27B8532422231C1CC50C4A99D8C2D7D993E1943387B4162500D406B0248135A3`; Custom course poster; Drive account interface is not reproduced.
- **Teaching claim:** The verified tutorial shows a 1080 × 1920 portrait advertisement, duplicated states, Match and Move transition, timing and MP4 export.
- **Reason to watch:** Follow the source-confirmed sequence from complete first state to controlled movement and export.
- **Watch for:** Which elements stay consistent between states, and which deliberate change allows Match and Move to create the transition?
- **Sampled segment:** Spoken audio sampled at 3:30–3:38; representative frame sampled at 4:00; Stage 01 transcript inspected across the workflow.
- **Audio/intelligibility:** Sampled spoken English is clear and student-accessible; the verified transcript supports the same workflow.
- **Equivalent non-video path:** visual `motion-state-sequence`, visual `match-move-continuity`, visual `export-quality-check`. Use the adjacent transcript-informed step list and three diagrams to plan two states, identify the matched element and complete the MP4 quality check.
- **Placement request:** `modules/module-07.html`, adjacent to **Match and Move**
- **Library card:** exact title, Drive source, duration, custom poster, Watch for, theory deep-link and Open in Drive.
- **Playback:** click-to-load; no autoplay; Close/Stop, Escape and focus return required.

### VD05 — Match and Move Advertising.mp4

- **Outcome:** REWORK
- **Module / section:** Module 7 — Timing, export and quality checks
- **Drive ID:** `1dk-pn0y46VZLTET4dY9cVYRTcQumJgd_`
- **Source digest:** SHA-256 `3386649CD49C1D3213BCD1DDE51D33C46CAE1EB830D66187FD9FD310DC101507`
- **Duration:** 0:16 (16.266667 seconds)
- **Frame size:** 1920 × 1080
- **Anonymous preview:** [Drive preview](https://drive.google.com/file/d/1dk-pn0y46VZLTET4dY9cVYRTcQumJgd_/preview)
- **Direct fallback:** [Open in Drive](https://drive.google.com/file/d/1dk-pn0y46VZLTET4dY9cVYRTcQumJgd_/view)
- **Poster:** `assets/video-posters/match-and-move-exemplar.svg`; SHA-256 `BFFA4242AB22E85FE654C1E22DA8296B6E207782E92B15D5ECEC973F26CA41B6`; Custom course poster; Drive account interface is not reproduced.
- **Teaching claim:** The current exact Drive file opens Canva, creates an A4 document and does not show a finished motion advertisement; it can only be used as a source-verification and evidence-quality check.
- **Reason to watch:** Use the short clip to practise checking what a file actually proves instead of trusting its filename.
- **Watch for:** What does this clip actually show, and what motion-advertising evidence is still missing?
- **Sampled segment:** Whole 0:16 clip sampled at 1, 3, 5, 8, 11, 14 and 15.5 seconds; audio checked across three segments.
- **Audio/intelligibility:** No spoken content detected. The visual content is clear but does not match the claimed finished-exemplar role.
- **Equivalent non-video path:** visual `motion-state-sequence`, visual `export-quality-check`, video `match-and-move-demo`. Use the verified 6:21 tutorial plus the state-sequence and export-check diagrams for the intended motion-learning point. Teacher to replace this source clip if a finished exemplar is required.
- **Placement request:** `modules/module-07.html`, adjacent to **Timing, export and quality checks**
- **Library card:** exact title, Drive source, duration, custom poster, Watch for, theory deep-link and Open in Drive.
- **Playback:** click-to-load; no autoplay; Close/Stop, Escape and focus return required.
- **Recorded source issue:** Exact bytes and anonymous Drive preview verified, but full-clip sampling shows Canva Home → Create a design → blank A4 document, not a finished animated advertisement.

### VD06 — Google Sites Demonstration.mp4

- **Outcome:** MATCHED
- **Module / section:** Module 9 — Preparing and embedding media
- **Drive ID:** `1PV_O58qVIZ7AtoJrjfTLl9R_xML1JcqP`
- **Source digest:** SHA-256 `F1D1A7F44D03CA7E055D6A1FAC31D9291DE10B75C0ABEF525D35DFD5386840FC`
- **Duration:** 8:55 (535.000000 seconds)
- **Frame size:** 1920 × 1080
- **Anonymous preview:** [Drive preview](https://drive.google.com/file/d/1PV_O58qVIZ7AtoJrjfTLl9R_xML1JcqP/preview)
- **Direct fallback:** [Open in Drive](https://drive.google.com/file/d/1PV_O58qVIZ7AtoJrjfTLl9R_xML1JcqP/view)
- **Poster:** `assets/video-posters/google-sites-demo.svg`; SHA-256 `19AC08BD5EEBD7860C21CAD289A059AE4475DC21130B0A1A8BBF00E7BB7C2E7A`; Custom course poster; Drive account interface is not reproduced.
- **Teaching claim:** The verified demonstration shows a blank Google Site, Home, Products and Contact Us pages, media placement, preview, publication and link checking.
- **Reason to watch:** See the source-confirmed three-page build and where poster and video evidence are placed before the link is tested.
- **Watch for:** Where is each media item placed, and what must be checked before the final site link is submitted?
- **Sampled segment:** Spoken audio sampled at 4:20–4:28; representative frame sampled at 5:00; Stage 01 transcript inspected across the workflow.
- **Audio/intelligibility:** Sampled spoken English is clear and student-accessible; the verified transcript supports the same workflow.
- **Equivalent non-video path:** visual `site-structure-map`, visual `publish-access-check`. Follow the adjacent three-page site map and media-placement checklist, then use the teacher-approved access setting and test the submitted link in the intended viewing context.
- **Placement request:** `modules/module-09.html`, adjacent to **Preparing and embedding media**
- **Library card:** exact title, Drive source, duration, custom poster, Watch for, theory deep-link and Open in Drive.
- **Playback:** click-to-load; no autoplay; Close/Stop, Escape and focus return required.

## Focused verification evidence

- Browser media metadata confirmed all six local source files were playable and returned the recorded duration and dimensions.
- Audio decoding and representative frames were sampled for every file.
- The logo, poster and uniform demonstrations and the 16-second source clip had no spoken content in three sampled windows each; their visual alternatives are therefore essential.
- The Match and Move tutorial and Google Sites demonstration had clear student-accessible spoken English in the sampled segments; Stage 01 transcripts independently support their mapped workflows.
- The six custom posters were rendered at 1280 × 720, visually inspected and contain no signed-in dashboard frame or account detail.
- Anonymous Drive preview and direct-view fallbacks were checked on 24 August 2026. Live/public rechecking remains part of any later authorised release.

## Historical Stage 13 integration request — completed

- Integrate only the exact records from `data/media-data.js`.
- Keep the `match-and-move-advertising` record visibly labelled **REWORK / supplied source clip**.
- Build the owned video library from the six records without duplicate IDs.
- Test button keyboard operation, iframe creation only after activation, close/Escape/focus return, fallback links, compact poster geometry and exact-390 containment.
