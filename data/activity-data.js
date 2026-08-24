/* Applied Learning Activities: formative practice only. */
(() => {
  "use strict";
  const PREFIX = "year7multimedia:";
  const make = (id, module, title, theoryAnchors, sourceRefs, placement, practises, mechanic, instructions, support, data, completionFeedback, printable) => ({
    id, module, title, theoryAnchors, sourceRefs, placement, practises, mechanic,
    instructions, support, data, completionFeedback, printable,
    storageKey: `${PREFIX}activity:${id}`,
    recordLabel: "Formative practice only",
    bankRoute: `activities.html#${id}`,
    returnLinks: {
      lesson: `modules/module-${String(module).padStart(2, "0")}.html#${theoryAnchors[0]}`,
      bank: `activities.html#${id}`
    },
    accessibility: {
      keyboard: "Every selectable card or choice must be reachable by Tab and operable with Enter or Space; sequence controls require Move up and Move down buttons.",
      touch: "Use controls at least 44 CSS pixels high with visible selected and focus states.",
      alternative: "Provide the same cards as labelled select menus or numbered text fields; drag-and-drop must never be the only method."
    },
    reset: "Reset this activity only after confirmation; do not clear other course records."
  });

  window.YEAR7_MULTIMEDIA_ACTIVITIES = {
    version: "1.0.0",
    sourceMapVersion: "1.0",
    storagePrefix: PREFIX,
    label: "Applied Learning Activities — formative practice only",
    bank: {
      route: "activities.html",
      title: "Applied Learning Activity Bank",
      purpose: "Concept-linked practice for lessons, revision, fast finishers and source-grounded relief teaching.",
      filters: ["Module", "Concept", "Mechanic", "Printable"],
      note: "Completing an activity is not formal assessment, folio submission, teacher-observed evidence or a VET competency decision."
    },
    activities: [
      make("act-m01-brief-audience-cards", 1, "Brief or audience clue?", ["m01-s01-example", "m01-s02-example"], ["drive:business-planning-brainstorm"], "Use after Modules 1.1–1.2 theory and before either capstone.", "Separating brief facts, audience evidence, design choices and unconfirmed local rules.", "four-way card sort",
        "Sort each card into Confirmed brief, Audience evidence, Design choice or Not confirmed by the source. Then explain one card that was tempting to place elsewhere.",
        "Ask what the source actually confirms and whether the statement describes a user, a possible response or a local rule.",
        { groups: ["Confirmed brief", "Audience evidence", "Design choice", "Not confirmed by the source"], cards: [
          { id: "business", text: "Develop an original fast-food business and connected digital brand", answer: "Confirmed brief", feedback: "This is the verified project contract." },
          { id: "small-screen", text: "Users may compare products quickly on a small screen", answer: "Audience evidence", feedback: "This describes a use context to test." },
          { id: "aligned-prices", text: "Align comparable information to support scanning", answer: "Design choice", feedback: "This is a response to an audience need, not a fixed brief fact." },
          { id: "colour-count", text: "Every student must use exactly four brand colours", answer: "Not confirmed by the source", feedback: "The source asks students to choose brand colours but does not set this quantity." },
          { id: "burger-symbol", text: "Every logo must contain a burger symbol", answer: "Not confirmed by the source", feedback: "The business theme does not prescribe one logo symbol." },
          { id: "brand-colours", text: "Select brand colours in the planning scaffold", answer: "Confirmed brief", feedback: "Colour selection is part of the supplied brainstorm." }
        ] },
        { complete: "Strong sort. Your explanation should show why source authority matters.", retry: "Revisit the exact theory anchor for any card whose category is uncertain." },
        { format: "Cut-and-sort sheet", instructions: "Cut the cards or write each card number under a category, then justify one difficult placement." }
      ),
      make("act-m01-originality-trail", 1, "Build an originality trail", ["m01-s03-originality", "m01-s03-ai", "m01-s03-example"], ["drive:business-planning-brainstorm", "drive:being-a-graphic-designer"], "Use after Module 1.3 theory and before its capstone.", "Distinguishing inspiration, tool assistance, checking, student transformation and attribution.", "decision-trail sequencing",
        "Place the stages in a responsible order, then add one original decision at the student-transformation stage.",
        "A tool can suggest a starting point, but checking and student-made change must occur before final use.",
        { stages: [
          { id: "purpose", text: "Define the brief and audience purpose", order: 1, feedback: "Purpose must guide later research and tool use." },
          { id: "sources", text: "Collect and record relevant references", order: 2, feedback: "References should be traceable and selected for a reason." },
          { id: "suggest", text: "Use an approved tool for limited idea suggestions if permitted", order: 3, feedback: "Tool use remains bounded by teacher access and privacy." },
          { id: "check", text: "Check suggestions for accuracy, stereotypes, privacy and copying risk", order: 4, feedback: "Fluent output is not proof of suitability." },
          { id: "transform", text: "Sketch, combine, reject and transform through student decisions", order: 5, feedback: "This makes the student contribution visible." },
          { id: "record", text: "Record assistance, sources, tests and revisions", order: 6, feedback: "The trail supports honest authorship." }
        ], studentField: { prompt: "Describe one transformation you would make.", minCharacters: 40 } },
        { complete: "Your sequence keeps responsibility with the designer.", retry: "Check whether the brief comes before tool suggestions and whether checking comes before final use." },
        { format: "Numbered process strip", instructions: "Number the six stages and write one student-made transformation." }
      ),
      make("act-m02-palette-purpose", 2, "Palette roles under pressure", ["m02-s01-purpose", "m02-s01-contrast", "m02-s01-example"], ["drive:poster-exemplars"], "Use after Module 2.1 contrast theory and before its capstone.", "Assigning colour roles, preserving contrast and adding non-colour cues.", "scenario decisions",
        "For each scenario, select the strongest response and explain which palette role or access need it protects.",
        "Do not search for a universally correct colour meaning. Focus on role, contrast, context and a second cue.",
        { scenarios: [
          { id: "orange-text", prompt: "Orange small text disappears on cream.", choices: ["Keep it because it is bright", "Use darker text and keep orange as an accent", "Make all text orange"], answer: 1, feedback: "Essential text needs reliable contrast; the accent role can remain elsewhere." },
          { id: "category", prompt: "Two menu categories differ only by colour.", choices: ["Add written labels or icons", "Use more similar colours", "Remove the headings"], answer: 0, feedback: "A non-colour cue keeps meaning available." },
          { id: "meaning", prompt: "A student says green always means healthy.", choices: ["Treat it as universal", "Test the intended interpretation in context", "Ban green"], answer: 1, feedback: "Colour meaning varies with audience and context." },
          { id: "busy-photo", prompt: "The logo loses contrast over a photo.", choices: ["Use a tested holding shape or variant", "Add random effects", "Hide the logo"], answer: 0, feedback: "A controlled variant protects recognition." }
        ] },
        { complete: "Good decisions. Your reasons should name the role or access need, not personal preference alone.", retry: "Return to colour roles and the colour-only warning." },
        { format: "Scenario table", instructions: "Circle one response per row and write the palette role or access need it protects." }
      ),
      make("act-m02-type-hierarchy", 2, "Type and hierarchy lab", ["m02-s02-system", "m02-s02-legibility", "m02-s03-hierarchy", "m02-s03-layout"], ["drive:poster-exemplars", "drive:canteen-menu"], "Use after Modules 2.2–2.3 theory and before their capstones.", "Ranking information, assigning type roles and identifying layout relationships.", "rank, match and annotate",
        "Rank the information, match each level to a type role, then annotate two alignment or proximity relationships.",
        "Start with communication importance. Font choice comes after the information order.",
        { information: ["Brand name", "Main offer or message", "Call to action", "Supporting detail"], roles: ["Largest distinctive display role", "Strong readable heading role", "Visible action role", "Smallest still-readable support role"], requiredAnnotations: ["One proximity relationship", "One alignment relationship", "One purposeful space decision"], feedback: "A controlled set of roles should make the order visible without four unrelated typefaces." },
        { complete: "Your hierarchy begins with purpose and uses layout to show relationships.", retry: "If everything is equally strong, rank the information again before styling." },
        { format: "Hierarchy ladder", instructions: "Write the four elements from first to last attention, connect each to a type role and annotate three layout relationships." }
      ),
      make("act-m03-logo-stress-test", 3, "Logo stress-test station", ["m03-s01-role", "m03-s02-scale", "m03-s02-contrast"], ["drive:logo-canva-demonstration", "drive:poster-exemplars"], "Use after Modules 3.1–3.2 theory and before their capstones.", "Checking recognition across large, small, one-colour and busy-background contexts.", "test matrix",
        "Inspect one logo concept in four contexts. Record pass, revise or not yet tested and describe the smallest controlled change needed.",
        "Preserve the same identifying core. A variant solves a context problem; it should not become a new identity.",
        { contexts: [
          { id: "poster", label: "Large poster", check: "Can the name and core symbol be recognised from the intended distance?" },
          { id: "phone", label: "Small phone header", check: "Do thin lines, gaps or supporting words disappear?" },
          { id: "one-colour", label: "One-colour version", check: "Does the silhouette identify the mark without palette cues?" },
          { id: "busy", label: "Busy image background", check: "Does a controlled contrast variant or clear area protect the mark?" }
        ], statuses: ["Pass", "Revise", "Not yet tested"], responseFields: ["Observation", "Controlled revision", "Core feature preserved"] },
        { complete: "The matrix is useful when every revision answers an observed context problem.", retry: "Avoid redesigning the whole mark for one failed context." },
        { format: "Four-row test matrix", instructions: "Mark the status, record an observation and describe a controlled revision for each context." }
      ),
      make("act-m03-critique-sort", 3, "Critique that helps", ["m03-s03-critique", "m03-s03-example"], ["drive:being-a-graphic-designer"], "Use after Module 3.3 critique theory and before its capstone.", "Distinguishing useful criterion-based critique from preference, vague instruction and personal comment.", "feedback sort and rewrite",
        "Sort comments into Useful now, Needs a clearer reason or Not respectful/relevant. Rewrite two weak comments using observation, criterion and next test.",
        "Describe the work, name the viewing context and suggest a test. Do not judge the person.",
        { groups: ["Useful now", "Needs a clearer reason", "Not respectful/relevant"], cards: [
          { id: "phone", text: "The compact name is hard to read at phone size; test wider spacing.", answer: "Useful now", feedback: "It contains evidence, context and action." },
          { id: "cool", text: "Make it cooler.", answer: "Needs a clearer reason", feedback: "The desired quality and evidence are missing." },
          { id: "hate", text: "Your design is terrible.", answer: "Not respectful/relevant", feedback: "It attacks the person and gives no useful evidence." },
          { id: "contrast", text: "The mark disappears on the dark mock-up; test the one-colour variant.", answer: "Useful now", feedback: "It links an observation to a controlled test." },
          { id: "blue", text: "Use blue.", answer: "Needs a clearer reason", feedback: "The comment needs an audience, contrast or system reason." }
        ], rewriteFields: 2 },
        { complete: "Useful critique makes the next test clearer while respecting the designer.", retry: "Look for observation, criterion, context and action." },
        { format: "Comment-sort worksheet", instructions: "Write card letters under each group, then rewrite two weak comments." }
      ),
      make("act-m04-menu-scan-map", 4, "Menu scan-path investigation", ["m04-s01-source", "m04-s02-scan", "m04-s02-example"], ["drive:canteen-menu"], "Use with the complete source menu after Modules 4.1–4.2 theory and before their capstones.", "Observing grouping, headings, alignment and user finding behaviour without treating historical prices as current.", "image annotation and finding test",
        "Open the complete source menu. Trace three finding tasks, annotate the landmarks used and record one literal observation before making a judgement.",
        "Describe only what is visible. The source menu is layout evidence, not current price or availability authority.",
        { tasks: ["Find one named category.", "Find an item and match it to its displayed price position without republishing the price.", "Move from one category to a different category."], annotations: ["First landmark noticed", "Alignment used", "Point of confusion", "Possible revision"], observationPrompt: "I can observe…", judgementPrompt: "Against the criterion of… this is effective/ineffective because…" },
        { complete: "Your map separates literal observation from criterion-based judgement.", retry: "Remove any claim that the historical prices or products are current." },
        { format: "Printed-menu annotation sheet", instructions: "Use arrows and numbered notes on a teacher-provided print, then complete observation and judgement boxes." }
      ),
      make("act-m04-honest-information", 4, "Claim, evidence or hold", ["m04-s03-honesty", "m04-s03-image-claim", "m04-s03-example"], ["drive:canteen-menu", "drive:marketing-simulation"], "Use after Module 4.3 theory and before its capstone.", "Classifying statements as supported description, evidence-needed claim or current detail to withhold.", "three-way claim sort",
        "Sort each menu element, then rewrite one evidence-needed claim as an honest description or investigation question.",
        "Ask whether the words or image imply a current fact, comparison or benefit.",
        { groups: ["Supported description", "Evidence needed", "Withhold until current authority"], cards: [
          { id: "crisp", text: "Crispy potato bites", answer: "Supported description", feedback: "This can be tested against the intended product concept." },
          { id: "greenest", text: "The planet’s greenest fries", answer: "Evidence needed", feedback: "The broad comparison needs strong environmental evidence." },
          { id: "old-price", text: "A price copied from the historical source menu", answer: "Withhold until current authority", feedback: "The source is not current price authority." },
          { id: "mockup", text: "A context image labelled ‘poster mock-up’", answer: "Supported description", feedback: "The label honestly identifies a simulated context." },
          { id: "health", text: "Guaranteed healthy choice", answer: "Evidence needed", feedback: "The health claim is broad and unsupported here." }
        ], rewritePrompt: "Rewrite one evidence-needed card without overclaiming." },
        { complete: "Strong work. Honest information can still be vivid and persuasive.", retry: "Recheck any current price, health, environmental or scale implication." },
        { format: "Claim-sort table", instructions: "Place each card in a column and rewrite one unsupported claim." }
      ),
      make("act-m05-focal-path", 5, "Five-second focal-path test", ["m05-s01-composition", "m05-s01-balance", "m05-s01-example"], ["drive:poster-exemplars"], "Use after viewing the complete Drive poster and before the Module 5.1 capstone.", "Testing first, next and final attention without copying the exemplar’s content.", "timed observation and annotation",
        "View a poster for five seconds, hide it, record the first three elements remembered, then compare the result with the intended path.",
        "Do not coach the reviewer. Record what they actually recall, not what you hoped they saw.",
        { fields: ["Intended first element", "Reviewer’s first recall", "Reviewer’s second recall", "Reviewer’s third recall", "Mismatch observed", "One controlled revision"], repeat: 2, note: "Use a peer-safe design or supplied exemplar; collect no names." },
        { complete: "The test is complete when the revision responds to an observed attention mismatch.", retry: "If the reviewer was coached, repeat the test without explaining the intended path first." },
        { format: "Five-second observation card", instructions: "Fold or cover the poster after five seconds, record three recalled elements and compare with the intended path." }
      ),
      make("act-m05-cutout-context", 5, "Cut-out or context?", ["m05-s02-selection", "m05-s02-removal", "m05-s03-mockup"], ["drive:poster-exemplars", "drive:poster-canva-demonstration"], "Use after Modules 5.2–5.3 theory and before either capstone.", "Choosing between a clean cut-out, retained context and a labelled mock-up.", "scenario decision matrix",
        "For each image situation, choose Keep context, Create a cut-out working copy or Use a labelled mock-up. Give a purpose-led reason.",
        "Preserve the original. Consider truthfulness, edge quality, scale evidence and communication purpose.",
        { groups: ["Keep context", "Create a cut-out working copy", "Use a labelled mock-up"], scenarios: [
          { id: "scale", text: "The real setting helps viewers understand product scale.", answer: "Keep context", feedback: "The context carries useful evidence." },
          { id: "clutter", text: "A busy background prevents the product being a clear focal point, and the edge can be cleaned honestly.", answer: "Create a cut-out working copy", feedback: "Isolation has a clear hierarchy purpose." },
          { id: "street", text: "You need to test the poster from a simulated street-view distance.", answer: "Use a labelled mock-up", feedback: "The simulation tests context without claiming installation." },
          { id: "dashboard", text: "A signed-in dashboard appears behind the subject.", answer: "Create a cut-out working copy", feedback: "Remove private interface context while preserving a safe original offline." }
        ], reasonField: true },
        { complete: "Your decisions use context for evidence and cut-outs only when isolation has a job.", retry: "Check whether the choice could misrepresent scale, installation or privacy." },
        { format: "Decision matrix", instructions: "Tick one treatment per scenario and justify it in one sentence." }
      ),
      make("act-m06-brand-application-check", 6, "Same brand, different context", ["m06-s01-system", "m06-s02-placement", "m06-s03-access"], ["drive:staff-uniform-canva-demonstration", "drive:poster-exemplars"], "Use after the source uniform demonstration and before Module 6 capstones.", "Preserving identity while adapting logo, colour and type for a uniform concept.", "application comparison matrix",
        "Compare poster, uniform concept and site header. Mark each feature Stable, Controlled variant or Accidental mismatch, then justify one variant.",
        "A controlled variant solves a context problem and preserves a recognisable core.",
        { applications: ["Poster", "Staff-uniform concept", "Site header"], features: ["Core logo relationship", "Palette roles", "Type roles", "Image or icon treatment", "Readable contrast"], statuses: ["Stable", "Controlled variant", "Accidental mismatch"], requiredResponses: ["Reason for one controlled variant", "Revision for one mismatch", "One accessibility check"] },
        { complete: "The matrix should show one recognisable identity rather than identical layouts.", retry: "Reclassify any difference that has no context-based reason as a mismatch." },
        { format: "Application matrix", instructions: "Complete the 3×5 matrix, then justify one variant and one correction." }
      ),
      make("act-m07-state-sequence", 7, "Match the motion states", ["m07-s01-states", "m07-s01-continuity", "m07-s02-correspondence"], ["drive:match-and-move-demonstration", "drive:match-and-move-source-clip"], "Use after the 6:21 tutorial and the 0:16 source-quality check, before Modules 7.1–7.2 capstones.", "Sequencing states and identifying stable, moving and entering elements.", "storyboard sequence and element match",
        "Order the three states, then classify each element as Stable, Moves or Enters. Explain one motion that should be removed if it competes.",
        "Follow the attention goal: establish, create space, then complete the message.",
        { states: [
          { id: "establish", text: "Establish product and background", order: 1 },
          { id: "space", text: "Move or scale the product to create message space", order: 2 },
          { id: "complete", text: "Introduce price/action and hold the final identity", order: 3 }
        ], elements: ["Product image", "Logo", "Slogan", "Price or action"], classes: ["Stable", "Moves", "Enters"], explanationPrompt: "One movement helps/competes because…" },
        { complete: "Your sequence should preserve element correspondence and a readable attention path.", retry: "Check whether the same element remains across duplicated states." },
        { format: "Storyboard strip", instructions: "Number the states, draw arrows for element changes and annotate one motion decision." }
      ),
      make("act-m07-export-inspection", 7, "Pause, inspect, export", ["m07-s03-timing", "m07-s03-preflight", "m07-s03-example"], ["drive:match-and-move-demonstration", "drive:match-and-move-source-clip"], "Use immediately before and after an MP4 export.", "Checking timing, hierarchy, crop, spelling, ending and file integrity.", "preflight checklist and before-after log",
        "Complete every preflight item, open the exported MP4 and record one difference between the plan and the file.",
        "Export completion is not enough. Watch the complete sequence without pausing.",
        { checks: ["Essential text remains visible long enough", "Motion supports the focal path", "No accidental crop or edge loss", "Spelling and logo variant are consistent", "Final state has a clear ending", "Meaningful filename used", "MP4 opens", "Editable working file backed up"], responses: ["Issue found", "Revision made", "Retest result"], reminder: "The supplied 0:16 clip is a source-quality check, not a finished exemplar or a required duration." },
        { complete: "The record is complete when the exported file opens and communication checks have been repeated.", retry: "Open the MP4 itself; do not rely only on the editor preview." },
        { format: "Preflight tick sheet", instructions: "Tick each check and write one issue–revision–retest record." }
      ),
      make("act-m08-claim-check", 8, "Persuasion or unsupported pressure?", ["m08-s01-persuasion", "m08-s01-targeting", "m08-s02-test"], ["drive:marketing-simulation"], "Use after Modules 8.1–8.2 theory and before their capstones.", "Classifying marketing language and testing environmental claims.", "traffic-light claim audit",
        "Classify each message Green: supported/informative, Amber: needs evidence or context, or Red: misleading/unfair pressure. Explain one classification and revise one amber or red message.",
        "Ask what impression the words and imagery create, what evidence exists and whether the audience can still make a meaningful choice.",
        { groups: ["Green", "Amber", "Red"], cards: [
          { id: "explore", text: "Explore the product range and decide what suits you.", answer: "Green", feedback: "It provides an honest, choice-preserving action." },
          { id: "everyone", text: "Everyone has bought it — do not be left out.", answer: "Red", feedback: "It uses unsupported social pressure." },
          { id: "eco", text: "Eco-friendly.", answer: "Amber", feedback: "The scope, measure and evidence are missing." },
          { id: "greenest", text: "The planet’s greenest option.", answer: "Red", feedback: "The sweeping comparison is unsupported." },
          { id: "question", text: "What packaging change could reduce material use?", answer: "Green", feedback: "It is framed as an investigation question, not a completed achievement." }
        ], revisionField: true },
        { complete: "Your audit should protect truthful evidence and meaningful audience choice.", retry: "Check broad comparisons, social pressure and vague environmental words." },
        { format: "Traffic-light card sheet", instructions: "Colour or label each card, justify one decision and rewrite one amber/red message." }
      ),
      make("act-m08-ripple-chain", 8, "Ripple-effect chain", ["m08-s03-system", "m08-s03-responsibility", "m08-s03-example"], ["drive:marketing-simulation"], "Use after Module 8.3 theory and before its capstone.", "Tracing plausible system consequences while separating facts from assumptions.", "cause-and-consequence chain",
        "Build a four-step chain from one marketing decision. Label each arrow Confirmed link, Plausible assumption or Evidence needed, then add affected stakeholders.",
        "Use ‘may’ for a plausible consequence. Do not present the simulation pathway as a guaranteed real-world result.",
        { startChoices: ["Increase urgency in the campaign", "Make a broad green claim", "Target a narrower audience", "Change the promoted product"], stepsRequired: 4, arrowLabels: ["Confirmed link", "Plausible assumption", "Evidence needed"], stakeholderSlots: 3, finalPrompt: "What responsible action can the designer take?" },
        { complete: "A strong chain makes assumptions visible and ends with a realistic designer action.", retry: "If every arrow is marked confirmed, identify what evidence actually supports each link." },
        { format: "Four-box system map", instructions: "Draw four linked boxes, label each arrow, add three stakeholder notes and one designer action." }
      ),
      make("act-m09-site-preflight", 9, "Three-page site preflight", ["m09-s01-structure", "m09-s01-navigation", "m09-s02-embedding", "m09-s03-states"], ["drive:google-sites-demonstration", "drive:website-link-prompt"], "Use while building and again before recording the final website link.", "Testing structure, navigation, media access, privacy and honest publication states.", "card sort plus preflight checklist",
        "Sort content into Home, Products and Contact Us, then complete the access and link checks from an approved independent view.",
        "Do not broaden sharing settings without teacher direction. Local save is not submission.",
        { pageGroups: ["Home", "Products", "Contact Us"], cards: [
          { id: "intro", text: "Brand introduction and identity", answer: "Home" },
          { id: "poster", text: "Poster and labelled mock-ups", answer: "Products" },
          { id: "motion", text: "Motion advertisement", answer: "Products" },
          { id: "contact", text: "Teacher-approved contact pathway", answer: "Contact Us" }
        ], checks: ["Labels predict destinations", "Every main link works from more than one page", "Phone-width navigation remains usable", "Images have useful alt text", "Drive media works for an approved independent viewer", "No edit link or private account details exposed", "Preview, publish, access and submission states recorded separately"] },
        { complete: "The site is preflighted only when structure, independent access and honest state wording have been checked.", retry: "Owner-only viewing does not prove authorised audience access." },
        { format: "Page-map and preflight sheet", instructions: "Place the cards under pages, tick each check and record any unresolved access item." }
      ),
      make("act-m10-feedback-rationale", 10, "From feedback to rationale", ["m10-s01-feedback", "m10-s01-example", "m10-s02-evidence"], ["drive:unit-evaluation-prompts", "drive:being-a-graphic-designer"], "Use after Modules 10.1–10.2 theory and before their capstones.", "Turning feedback into a criterion–evidence–judgement–decision chain.", "feedback triage and rationale builder",
        "Sort feedback by relevance, then build one complete reasoning chain from the strongest item.",
        "Preference is one input. Access, truthfulness and brief requirements may have higher priority.",
        { feedbackCards: [
          { id: "nav", text: "I could not find Products at phone width.", relevance: "High", feedback: "This is observable task evidence." },
          { id: "blue", text: "I prefer blue.", relevance: "Needs context", feedback: "Preference needs an audience or system reason." },
          { id: "slogan", text: "The slogan disappears before I can read it.", relevance: "High", feedback: "This identifies a timing-access issue." },
          { id: "person", text: "You are bad at design.", relevance: "Reject", feedback: "This is personal and gives no useful evidence." }
        ], chainFields: ["Criterion", "Observed evidence", "Judgement", "Decision", "Expected effect", "Retest"] },
        { complete: "Your chain should show why the chosen feedback changes, or does not change, the design.", retry: "Replace vague preference with observable evidence and a criterion." },
        { format: "Feedback triage table", instructions: "Rate each card, then complete one six-part reasoning chain." }
      ),
      make("act-m10-next-iteration", 10, "Next-iteration priority board", ["m10-s03-evaluation", "m10-s03-improvement", "m10-s03-example"], ["drive:unit-evaluation-prompts", "drive:website-link-prompt"], "Use after Module 10.3 theory and before the final capstone.", "Prioritising specific improvements by impact, evidence and effort.", "priority matrix and action plan",
        "Place improvement cards on an impact–effort matrix. Select the first three actions and define a retest for each.",
        "Prioritise communication, access and truthfulness failures before decorative extras.",
        { axes: { horizontal: "Lower effort → Higher effort", vertical: "Lower impact → Higher impact" }, exampleCards: ["Repair an unclear Products link", "Extend unreadable slogan timing", "Correct an unsupported green claim", "Add a decorative background effect", "Create a backup before revision"], actionFields: ["Evidence for priority", "Exact change", "Expected effect", "Retest", "Backup record"] },
        { complete: "A useful priority board converts evidence into a safe, testable order of work.", retry: "If decoration ranks above a broken access or truthfulness issue, revisit impact." },
        { format: "Impact–effort grid", instructions: "Place the cards, circle the first three and complete an action row for each." }
      ),
      make("act-course-vocabulary-clue-grid", 2, "Multimedia vocabulary clue grid", ["m02-s01-purpose", "m02-s03-hierarchy", "m03-s01-role", "m07-s01-states", "m09-s02-embedding", "m10-s03-improvement"], ["drive:being-a-graphic-designer", "source-map:confirmed-project-contract"], "Top-level bank retrieval option for revision, a fast finisher or a relief lesson; it does not replace a concept capstone.", "Retrieving exact course vocabulary and explaining one connection between terms.", "clue match with accessible linear alternative",
        "Match each clue to one course term, then choose two matched terms and explain how they work together in a brand output.",
        "Return to the named theory anchor if a clue is unfamiliar. Match meaning, not just the first letter.",
        { terms: ["palette", "hierarchy", "wordmark", "mock-up", "transition", "embed", "iteration", "contrast"], clues: [
          { id: "c1", text: "A planned set of colours with assigned roles", answer: "palette", feedback: "A palette is a colour system, not a random collection." },
          { id: "c2", text: "The order in which elements attract attention", answer: "hierarchy", feedback: "Hierarchy guides the viewer through information." },
          { id: "c3", text: "A logo built mainly from the styled brand name", answer: "wordmark", feedback: "A wordmark uses the name as the identifying form." },
          { id: "c4", text: "A simulated context used to test or present a design", answer: "mock-up", feedback: "A mock-up is a context test, not installation proof." },
          { id: "c5", text: "The visible change between animation states", answer: "transition", feedback: "A transition connects planned states." },
          { id: "c6", text: "Media shown inside a page while hosted elsewhere", answer: "embed", feedback: "An embed still depends on access settings." },
          { id: "c7", text: "A revised version produced after evidence or feedback", answer: "iteration", feedback: "Iteration turns evaluation into another design cycle." },
          { id: "c8", text: "Visible difference that helps elements stand apart", answer: "contrast", feedback: "Contrast supports perception and hierarchy." }
        ], connectionPrompt: "The terms… and… work together because…" },
        { complete: "Retrieval is strongest when the final explanation connects two terms in a real design context.", retry: "Use the exact theory links rather than guessing from a similar everyday word." },
        { format: "Clue-and-term matching sheet", instructions: "Write the correct term beside each clue, then complete the connection sentence." }
      )
    ],
    integrationRequest: {
      owner: "Stage 13 shared integration",
      bankRoute: "activities.html",
      lessonPlacement: "Render each referenced activity after its named theory block and before the linked capstone.",
      recordLabel: "Formative practice only",
      saveState: "Show Not started, In progress or Saved on this device without implying cloud sync.",
      resetRule: "Reset one activity only after confirmation.",
      printRule: "Every activity exposes its printable instructions and response structure.",
      returnRule: "Provide both Return to lesson and Return to Activity Bank links.",
      mobileRule: "Validate at exactly 390 CSS pixels with no horizontal overflow."
    }
  };
})();
