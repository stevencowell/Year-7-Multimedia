/* Year 7 Multimedia evidence extension v1.1.
   Adds purposeful retrieval, visual reasoning and extended written evidence
   without renaming any existing student storage record. */
(() => {
  "use strict";

  const content = window.YEAR7_MULTIMEDIA_CONTENT;
  if (!content?.modules) return;

  const PREFIX = content.storagePrefix || "year7multimedia:";
  const opt = (id, text, feedback, correct = false) => ({ id, text, feedback, correct });
  const quiz = (id, kind, prompt, helpAnchor, hint, options) => ({
    id, kind, prompt, helpAnchor, hint, options,
    storageKey: `${PREFIX}check:${id}`
  });

  const additions = {
"m01-s01": {
    checks: [
      quiz("m01-s01-q04", "visual interpretation", "In the planning-workspace image, why are the audience card and four-part brief sheet placed beside the early thumbnails?", "m01-s01-brief-role", "Consider what should guide a designer while ideas are still changing.", [
        opt("a", "They show that matching layouts are the main requirement", "The brief guides decisions, but it does not require identical layouts."),
        opt("b", "They keep ideas connected to purpose and intended users", "Correct. The visible planning evidence helps the designer judge ideas against the brief before polishing them.", true),
        opt("c", "They confirm the final software and publication settings", "The planning image does not establish teacher-controlled software or publication requirements.")
      ]),
      quiz("m01-s01-q05", "application and evaluation", "A polished poster looks impressive but promotes a different audience and purpose from the brief. What is the strongest next step?", "m01-s01-example", "Judge the work against the challenge before deciding how much to keep.", [
        opt("a", "Publish it because visual polish is the main success measure", "Polish cannot replace a clear connection to the stated audience and purpose."),
        opt("b", "Add more effects while keeping the changed direction", "More effects would not correct the mismatch with the brief."),
        opt("c", "Identify the mismatch, revise key choices and retest", "Correct. The brief provides a reasoned basis for targeted revision and another test.", true)
      ])
    ],
    extendedResponse: {
      id: "m01-s01-extended-01",
      label: "Formative learning evidence",
      wordGuide: "80–100 words",
      prompt: "A classmate has designed an attractive logo before writing a clear brief. Explain how you would help them test whether the idea fits the real design challenge. Refer to purpose, audience, confirmed requirements and one detail that must remain unconfirmed.",
      helpAnchor: "m01-s01-requirements",
      scaffold: ["Describe the risk of starting with a finished-looking idea.", "Connect the logo to the intended audience and purpose.", "Name a confirmed requirement that can guide the check.", "Separate one student choice from one teacher-controlled detail.", "Recommend a specific revision or test."],
      starters: ["The attractive appearance does not yet prove…", "The brief should confirm…", "I would test the logo by…", "A detail we must not assume is…"],
      qualityIndicators: ["Uses the brief as a decision tool.", "Separates confirmed facts, choices and unknowns.", "Proposes a practical next test rather than a vague judgement."]
    }
  },

  "m01-s02": {
    checks: [
      quiz("m01-s02-q04", "visual interpretation", "What does the audience-research image suggest about making a useful audience profile?", "m01-s02-profile", "Look at the range of profile symbols, samples and comparison activity.", [
        opt("a", "Compare needs and contexts before choosing a direction", "Correct. The visible sorting process treats audience understanding as evidence to compare, not a single guess.", true),
        opt("b", "Use one colour as evidence of the audience’s preferences", "One colour choice cannot provide reliable evidence about a whole audience."),
        opt("c", "Reduce the audience to one broad age-based category", "A broad age label leaves out needs, context, access and likely actions.")
      ]),
      quiz("m01-s02-q05", "application and evaluation", "Students will compare food options on phones during a short break. Which design response has the strongest audience-based reasoning?", "m01-s02-example", "Connect the situation to a communication need and a testable choice.", [
        opt("a", "Use several decorative fonts because phone users enjoy variety", "This assumes a preference and may weaken quick scanning."),
        opt("b", "Use clear headings and aligned details, then time a finding task", "Correct. The design responds to fast comparison and includes a suitable way to test it.", true),
        opt("c", "Fill spare space with longer descriptions to appear complete", "More text may slow the exact comparison task the audience needs to perform.")
      ])
    ],
    extendedResponse: {
      id: "m01-s02-extended-01",
      label: "Formative learning evidence",
      wordGuide: "80–100 words",
      prompt: "Two audience profiles are proposed: ‘teenagers who like fast food’ and ‘students comparing affordable options on a small screen during a short break’. Evaluate which profile gives better design guidance and justify two communication choices, including one accessibility choice and a way to test it.",
      helpAnchor: "m01-s02-example",
      scaffold: ["Compare the amount of useful evidence in both profiles.", "Identify the need created by the stronger context.", "Justify one hierarchy or layout choice.", "Justify one accessibility choice.", "Describe a brief user test without stereotyping."],
      starters: ["The second profile is more useful because…", "This context creates a need for…", "An accessible response would be…", "I would test whether…"],
      qualityIndicators: ["Explains why specific context is more useful than a broad label.", "Links evidence to two purposeful choices.", "Includes an observable and respectful test."]
    }
  },

  "m01-s03": {
    checks: [
      quiz("m01-s03-q04", "visual interpretation", "Which feature of the responsible-AI workspace best shows that the final idea remains the student’s decision?", "m01-s03-example", "Follow the visible trail from a starting suggestion to developed alternatives.", [
        opt("a", "The starting cards are arranged neatly beside the tools", "Neat arrangement does not show authorship or responsible checking."),
        opt("b", "The workspace contains several matching stationery items", "Matching tools do not explain who selected, changed or verified the idea."),
        opt("c", "The trail includes checks, developed options and decisions", "Correct. These stages make the student’s transformation and responsibility visible.", true)
      ]),
      quiz("m01-s03-q05", "application and evaluation", "An AI tool suggests a slogan and an environmental fact for a proposed brand. What should the student record before using either?", "m01-s03-ai", "Consider suitability, factual support and the student’s own contribution.", [
        opt("a", "The source of assistance, checks, selection and student-made changes", "Correct. This record makes verification, transformation and responsibility traceable.", true),
        opt("b", "The final wording while leaving out the earlier decision trail", "A final result alone hides the checking and student contribution."),
        opt("c", "A note that confident-sounding generated suggestions are likely accurate", "Generated material still needs evidence and suitability checks.")
      ])
    ],
    extendedResponse: {
      id: "m01-s03-extended-01",
      label: "Formative learning evidence",
      wordGuide: "90–110 words",
      prompt: "A student wants to use an AI-generated slogan and symbol exactly as supplied because both look professional. Write advice that explains how to turn the suggestions into responsible, original work. Include accuracy, stereotypes, ownership, privacy and at least two visible student-made changes.",
      helpAnchor: "m01-s03-ai",
      scaffold: ["Explain why professional appearance is not proof of suitability.", "Describe accuracy and stereotype checks.", "Identify an ownership or attribution record.", "Protect personal and controlled information.", "Describe two meaningful student transformations."],
      starters: ["The generated result is only a starting point because…", "Before using the claim, the student should…", "The student’s own contribution would be visible through…", "A privacy boundary is…"],
      qualityIndicators: ["Keeps the student responsible for the outcome.", "Names checks rather than making a general warning.", "Shows transformation, attribution and privacy awareness."]
    }
  },

  "m02-s01": {
    checks: [
      quiz("m02-s01-q04", "visual interpretation", "The two brand boards use different colours, shapes and spacing. What is the most useful conclusion from this comparison?", "m02-s01-purpose", "Interpret the combined system rather than assigning a fixed meaning to one colour.", [
        opt("a", "The warmer board is likely to communicate one fixed message widely", "Colour meaning can vary with audience, culture and surrounding visual choices."),
        opt("b", "Colour roles work with shape and spacing to build a direction", "Correct. The first impression comes from relationships across the visual system, not one colour in isolation.", true),
        opt("c", "The cooler board is readable without testing its actual text contrast", "A calm appearance does not prove that foreground and background combinations are readable.")
      ]),
      quiz("m02-s01-q05", "application and evaluation", "A menu uses red for every heading, warning and price, but the same red has poor contrast on one background. Which revision is strongest?", "m02-s01-contrast", "Protect meaning and readability while keeping the palette controlled.", [
        opt("a", "Keep the repeated red role even where its contrast is weak", "Consistency should not preserve a combination that fails realistic reading conditions."),
        opt("b", "Add several brighter colours so each item attracts equal attention", "More competing colours can weaken hierarchy without solving the contrast problem."),
        opt("c", "Refine the red role, use readable text and add non-colour cues", "Correct. The revision protects the colour system while making essential meaning perceivable.", true)
      ])
    ],
    extendedResponse: {
      id: "m02-s01-extended-01",
      label: "Formative learning evidence",
      wordGuide: "75–95 words",
      prompt: "Compare a warm, angular palette direction with a cool, rounded direction for a fast-food brand aimed at quick phone viewing. Recommend one direction, but qualify its intended meaning. Explain the role of three colours, one contrast test and one cue that does not depend on colour.",
      helpAnchor: "m02-s01-example",
      scaffold: ["Choose a direction for a stated audience need.", "Assign main, support and accent roles.", "Explain meaning as a context-based possibility.", "Describe a realistic contrast test.", "Add words, an icon or a pattern as a second cue."],
      starters: ["I recommend the… direction because…", "In this context the main colour may suggest…", "The accent colour will be limited to…", "Meaning will also be shown through…"],
      qualityIndicators: ["Colours have distinct jobs.", "Meaning is not treated as universal.", "Contrast and colour-independent communication are addressed."]
    }
  },

  "m02-s02": {
    checks: [
      quiz("m02-s02-q04", "visual interpretation", "Why does the typography proof image include large letterforms, spacing examples and viewing tools together?", "m02-s02-system", "Think about the parts of typography that must work as one system.", [
        opt("a", "To compare type personality and readability at realistic sizes", "Correct. Typeface character, spacing, contrast and scale need to be judged together.", true),
        opt("b", "To compare whether a decorative style can cover several text roles", "A display style may work for a short name but become tiring in longer information."),
        opt("c", "To prove that colour samples decide whether letters are legible", "Colour can affect contrast, but letterform, size, weight and spacing also matter.")
      ]),
      quiz("m02-s02-q05", "application and evaluation", "A playful display font works for a two-word brand name but slows reading in product descriptions. What is the strongest type plan?", "m02-s02-legibility", "Keep the intended tone while assigning different reading jobs.", [
        opt("a", "Use the display font everywhere so the brand feels consistent", "Repeating one difficult style can make longer information tiring to read."),
        opt("b", "Keep it for the name and use a tested clear face for details", "Correct. Controlled type roles can preserve personality while protecting readability.", true),
        opt("c", "Replace the text descriptions with decorative letter samples", "Decorative samples cannot communicate the required product information.")
      ])
    ],
    extendedResponse: {
      id: "m02-s02-extended-01",
      label: "Formative learning evidence",
      wordGuide: "80–100 words",
      prompt: "A poster uses four unrelated fonts to seem energetic, but the slogan is thin and the product details are hard to scan on a phone. Propose a revised typography system with roles for the name, slogan, main message and supporting details. Explain how the revised system keeps an energetic tone while improving reading.",
      helpAnchor: "m02-s02-example",
      scaffold: ["Identify the main reading problems.", "Assign four information roles.", "Limit the typeface set.", "Use size, weight, spacing or alignment for hierarchy.", "Describe a phone-size retest and likely revision."],
      starters: ["The current poster loses clarity because…", "The brand name will use…", "Energy can remain through…", "At phone size I will check…"],
      qualityIndicators: ["Each level has a clear communication role.", "Tone does not override legibility or readability.", "The proposed test can reveal a specific failure."]
    }
  },

  "m02-s03": {
    checks: [
      quiz("m02-s03-q04", "visual interpretation", "The mood-board image combines colour, texture, letterforms, food images and layout thumbnails. What makes it a useful design filter?", "m02-s03-moodboard", "Look for repeated qualities and purposeful selection across different sample types.", [
        opt("a", "It includes as many unrelated samples as the board can hold", "A large collection without a direction makes later decisions harder to filter."),
        opt("b", "It provides finished designs that can be copied into the brand", "Reference material should guide original decisions rather than become copied output."),
        opt("c", "Its selected samples repeat an explained visual direction", "Correct. Repeated qualities let the designer include, reject and justify later choices.", true)
      ]),
      quiz("m02-s03-q05", "application and evaluation", "A poster gives the logo, product image, slogan, price and action equal size and contrast. What should the designer do first?", "m02-s03-hierarchy", "Begin with communication order before adjusting decoration.", [
        opt("a", "Rank the information by purpose, then adjust visual weight", "Correct. An intended first, next and later order provides a basis for size, contrast and position decisions.", true),
        opt("b", "Add boxes around the main elements to make each one prominent", "Equal prominence and extra borders can preserve the competition rather than create a path."),
        opt("c", "Centre the elements while keeping their current emphasis", "Centring does not establish which information should be noticed first.")
      ])
    ],
    extendedResponse: {
      id: "m02-s03-extended-01",
      label: "Formative learning evidence",
      wordGuide: "90–110 words",
      prompt: "A mood board contains attractive references from three conflicting styles, and the related poster has no clear entry point. Explain how you would edit the board and rebuild the poster’s scanning path. Justify one inclusion, one exclusion and the placement of three information elements.",
      helpAnchor: "m02-s03-moodboard",
      scaffold: ["State one clear mood-board direction.", "Keep a reference that supports that direction.", "Remove a conflicting reference for an explained reason.", "Rank three poster elements.", "Use proximity, alignment, spacing or contrast to show their relationships."],
      starters: ["The board should communicate…", "I would retain… because…", "I would remove… because…", "The poster path will begin with…"],
      qualityIndicators: ["Selections follow one explained direction.", "The poster has an intentional attention order.", "Layout vocabulary is linked to visible decisions."]
    }
  },

  "m03-s01": {
    checks: [
      quiz("m03-s01-q04", "visual interpretation", "The same two-shape mark appears on a large sign, a cup and a small app tile. What does this most clearly demonstrate?", "m03-s01-role", "Focus on what remains identifiable when the application changes.", [
        opt("a", "Different applications need added symbols to explain the business", "Extra detail may compete with the logo’s main identifying job, especially at small size."),
        opt("b", "A compact core can support recognition across different uses", "Correct. The repeated shapes act as a stable identifier while the context and size change.", true),
        opt("c", "The mark is original because it appears on several mock-ups", "Repetition shows consistency, not proof of an original development process.")
      ]),
      quiz("m03-s01-q05", "application and evaluation", "A first logo sketch includes a burger, drink, slogan, business story and five effects. Which redesign approach best protects recognition?", "m03-s01-example", "Find the strongest name-connected relationship before choosing what to remove.", [
        opt("a", "Shrink the existing details until they fit inside a compact badge", "Fitting every detail into a smaller space may make recognition more difficult."),
        opt("b", "Trace a familiar takeaway logo and replace its colours", "Changing colour does not create a distinctive structure or original relationship."),
        opt("c", "Develop several simple name-linked forms and compare silhouettes", "Correct. Structurally different sketches and silhouette tests can reveal a clearer, more distinctive identifier.", true)
      ])
    ],
    extendedResponse: {
      id: "m03-s01-extended-01",
      label: "Formative learning evidence",
      wordGuide: "80–100 words",
      prompt: "A detailed logo sketch tells the whole business story but becomes unclear as a small icon. Recommend how the student could simplify it without making it generic. Explain the identifying relationship to preserve, two genuinely different alternatives and one confusion check against existing brands.",
      helpAnchor: "m03-s01-example",
      scaffold: ["State the logo’s main identifying job.", "Name the strongest link to the business name or audience.", "Describe two structurally different alternatives.", "Explain what detail could be removed.", "Include a silhouette or confusion comparison."],
      starters: ["The logo needs to identify…", "The strongest relationship is…", "One alternative could… while another could…", "I would check for confusion by…"],
      qualityIndicators: ["Simplification protects a meaningful core.", "Alternatives differ in structure, not just colour.", "Originality and recognition are both tested."]
    }
  },

  "m03-s02": {
    checks: [
      quiz("m03-s02-q04", "visual interpretation", "In the progressive scale proofs, some fine details disappear while one core shape remains. What evidence does this provide?", "m03-s02-scale", "Separate the visible test result from assumptions about file quality.", [
        opt("a", "The remaining shape carries recognition more reliably at small size", "Correct. The physical proofs show which feature survives reduction and can anchor a compact variant.", true),
        opt("b", "Lost details should be restored with a stronger outline or shadow", "Added effects may create more interference without making tiny details distinguishable."),
        opt("c", "A high-resolution export would preserve fine details at small size", "Technical sharpness does not ensure that visually tiny features can be recognised.")
      ]),
      quiz("m03-s02-q05", "application and evaluation", "A logo passes on a white poster but fails on a dark uniform and a busy phone header. Which test plan is strongest?", "m03-s02-contrast", "Use controlled variants while keeping one recognisable identity.", [
        opt("a", "Design a different symbol for each background and application", "Unrelated symbols would make the audience relearn the identity each time."),
        opt("b", "Test one-colour and holding-shape variants in both contexts", "Correct. Targeted contrast variants address interference while preserving the logo’s recognisable core.", true),
        opt("c", "Judge the enlarged logo on screen and skip realistic outputs", "An enlarged view can hide problems that appear at the intended size and background.")
      ])
    ],
    extendedResponse: {
      id: "m03-s02-extended-01",
      label: "Formative learning evidence",
      wordGuide: "75–95 words",
      prompt: "A logo’s slogan disappears on a phone header and its symbol blends into a busy photograph. Explain two controlled variants you would test, the core feature that must remain, and a clear pass condition for each context.",
      helpAnchor: "m03-s02-example",
      scaffold: ["Name the failure in each context.", "Propose a compact small-size variant.", "Propose a contrast or holding-shape variant.", "Identify the unchanged core.", "Define observable pass conditions at realistic size."],
      starters: ["On the phone header, the failure is…", "The compact variant will…", "Over the photograph I will test…", "Both versions remain recognisable because…"],
      qualityIndicators: ["Each change answers a specific observed problem.", "The logo family retains one core identity.", "Pass conditions can be checked rather than guessed."]
    }
  },

  "m03-s03": {
    checks: [
      quiz("m03-s03-q04", "visual interpretation", "The studio board shows stacked, horizontal and icon versions of one identity. Which evidence makes them a coherent family?", "m03-s03-family", "Compare what stays stable while the arrangement changes.", [
        opt("a", "Each version fills a different shaped area", "Different fit explains why variants are useful, but fit alone does not make them recognisably related."),
        opt("b", "Each version adds a different decorative effect", "Unrelated effects can weaken the shared identity rather than create coherence."),
        opt("c", "Core shapes and colours stay recognisable", "Correct. Stable identifying features connect the variants even when their arrangement changes.", true)
      ]),
      quiz("m03-s03-q05", "application and evaluation", "Peer feedback says, ‘The icon feels crowded at phone size; test the symbol without the slogan.’ How should the designer respond?", "m03-s03-critique", "Judge the comment by its evidence, criterion and proposed test.", [
        opt("a", "Test the suggestion, record the result and decide against the brief", "Correct. The comment is specific enough to investigate, while the designer remains responsible for the final decision.", true),
        opt("b", "Accept it without testing because peer feedback reflects the audience", "Feedback is evidence to consider, not an automatic instruction."),
        opt("c", "Reject it as personal preference without checking the size problem", "This comment identifies an observable context and a useful test rather than only a preference.")
      ])
    ],
    extendedResponse: {
      id: "m03-s03-extended-01",
      label: "Formative learning evidence",
      wordGuide: "90–110 words",
      prompt: "Two logo families are tested in identical contexts. Family A receives more votes, but its icon resembles an existing brand. Family B is less popular but has a clearer name connection and better small-size reading. Evaluate the evidence, decide which family to develop and propose one precise revision after critique.",
      helpAnchor: "m03-s03-example",
      scaffold: ["Compare both families under the same criteria.", "Treat votes as one type of evidence.", "Discuss originality and confusion risk.", "Discuss recognition and readability.", "Select one family and specify a testable revision."],
      starters: ["The vote suggests… but it does not prove…", "Family A carries a risk because…", "I would develop Family… because…", "The next revision will test…"],
      qualityIndicators: ["Selection uses several relevant criteria.", "Popularity is weighed rather than ignored or obeyed.", "The revision is precise and testable."]
    }
  },

  "m04-s01": {
    checks: [
      quiz("m04-s01-q04", "visual interpretation", "What can the headings, columns and aligned prices in the supplied canteen menu reliably show students?", "m04-s01-source", "Distinguish visible layout evidence from current commercial information.", [
        opt("a", "That the shown products and prices suit the proposed new menu", "The source is authorised for layout analysis, not as current product or price authority."),
        opt("b", "How grouping and alignment can support finding and comparison", "Correct. These are observable information-design relationships in the complete source image.", true),
        opt("c", "That the source layout will suit a new audience without changes", "A visible example can be analysed, but quality still depends on criteria and user testing.")
      ]),
      quiz("m04-s01-q05", "application and evaluation", "A draft menu places the same wrap under ‘Meals’, ‘Quick Bites’ and ‘Specials’. What is the strongest information-architecture decision?", "m04-s01-example", "Consider where the intended user would expect to find the item fastest.", [
        opt("a", "Keep three copies so each category appears well stocked", "Duplication may create clutter and inconsistent information."),
        opt("b", "Remove the headings and arrange the item list alphabetically", "An alphabetical list may ignore the audience’s category-based search needs."),
        opt("c", "Test the category labels and place the wrap once", "Correct. A finding test can identify the clearest home without unnecessary duplication.", true)
      ])
    ],
    extendedResponse: {
      id: "m04-s01-extended-01",
      label: "Formative learning evidence",
      wordGuide: "80–100 words",
      prompt: "A proposed menu mixes meals, drinks, sides and promotions in one long list. Explain how you would reorganise it for quick scanning. Include three audience-centred category labels, a reasoned group order, one difficult item placement and two layout observations from the supplied source menu without treating its products or prices as current.",
      helpAnchor: "m04-s01-source",
      scaffold: ["List the types of information users need.", "Create three understandable categories.", "Order them by likely search behaviour.", "Resolve one item that could fit two groups.", "Use two literal source-menu observations only."],
      starters: ["Users are likely to search first for…", "The three category labels will be…", "I would place… under… because…", "In the source image I can observe…"],
      qualityIndicators: ["Every item has one understandable home.", "The order responds to audience finding needs.", "Source observations are separated from current facts."]
    }
  },

  "m04-s02": {
    checks: [
      quiz("m04-s02-q04", "visual interpretation", "The wall menu and counter card repeat the same category bands and aligned rows. What likely scanning benefit does this create?", "m04-s02-scan", "Look for landmarks that stay predictable across two formats.", [
        opt("a", "Users compare groups and details along a predictable path", "Correct. Repeated landmarks and alignment reduce the need to relearn where information belongs.", true),
        opt("b", "The repeated bands make close reading of each row unnecessary", "Landmarks support finding, but they do not remove the need to read relevant details."),
        opt("c", "The smaller card can safely use unreadably small supporting text", "Matching structure does not remove the need to test type at the intended size.")
      ]),
      quiz("m04-s02-q05", "application and evaluation", "In a five-second test, users find category headings but match two products to the wrong prices. Which revision best responds to the evidence?", "m04-s02-example", "Target the relationship that users are misreading, then retest it.", [
        opt("a", "Add texture behind the product rows to strengthen the visual style", "More visual detail may create interference without improving item-price matching."),
        opt("b", "Stabilise the price column and increase separation between rows", "Correct. Alignment and spacing directly address the observed matching error.", true),
        opt("c", "Replace category headings with larger promotional photographs", "Users already found the headings; this change does not address the price relationship.")
      ])
    ],
    extendedResponse: {
      id: "m04-s02-extended-01",
      label: "Formative learning evidence",
      wordGuide: "75–95 words",
      prompt: "A finding test shows that users locate the Drinks heading quickly but repeatedly pair items with the wrong details. Interpret this evidence and recommend two layout revisions. Explain how a second test at the intended size would show whether the revisions worked.",
      helpAnchor: "m04-s02-example",
      scaffold: ["State what the successful heading result shows.", "Identify the remaining relationship error.", "Revise alignment, proximity or row spacing.", "Keep readable size and contrast.", "Define success for an uncoached retest."],
      starters: ["The quick heading result suggests…", "The matching errors indicate…", "I would revise… because…", "The retest will pass when…"],
      qualityIndicators: ["Separates successful and unsuccessful parts of the scan path.", "Revisions directly answer observed behaviour.", "The retest uses a clear, observable condition."]
    }
  },

  "m04-s03": {
    checks: [
      quiz("m04-s03-q04", "visual interpretation", "In the menu-review workspace, why are some details placed with verification tokens while others sit on hold-back cards?", "m04-s03-honesty", "Think about the difference between usable evidence and an uncertain claim.", [
        opt("a", "To make the uncertain details less noticeable before publication", "Hiding uncertain details does not make them suitable or truthful to publish."),
        opt("b", "To separate the menu imagery from its written details", "Both words and images can communicate claims that need checking."),
        opt("c", "To separate supported details from those needing confirmation", "Correct. The physical separation represents a responsible check-use-withhold decision.", true)
      ]),
      quiz("m04-s03-q05", "application and evaluation", "A menu mock-up shows an illustrated meal much larger than the proposed serving and calls it ‘the healthiest choice’. What should happen before publication?", "m04-s03-image-claim", "Check what both the image and words lead the audience to believe.", [
        opt("a", "Revise or label the image and verify or remove the health claim", "Correct. Both the visual scale and factual benefit claim need honest evidence or correction.", true),
        opt("b", "Keep both because promotional designs are allowed to exaggerate facts", "Creative promotion does not remove responsibility for written or implied claims."),
        opt("c", "Reduce the type size so the unsupported claim seems less prominent", "Smaller wording does not turn an unsupported claim into a truthful one.")
      ])
    ],
    extendedResponse: {
      id: "m04-s03-extended-01",
      label: "Formative learning evidence",
      wordGuide: "90–110 words",
      prompt: "Audit a fictional menu entry that uses an enlarged concept image, an unverified environmental benefit and a price copied from the historical source menu. Explain what each element implies, what evidence would be needed and how you would revise or withhold each detail while keeping the entry persuasive.",
      helpAnchor: "m04-s03-example",
      scaffold: ["Identify the implication made by the image.", "Identify the factual benefit claim.", "Explain why the historical price is not current authority.", "Name suitable evidence or a hold-back decision.", "Rewrite one element truthfully and clearly."],
      starters: ["The enlarged image may imply…", "The environmental wording would require…", "The historical price cannot be used as current because…", "A truthful revision is…"],
      qualityIndicators: ["Treats visual and written implications as claims.", "Matches each claim with evidence or withholding.", "Keeps the revised communication clear without inventing facts."]
    }
  },

  "m05-s01": {
    checks: [
      quiz("m05-s01-q04", "visual interpretation", "In the supplied poster, what should a student analyse when tracing the first three things their eye notices?", "m05-s01-composition", "Connect the observed order to visible design features and the message purpose.", [
        opt("a", "Whether the elements repeat a consistent colour and size pattern", "Equal treatment can remove the deliberate order that composition needs."),
        opt("b", "How scale, contrast and position create an attention path", "Correct. These visible choices help explain why one element becomes the entry point and others follow.", true),
        opt("c", "Whether the source brand content should be copied exactly", "The source supports composition analysis, not copying its brand decisions.")
      ]),
      quiz("m05-s01-q05", "application and evaluation", "A distance test shows viewers notice a decorative badge before the product and offer. Which response best protects the poster purpose?", "m05-s01-balance", "Use the observed attention order to make a targeted change.", [
        opt("a", "Increase the badge contrast so its role is unmistakable", "This would strengthen the distracting focal point rather than restore the intended path."),
        opt("b", "Increase several elements so the layout feels more energetic", "More competing visual weight would make the attention path even less clear."),
        opt("c", "Reduce or reposition the badge, then repeat the distance test", "Correct. The revision responds to evidence and checks whether the intended focal path returns.", true)
      ])
    ],
    extendedResponse: {
      id: "m05-s01-extended-01",
      label: "Formative learning evidence",
      wordGuide: "80–100 words",
      prompt: "A poster’s logo, product image, offer and decorative badge all compete for first attention. Plan a three-step viewing path and explain how you would change visual weight, alignment and space to create it. Include a distance or thumbnail test and one likely revision if the observed order is wrong.",
      helpAnchor: "m05-s01-example",
      scaffold: ["Name the intended first, second and third elements.", "Link the path to the communication purpose.", "Adjust scale, contrast, position or detail.", "Use alignment and space to show relationships.", "Describe a realistic test and response."],
      starters: ["The viewer should notice… first because…", "The second step will be supported by…", "I will reduce competition by…", "If viewers notice… first, I will…"],
      qualityIndicators: ["The attention path serves the poster’s purpose.", "Design vocabulary explains specific changes.", "Testing can lead to a targeted revision."]
    }
  },

  "m05-s02": {
    checks: [
      quiz("m05-s02-q04", "visual interpretation", "Why does the edge-check image show the same cut-out against both light and dark backgrounds?", "m05-s02-example", "Consider which faults become visible only when the surrounding colour changes.", [
        opt("a", "To reveal halos, missing edges and colour spill", "Correct. Contrasting test surfaces expose different masking problems before the image is placed.", true),
        opt("b", "To choose the brightest-looking background for the cut-out", "The comparison checks edge quality rather than selecting a background by brightness alone."),
        opt("c", "To decide whether the original photograph can be deleted", "The original should remain preserved as context and process evidence.")
      ]),
      quiz("m05-s02-q05", "application and evaluation", "A product photograph has an authorised source and useful real-world scale, but its background is slightly busy. What is the strongest decision process?", "m05-s02-removal", "Compare the communication value of the context with the quality of a possible cut-out.", [
        opt("a", "Remove the background immediately because promotion requires isolation", "There is no universal rule; the real context may carry useful and honest information."),
        opt("b", "Test both versions, judge hierarchy and honesty, then record the choice", "Correct. A purpose-led comparison can show whether context or clean isolation better serves the poster.", true),
        opt("c", "Crop tightly until the scale and surrounding condition are hidden", "Hiding relevant context may create a misleading impression of the product.")
      ])
    ],
    extendedResponse: {
      id: "m05-s02-extended-01",
      label: "Formative learning evidence",
      wordGuide: "90–110 words",
      prompt: "A student has an authorised product photograph whose real background explains scale, but a cut-out version creates a cleaner focal point and shows a faint halo on dark colours. Recommend which version should be used and justify the decision through message, honesty, edge quality, privacy, rights and preservation of the original.",
      helpAnchor: "m05-s02-example",
      scaffold: ["State the image’s communication job.", "Compare the value of real context with isolation.", "Interpret the halo test evidence.", "Confirm privacy and source permission.", "Choose a version and explain how the original will be retained."],
      starters: ["The image needs to communicate…", "The real background helps by…", "The cut-out currently fails because…", "I recommend… provided that…"],
      qualityIndicators: ["The recommendation follows the communication purpose.", "Quality, honesty, privacy and rights are considered together.", "The original image remains preserved."]
    }
  },

  "m05-s03": {
    checks: [
      quiz("m05-s03-q04", "visual interpretation", "Across the flat poster and three context mock-ups, which observation is strongest evidence for revision?", "m05-s03-example", "Look for a repeated or context-specific communication failure, not proof of real installation.", [
        opt("a", "The realistic scenes prove the campaign was publicly installed", "The images are simulated context tests and do not prove real installation."),
        opt("b", "The street setting predicts how nearby viewers will respond to the action", "A realistic setting cannot provide evidence about individual viewers’ understanding."),
        opt("c", "Small action text loses clarity at distance in one context", "Correct. This observable context failure can justify a targeted size, contrast or placement revision.", true)
      ]),
      quiz("m05-s03-q05", "application and evaluation", "A poster says ‘Order now’, but the project only provides a viewable menu and portfolio. Which call to action is most responsible?", "m05-s03-action", "Match the instruction to a next step that the audience can genuinely complete.", [
        opt("a", "View the menu and explore the brand portfolio", "Correct. The action is specific and limited to experiences that are actually available.", true),
        opt("b", "Order now and receive your meal within five minutes", "This promises an ordering service and delivery condition that are not confirmed."),
        opt("c", "Act immediately before this exclusive offer disappears", "Manufactured urgency does not match the available learning-site experience.")
      ])
    ],
    extendedResponse: {
      id: "m05-s03-extended-01",
      label: "Formative learning evidence",
      wordGuide: "80–100 words",
      prompt: "Compare a flat poster with an outdoor and street mock-up. The logo remains recognisable, but the call to action becomes hard to read and the street colours compete with the brand. Propose an honest call to action, one controlled logo or layout revision and a retest. State clearly what the mock-ups can and cannot prove.",
      helpAnchor: "m05-s03-example",
      scaffold: ["Choose a genuinely available next step.", "Identify evidence from both contexts.", "Propose one controlled revision.", "Describe how to retest at viewing distance.", "Separate simulated behaviour from real installation evidence."],
      starters: ["The audience can genuinely…", "In the outdoor context I observed…", "I will revise… while keeping…", "These mock-ups can show… but cannot prove…"],
      qualityIndicators: ["The call to action matches the available experience.", "A context observation drives a controlled revision.", "The limitation of mock-up evidence is explicit."]
    }
  },

"m06-s01": {
    checks: [
      quiz("m06-s01-q04", "visual interpretation", "In the touchpoint visual, the same motif appears on a bag, cup and wrapper, but its placement changes. What does this best demonstrate?", "m06-s01-flexibility", "Compare the features that repeat with the features that change across the objects.", [
        opt("a", "Each application should closely repeat the original layout and scale", "The objects have different shapes, so close repetition may not suit each application."),
        opt("b", "Controlled adaptation can preserve a recognisable core identity", "Correct. The repeated motif preserves identity while placement responds to each object.", true),
        opt("c", "The object shape alone is enough to create brand consistency", "The bag, cup and wrapper differ; the repeated visual decisions create the connection.")
      ]),
      quiz("m06-s01-q05", "application and evaluation", "A menu keeps the approved logo and colours but introduces an unrelated decorative typeface for every heading. What is the strongest response?", "m06-s01-system", "Judge the change against the stable identity rules and the menu's communication purpose.", [
        opt("a", "Keep it because varied applications benefit from a noticeably fresh style", "A fresh style without a defined role weakens the connection between applications."),
        opt("b", "Replace the menu layout with the exact poster arrangement", "The menu needs its own usable layout; consistency does not require identical arrangements."),
        opt("c", "Restore an approved type role while retaining the useful menu layout", "Correct. This protects the type system while allowing the application to fit its purpose.", true)
      ])
    ],
    extendedResponse: {
      id: "m06-s01-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 90–110 words.",
      storageKey: "year7multimedia:evidence:m06-s01:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Compare two different brand applications, such as a menu and a uniform concept. Explain which logo, colour, type and tone features should remain stable, identify one controlled adaptation for each context, and justify how your choices preserve recognition without forcing identical layouts.",
      helpAnchor: "m06-s01-flexibility",
      scaffold: [
        "Name the two applications and their different communication conditions.",
        "Identify at least three stable identity features.",
        "Describe one context-based adaptation for each application.",
        "Explain how you would detect an accidental inconsistency."
      ],
      starters: [
        "Across both applications, I would keep…",
        "The menu/uniform needs to adapt… because…",
        "This remains recognisable because…"
      ],
      qualityIndicators: [
        "The stable features form a clear visual system.",
        "Each adaptation responds to a genuine context need.",
        "The explanation distinguishes variation from inconsistency."
      ]
    }
  },

  "m06-s02": {
    checks: [
      quiz("m06-s02-q04", "visual interpretation", "The uniform visual shows one motif at different sizes and positions on a T-shirt, cap and apron. Why is this a controlled difference?", "m06-s02-placement", "Consider how the surface and viewing conditions change for each garment.", [
        opt("a", "The placement suits each garment while the motif stays recognisable", "Correct. Scale and position adapt to the surface while the core identity remains.", true),
        opt("b", "Each garment is intended to represent a separate business identity", "The shared motif connects the garments as applications of one identity."),
        opt("c", "The mock-up confirms the chosen production approach for each item", "The visual tests appearance only; it does not verify manufacture or material performance.")
      ]),
      quiz("m06-s02-q05", "application and evaluation", "A compact mark disappears against a dark cap when the concept is viewed at normal size. What should the designer do next?", "m06-s02-example", "Use the observed visibility problem to choose and retest one focused change.", [
        opt("a", "Add the full slogan and reduce the complete logo further", "More small detail is likely to make the recognition problem worse."),
        opt("b", "Strengthen the mark's contrast and retest it at a realistic size", "Correct. This directly addresses the observed problem without inventing production claims.", true),
        opt("c", "Approve manufacture because the motif is visible when enlarged", "An enlarged screen view does not prove normal-size visibility or manufacture.")
      ])
    ],
    extendedResponse: {
      id: "m06-s02-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 80–100 words.",
      storageKey: "year7multimedia:evidence:m06-s02:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Evaluate two placements for a staff-uniform concept. Explain how purpose, viewing distance, garment colour, logo variant, scale and clear area affect your choice. Finish by stating what the digital mock-up can show and one production fact it cannot confirm.",
      helpAnchor: "m06-s02-example",
      scaffold: [
        "State the uniform concept's communication purpose.",
        "Compare the visibility of two placements.",
        "Select a logo variant and justify its scale and contrast.",
        "Separate visual evidence from unverified production facts."
      ],
      starters: [
        "The concept needs to identify…",
        "Placement… is stronger because…",
        "The mock-up can show… but cannot confirm…"
      ],
      qualityIndicators: [
        "The selection uses observable placement evidence.",
        "Brand identity remains coherent at a realistic size.",
        "The conclusion stays within the digital-concept boundary."
      ]
    }
  },

  "m06-s03": {
    checks: [
      quiz("m06-s03-q04", "visual interpretation", "The suitability-check photograph shows the same brand application at different sizes and contrast conditions. Which question should the designer answer from these comparisons?", "m06-s03-access", "Track whether people can still recognise the identity when viewing conditions change.", [
        opt("a", "Whether the proof looks identical under every viewing condition", "Suitability is about maintaining usable recognition, not making every viewing condition look identical."),
        opt("b", "Whether the identity remains recognisable as size and contrast change", "Correct. Comparing real size and contrast conditions tests whether the identity remains recognisable and usable.", true),
        opt("c", "Whether the digital proof confirms the garment's production method", "The photograph supports recognition and accessibility checks, not a claim about how a garment will be produced.")
      ]),
      quiz("m06-s03-q05", "application and evaluation", "A uniform concept uses two similar colours as the only way to distinguish staff roles. Which revision is most suitable?", "m06-s03-access", "Choose a revision that keeps the role understandable without relying on colour alone.", [
        opt("a", "Add a clear role label or symbol, then retest colour contrast", "Correct. The added cue preserves meaning while contrast remains part of the check.", true),
        opt("b", "Keep the colour-only system and provide a short explanatory key", "A key may help some viewers, but the role still depends on distinguishing the colours."),
        opt("c", "Add a third similar colour and leave the roles otherwise unlabelled", "Another colour does not solve the reliance on colour-only information.")
      ])
    ],
    extendedResponse: {
      id: "m06-s03-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 90–110 words.",
      storageKey: "year7multimedia:evidence:m06-s03:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Design a focused suitability test for one brand application. Explain how reviewers will check recognition, contrast, readable detail, non-colour cues and respectful representation. State how privacy will be protected and what a small reviewer group can and cannot prove.",
      helpAnchor: "m06-s03-example",
      scaffold: [
        "Name the application, audience and viewing context.",
        "Set two observable recognition or readability tasks.",
        "Include one check that does not depend on colour.",
        "Explain the privacy method and the limit of the sample."
      ],
      starters: [
        "The application is intended to…",
        "Reviewers will be asked to…",
        "This test may reveal… but it cannot prove…"
      ],
      qualityIndicators: [
        "The tasks are observable and relevant to the context.",
        "Accessibility and privacy are addressed specifically.",
        "The conclusion does not overstate a small test."
      ]
    }
  },

  "m07-s01": {
    checks: [
      quiz("m07-s01-q04", "visual interpretation", "In the storyboard visual, the same image and motif remain recognisable while their scale and position change. What does this help the viewer do?", "m07-s01-continuity", "Consider how a viewer follows an element from one state to the next.", [
        opt("a", "Treat each state as an unrelated advertisement with a new identity", "The repeated elements connect the states instead of making them unrelated."),
        opt("b", "Follow one continuous sequence while attention moves deliberately", "Correct. Recognisable elements preserve continuity as motion guides the viewing path.", true),
        opt("c", "Focus equally on several messages during the same transition", "The sequence should control when information receives attention, not present competing messages equally.")
      ]),
      quiz("m07-s01-q05", "application and evaluation", "A motion ad moves the product, logo, slogan and price in different directions at the same time, and viewers miss the price. What is the strongest revision?", "m07-s01-states", "Use the attention goal to decide what stays stable and what changes in sequence.", [
        opt("a", "Increase the speed so viewers see the complete movement sooner", "More speed is likely to reduce the time available to follow the message."),
        opt("b", "Add another transition so each moving element appears more active", "Extra movement would add competition without solving the missed focal message."),
        opt("c", "Hold the identity stable and sequence the product and price changes", "Correct. Staged movement can guide attention to the price while preserving recognition.", true)
      ])
    ],
    extendedResponse: {
      id: "m07-s01-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 80–100 words.",
      storageKey: "year7multimedia:evidence:m07-s01:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Explain a three-state storyboard for a short motion advertisement. Describe what the audience should notice in each state, which element remains stable, what changes between states and how timing will protect the readability of the slogan or action.",
      helpAnchor: "m07-s01-example",
      scaffold: [
        "Give each state one clear attention goal.",
        "Name the recognisable element carried across all states.",
        "Describe the direction, scale or order of each change.",
        "Include a readable-text or comfort check."
      ],
      starters: [
        "State 1 establishes…",
        "The… remains stable so that…",
        "The transition guides attention by…"
      ],
      qualityIndicators: [
        "Each movement has a communication purpose.",
        "Continuity remains visible across the sequence.",
        "Essential text receives enough attention and time."
      ]
    }
  },

  "m07-s02": {
    checks: [
      quiz("m07-s02-q04", "visual interpretation", "Across the three storyboard frames, the same abstract object changes position while keeping recognisable features. What continuity should the designer protect?", "m07-s02-correspondence", "Notice what lets a viewer track one object from one state into the next.", [
        opt("a", "Each frame should read as an unrelated image with a different object", "Unrelated objects would weaken the visual connection that makes the movement continuous."),
        opt("b", "The photograph should prove which animation settings were used", "The frames show visible states, but they do not prove particular software settings."),
        opt("c", "Viewers should be able to track the same object across the changing states", "Correct. Stable recognisable features create correspondence while position or scale changes.", true)
      ]),
      quiz("m07-s02-q05", "application and evaluation", "A product should slide left, but the preview shows one image fading out and another appearing. Which edit best addresses the cause?", "m07-s02-example", "Check whether one object was carried across the duplicated states.", [
        opt("a", "Export immediately and correct the movement in the video player", "The transition should be repaired in the editable states before export."),
        opt("b", "Restore the shared image, then change its position in the duplicate", "Correct. Keeping the corresponding object allows the transition to show one item changing state.", true),
        opt("c", "Replace the product with two different images in both states", "Different images would reinforce the swap rather than restore continuity.")
      ])
    ],
    extendedResponse: {
      id: "m07-s02-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 80–100 words.",
      storageKey: "year7multimedia:evidence:m07-s02:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Explain how you would build and check one Match and Move transition between duplicated states. Identify the corresponding elements, the position or scale changes, what remains stable, and how you would diagnose a preview that fades or swaps instead of moving continuously.",
      helpAnchor: "m07-s02-example",
      scaffold: [
        "Describe the complete first state.",
        "Name the corresponding elements retained in the duplicate.",
        "Explain each purposeful property change.",
        "Give one preview fault and its evidence-based check."
      ],
      starters: [
        "The same… appears in both states…",
        "I will change… so that…",
        "If the preview shows… I will check…"
      ],
      qualityIndicators: [
        "The workflow uses duplicated states and corresponding elements.",
        "Changes support the planned message rather than decoration.",
        "Troubleshooting responds to the observed preview behaviour."
      ]
    }
  },

  "m07-s03": {
    checks: [
      quiz("m07-s03-q04", "visual interpretation", "The preflight photograph separates storyboard strips, playback screens, and editable-source and finished-output tokens. Why compare these records?", "m07-s03-preflight", "Look for differences between the intended sequence, editable-source record and actual playback.", [
        opt("a", "To detect timing, crop or message differences before the output is treated as finished", "Correct. Comparing the records helps the designer find where the plan, edit and playback no longer agree.", true),
        opt("b", "To show that an output token proves the communication is effective", "A finished-file token does not prove that timing, crop, hierarchy or wording works for the audience."),
        opt("c", "To let the storyboard replace reopening and checking the exported file", "The storyboard records intent; the exported file still needs to be reopened and inspected.")
      ]),
      quiz("m07-s03-q05", "application and evaluation", "An exported MP4 opens, but its action button is partly cropped in the intended phone-shaped preview. What should happen next?", "m07-s03-preflight", "Choose a response that fixes the editable source and verifies the new output.", [
        opt("a", "Return to the editable file, correct safe-area placement, re-export and reopen", "Correct. This addresses the crop in the source and verifies the revised output.", true),
        opt("b", "Keep the file because opening successfully is the main quality measure", "Opening confirms file integrity but does not resolve the missing action."),
        opt("c", "Rename the cropped MP4 and record it as a completed submission", "A new name does not repair the crop, and local export is not submission.")
      ])
    ],
    extendedResponse: {
      id: "m07-s03-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 90–110 words.",
      storageKey: "year7multimedia:evidence:m07-s03:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Write a preflight and revision note for an animation that exported successfully but still has one communication problem. Explain the timing, hierarchy, crop, spelling or contrast evidence you checked, the change made in the editable file, and how the revised MP4 will be verified without calling it submitted.",
      helpAnchor: "m07-s03-preflight",
      scaffold: [
        "State what passed in the first export.",
        "Describe one observed communication problem.",
        "Explain the focused source-file revision.",
        "Include playback, file-name and backup checks.",
        "Report the final state without claiming submission."
      ],
      starters: [
        "The first MP4 opened correctly, but…",
        "I returned to the editable file and…",
        "The revised export will be checked by…"
      ],
      qualityIndicators: [
        "The evidence goes beyond export completion.",
        "The revision directly answers the observed problem.",
        "File state and submission state are reported accurately."
      ]
    }
  },

  "m08-s01": {
    checks: [
      quiz("m08-s01-q04", "visual interpretation", "Two advertisements show the same fictional product: one uses a supported benefit and a calm action, while the other uses urgency and emotional pressure. Which comparison is strongest?", "m08-s01-persuasion", "Ask which advertisement helps the audience make an informed choice.", [
        opt("a", "The calm advertisement is less persuasive because it does not manufacture urgency", "Persuasion can remain purposeful while giving the audience evidence and a meaningful choice."),
        opt("b", "The calm advertisement supports informed choice; the urgent one pressures without support", "Correct. The first connects a benefit to support, while the second relies on pressure rather than evidence.", true),
        opt("c", "Both advertisements are equally fair because they promote the same product", "A shared product does not make the techniques equally fair; wording and likely audience effects matter.")
      ]),
      quiz("m08-s01-q05", "application and evaluation", "A poster says, “Everyone is buying it now”, but no evidence supports the popularity claim. Which revision keeps a useful marketing purpose?", "m08-s01-example", "Preserve an honest invitation while removing fabricated social pressure.", [
        opt("a", "Move the sentence into smaller text beneath the product image", "Smaller type does not make an unsupported popularity claim truthful."),
        opt("b", "Add more people to the image so the popularity seems believable", "Staged imagery would strengthen the unsupported impression rather than provide evidence."),
        opt("c", "Describe a supported benefit and invite viewers to explore the range", "Correct. The revision can remain persuasive without fabricated popularity or exclusion pressure.", true)
      ])
    ],
    extendedResponse: {
      id: "m08-s01-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 90–110 words.",
      storageKey: "year7multimedia:evidence:m08-s01:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Analyse a fictional advertisement aimed at young customers. Identify one attention device, its promised benefit, the support needed for that promise and the likely effect of its call to action. Revise any unfair pressure so the audience still receives a clear, respectful next step.",
      helpAnchor: "m08-s01-example",
      scaffold: [
        "Name the target group without using stereotypes.",
        "Identify the persuasive technique and intended effect.",
        "State what evidence the promised benefit would need.",
        "Judge whether the action preserves meaningful choice.",
        "Write an honest replacement line if needed."
      ],
      starters: [
        "The advertisement attracts attention by…",
        "The benefit would need evidence showing…",
        "I would revise the action to… because…"
      ],
      qualityIndicators: [
        "Technique, evidence and likely effect are connected.",
        "The audience is represented respectfully.",
        "The revised action remains purposeful without unfair pressure."
      ]
    }
  },

  "m08-s02": {
    checks: [
      quiz("m08-s02-q04", "visual interpretation", "The green-claim audit visual separates a leaf-patterned package, material sample, claim card and evidence card. Why is that separation useful?", "m08-s02-test", "Ask what must connect before an environmental impression can be justified.", [
        opt("a", "It shows that imagery, claim, scope and evidence must be checked together", "Correct. The visual separates the parts so the designer can test whether the full impression is supported.", true),
        opt("b", "It shows that a natural-looking package confirms environmental performance", "A leaf pattern creates an impression but does not verify materials or impacts."),
        opt("c", "It shows that an evidence card can replace a specific environmental measure", "Evidence needs an exact claim, scope and measure before it can support wording.")
      ]),
      quiz("m08-s02-q05", "application and evaluation", "A package poster says “zero-waste choice” beside leaf icons, but no measure or source is available. What is the strongest next step?", "m08-s02-example", "Decide how to prevent the whole message from implying an unverified achievement.", [
        opt("a", "Keep the words and remove one leaf so the impression is less strong", "The remaining wording still makes an unsupported zero-waste claim."),
        opt("b", "Remove the claim or turn it into a specific investigation question", "Correct. This keeps the communication honest until suitable scope, measure and evidence exist.", true),
        opt("c", "Replace the icons with a green border and leave the claim unchanged", "Changing the decoration does not supply evidence for the wording.")
      ])
    ],
    extendedResponse: {
      id: "m08-s02-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 90–110 words.",
      storageKey: "year7multimedia:evidence:m08-s02:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Audit a fictional environmental message that combines green imagery with a broad claim. Explain the impression it creates, define the claim's scope, name a measurable fact and suitable evidence, then write a narrower supported statement or an honest investigation question.",
      helpAnchor: "m08-s02-test",
      scaffold: [
        "Quote the exact claim and describe the imagery.",
        "Define which product, material or action the claim covers.",
        "Name a measure and a source that could verify it.",
        "Explain how the wording and imagery work together.",
        "Revise or withhold any unsupported achievement."
      ],
      starters: [
        "The combined message suggests…",
        "The claim's scope needs to be limited to…",
        "A suitable source would need to show…"
      ],
      qualityIndicators: [
        "The full environmental impression is analysed.",
        "Scope, measure and evidence are specific.",
        "The final wording does not claim more than the evidence."
      ]
    }
  },

  "m08-s03": {
    checks: [
      quiz("m08-s03-q04", "visual interpretation", "The same packaging motif appears on a supplier carton, service pack, delivery bag and sorting tray. What should the designer investigate if the material or printed design changes?", "m08-s03-system", "Follow the change through sourcing, service, delivery and end-of-use.", [
        opt("a", "Only whether the decoration still looks consistent across each package", "Visual consistency matters, but the connected material, handling and end-of-use effects also need investigation."),
        opt("b", "Whether the change guarantees better environmental and business outcomes", "A visual or material change cannot guarantee broad outcomes without specific evidence."),
        opt("c", "Connected effects on suppliers, service, delivery, end-of-use and stakeholders", "Correct. The photograph prompts a system check across the stages and people affected by the packaging decision.", true)
      ]),
      quiz("m08-s03-q05", "application and evaluation", "A campaign could sharply increase orders before the simulated business knows whether it can manage demand. What is the most responsible design response?", "m08-s03-responsibility", "Consider the claim, likely system effect and evidence needed before repeating the campaign.", [
        opt("a", "Flag the capacity risk, limit unsupported urgency and monitor actual demand evidence", "Correct. The designer responds within their role while treating the future pathway as a hypothesis.", true),
        opt("b", "Promise immediate service because stronger wording may increase engagement", "An unverified service promise could worsen pressure and mislead customers."),
        opt("c", "Treat operations as outside the design team's communication decision", "Framing and targeting can influence demand, so likely connected effects matter.")
      ])
    ],
    extendedResponse: {
      id: "m08-s03-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 90–110 words.",
      storageKey: "year7multimedia:evidence:m08-s03:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "A designer proposes changing the fictional packaging system because the new version looks ‘greener’, but no material or end-of-use evidence has been checked. Write a critique that identifies what the photograph can and cannot show, two stakeholder questions, one evidence request and a responsible communication decision before the new design is promoted.",
      helpAnchor: "m08-s03-responsibility",
      scaffold: [
        "Separate the visible packaging appearance from unverified performance.",
        "Ask one question for a supplier and one for a service or end-of-use stakeholder.",
        "Name the material or disposal evidence needed.",
        "Choose responsible wording or withhold the claim until it is supported."
      ],
      starters: [
        "The photograph can show… but it cannot prove…",
        "The supplier needs to clarify… while the end-of-use stakeholder needs…",
        "Before promotion, I would… because…"
      ],
      qualityIndicators: [
        "Appearance and performance evidence are clearly separated.",
        "Stakeholder questions and the evidence request are specific.",
        "The communication decision avoids an unsupported environmental impression."
      ]
    }
  },

  "m09-s01": {
    checks: [
      quiz("m09-s01-q04", "visual interpretation", "The site-map visual branches from Home to Products and Contact Us, with navigation connecting the pages. What does this arrangement communicate?", "m09-s01-structure", "Consider the purpose of separate pages and the pathway between them.", [
        opt("a", "Related content should be repeated across the three main pages", "Broad repetition would weaken page purpose and create unnecessary duplication."),
        opt("b", "Distinct page purposes are joined by predictable ways to move", "Correct. The structure gives content a home while navigation connects the user journey.", true),
        opt("c", "Contact information should be visible before privacy directions are supplied", "Real contact details remain controlled by teacher-approved privacy arrangements.")
      ]),
      quiz("m09-s01-q05", "application and evaluation", "During a finding test, most reviewers look under Products for a poster that is stored only on Contact Us. What is the strongest revision?", "m09-s01-example", "Use the reviewers' predicted destination and the purpose of each page.", [
        opt("a", "Rename Contact Us as Stuff so the page can hold mixed content", "A vague label would make destinations harder to predict."),
        opt("b", "Copy the complete poster to Home and leave Contact Us unchanged", "This duplicates the poster without placing it at the destination reviewers predicted."),
        opt("c", "Place the poster under Products and add a useful cross-link if needed", "Correct. This matches user expectation while controlling duplication.", true)
      ])
    ],
    extendedResponse: {
      id: "m09-s01-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 80–100 words.",
      storageKey: "year7multimedia:evidence:m09-s01:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Propose where six portfolio items belong across Home, Products and Contact Us. Justify one item that could fit in two places, explain a useful cross-link, and describe one phone-width navigation test and the privacy boundary for contact information.",
      helpAnchor: "m09-s01-example",
      scaffold: [
        "State the main purpose of each page.",
        "Place and justify six relevant content items.",
        "Resolve one uncertain placement without full duplication.",
        "Describe a finding task at phone width.",
        "Keep contact details within teacher direction."
      ],
      starters: [
        "Home should establish…",
        "I placed… under Products because…",
        "At phone width, I would ask a reviewer to…"
      ],
      qualityIndicators: [
        "Page labels and content placements are predictable.",
        "The cross-link supports finding without unnecessary duplication.",
        "Navigation testing and privacy limits are explicit."
      ]
    }
  },

  "m09-s02": {
    checks: [
      quiz("m09-s02-q04", "visual interpretation", "The portfolio visual shows the same identity, navigation and media hierarchy on a laptop and phone. What is the most useful conclusion?", "m09-s02-preparation", "Think about preparing media for different viewing contexts while preserving its role.", [
        opt("a", "The arrangement can adapt while important content and identity remain clear", "Correct. A fit-for-purpose display may change layout without losing hierarchy or recognition.", true),
        opt("b", "The phone version should retain the laptop's element sizes and order", "The smaller context needs an adapted arrangement rather than identical physical sizing."),
        opt("c", "A matching appearance indicates that embedded files share similar access", "Visual consistency does not show whether another viewer has permission to open embedded media.")
      ]),
      quiz("m09-s02-q05", "application and evaluation", "The site owner can play an embedded video, but an approved independent viewer receives an access request. What should the student record and do?", "m09-s02-example", "Keep the failed viewer test separate from permission changes that need authority.", [
        opt("a", "Record a pass because the media works in the owner's signed-in view", "The owner view can hide a sharing problem, so it is not sufficient evidence."),
        opt("b", "Record the failure, confirm the authorised setting and prepare a safe fallback", "Correct. This reports the evidence honestly without broadening access independently.", true),
        opt("c", "Publish the owner's edit link so the viewer can request access directly", "An edit link can expose account or editing access and is not a safe fallback.")
      ])
    ],
    extendedResponse: {
      id: "m09-s02-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 90–110 words.",
      storageKey: "year7multimedia:evidence:m09-s02:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Write a preflight for one portfolio image and one embedded video. Explain how each display copy is prepared, what accessible description or watch-for prompt it needs, how it will be checked at laptop and phone widths, and how an approved independent-viewer access failure will be handled.",
      helpAnchor: "m09-s02-example",
      scaffold: [
        "Identify each preserved original and prepared display version.",
        "Write meaningful alternative text or a video watch-for purpose.",
        "Check crop, hierarchy and clarity at two widths.",
        "Test the embed from an approved independent view.",
        "Record a permission-safe fallback response."
      ],
      starters: [
        "The preserved source file is…",
        "At phone width, the important content must…",
        "If the approved viewer cannot open the embed, I will…"
      ],
      qualityIndicators: [
        "Source integrity and display preparation are distinguished.",
        "Accessibility guidance describes meaningful content or purpose.",
        "The access response remains within teacher-approved settings."
      ]
    }
  },

  "m09-s03": {
    checks: [
      quiz("m09-s03-q04", "visual interpretation", "The publishing checkpoint shows preview, access choice, link test and submission as separate steps. Why does that sequence matter?", "m09-s03-states", "Ask what each step verifies that the previous step cannot establish.", [
        opt("a", "It indicates that a published site is suitable for a public audience", "Suitability and the permitted audience still depend on teacher direction and testing."),
        opt("b", "It shows that saving a link completes the teacher's collection process", "A locally saved link is only a draft record and is not automatically submitted."),
        opt("c", "It prevents an earlier success from standing in for later checks", "Correct. Preview, publication, access and submission require separate evidence.", true)
      ]),
      quiz("m09-s03-q05", "application and evaluation", "A site is previewed and its viewer link is saved, but an approved viewer gets an access request and no audience setting has been supplied. What is the honest status?", "m09-s03-example", "Report what has happened, what has not passed and which direction is still needed.", [
        opt("a", "Previewed and link recorded; access unconfirmed while teacher direction is awaited", "Correct. This separates the completed states from the unresolved access decision.", true),
        opt("b", "Published, public and submitted because a complete viewer link already exists", "A link does not prove viewer access, public availability or submission."),
        opt("c", "Not created because the approved viewer could not open the current version", "The site can exist even though its access setting remains unresolved.")
      ])
    ],
    extendedResponse: {
      id: "m09-s03-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 90–110 words.",
      storageKey: "year7multimedia:evidence:m09-s03:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Prepare a precise website handoff record after preview has passed but the approved-viewer access test has failed. Report preview, publication, link type, access and submission separately, explain the safe next action, and identify the teacher-controlled audience direction that remains unresolved.",
      helpAnchor: "m09-s03-example",
      scaffold: [
        "Give each state its own accurate status.",
        "Identify the link as a viewer link rather than an edit link.",
        "Describe the approved-viewer test evidence.",
        "Do not broaden access without teacher direction.",
        "State that local saving has not submitted the work."
      ],
      starters: [
        "Preview status:…",
        "Approved-viewer access is… because…",
        "Before submission, I still need…"
      ],
      qualityIndicators: [
        "The record separates all five states accurately.",
        "Privacy and permission boundaries are protected.",
        "The next action is specific and authorised."
      ]
    }
  },

  "m10-s01": {
    checks: [
      quiz("m10-s01-q04", "visual interpretation", "In the critique photograph, feedback tabs and a blank criteria card sit beside two fictional posters. Which comment would provide the most useful evidence?", "m10-s01-feedback", "Choose a comment tied to something visible, a criterion and a checkable next step.", [
        opt("a", "‘I just like the first poster more, so keep every part of it’", "Personal taste does not identify a visible issue or connect the response to a success criterion."),
        opt("b", "‘The heading loses contrast here; strengthen it, then repeat the finding test’", "Correct. The comment identifies visible evidence, connects it to readability and proposes a retest.", true),
        opt("c", "‘Use whichever poster receives the most votes from the class’", "A vote records preference, but it does not diagnose hierarchy or contrast against a criterion.")
      ]),
      quiz("m10-s01-q05", "application and evaluation", "Three reviewers like a poster's colours, but a finding task shows that the action button is repeatedly missed. Which judgement is strongest?", "m10-s01-criteria", "Connect each piece of evidence to the criterion it can actually test.", [
        opt("a", "The poster is successful because three positive comments outweigh one task result", "Preference counts do not cancel evidence that a required action is hard to find."),
        opt("b", "The colour system has failed because the action button was difficult to find", "The finding shows a hierarchy problem; it does not by itself prove the palette failed."),
        opt("c", "Colour appeal has support, but action hierarchy needs revision and another test", "Correct. The judgement separates the criteria and responds to the relevant evidence.", true)
      ])
    ],
    extendedResponse: {
      id: "m10-s01-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 90–110 words.",
      storageKey: "year7multimedia:evidence:m10-s01:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Evaluate one connected-brand output against two specific success criteria. For each criterion, report relevant design or reviewer evidence, judge it as met, partly met or not yet met, and propose a focused next action. End by explaining one limitation of the feedback context.",
      helpAnchor: "m10-s01-example",
      scaffold: [
        "Write two observable criteria from the brief or audience needs.",
        "Match each criterion with relevant evidence.",
        "Make a reasoned judgement rather than counting preferences.",
        "Set a focused revision or retest.",
        "Limit the conclusion to the feedback context."
      ],
      starters: [
        "For the criterion… the evidence shows…",
        "This criterion is partly met because…",
        "The feedback is limited by…"
      ],
      qualityIndicators: [
        "The criteria are specific and observable.",
        "Each judgement matches the evidence used.",
        "The response reports limitations without dismissing useful feedback."
      ]
    }
  },

  "m10-s02": {
    checks: [
      quiz("m10-s02-q04", "visual interpretation", "In the rationale photograph, layout proofs, a phone preview, comparison cards and a blank explanation sheet are arranged together. Why is this evidence useful?", "m10-s02-evidence", "Connect the visual choice, comparison evidence and place for written reasoning.", [
        opt("a", "It lets the designer connect a visual choice and comparison evidence to written reasoning", "Correct. The arrangement supports a traceable claim–evidence–reasoning explanation.", true),
        opt("b", "It proves one layout will work at every possible screen width", "One photographed preview cannot establish performance in every untested context."),
        opt("c", "It shows that the most popular-looking proof must be selected", "A rationale judges relevant evidence against purpose and audience, not popularity alone.")
      ]),
      quiz("m10-s02-q05", "application and evaluation", "A student writes, “I used a gradient because it looks cool,” but testing shows the headline loses contrast over one end. How should the rationale improve?", "m10-s02-evidence", "Build a claim, cite the test result and explain the resulting design decision.", [
        opt("a", "Keep the sentence and add a longer list of gradient-tool steps", "More procedure would not explain the choice or address the contrast evidence."),
        opt("b", "Explain the gradient's intended role, the contrast finding and the focused revision", "Correct. This connects the choice to evidence, reasoning and a managed trade-off.", true),
        opt("c", "Remove the test result so the original colour preference sounds stronger", "Hiding mixed evidence weakens the honesty and usefulness of the rationale.")
      ])
    ],
    extendedResponse: {
      id: "m10-s02-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 90–110 words.",
      storageKey: "year7multimedia:evidence:m10-s02:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "A student writes, ‘I used orange and a compact logo because they look better.’ Critique this weak rationale, then rewrite it as one claim–evidence–reasoning paragraph using the phone-width contrast and overflow evidence. State one conclusion the single test cannot support.",
      helpAnchor: "m10-s02-example",
      scaffold: [
        "Identify why ‘looks better’ is unsupported personal preference.",
        "Choose one decision about contrast or the compact logo variant.",
        "Cite the visible phone-width test evidence.",
        "Explain why the evidence supports the focused revision.",
        "Limit the conclusion to the width and conditions actually tested."
      ],
      starters: [
        "The original rationale is weak because…",
        "At the tested phone width, the evidence showed…",
        "This supports… because… However, it does not prove…"
      ],
      qualityIndicators: [
        "The critique distinguishes evidence from preference.",
        "The rewritten paragraph follows a claim-evidence-reasoning chain.",
        "The conclusion stays within the single test's limits."
      ]
    }
  },

  "m10-s03": {
    checks: [
      quiz("m10-s03-q04", "visual interpretation", "The evaluation structure moves from criterion to evidence, judgement and next iteration. What is the key relationship?", "m10-s03-evaluation", "Consider how one stage should provide the reason for the next.", [
        opt("a", "A criterion can be retired once positive evidence is collected", "Evidence is judged against the criterion; one positive result does not retire the check."),
        opt("b", "A judgement summarises the finished appearance without planning another check", "Evaluation should lead to specific improvements and further evidence, not description alone."),
        opt("c", "Evidence supports a judgement that directs a testable improvement", "Correct. The sequence closes one design cycle and gives the next iteration a reason.", true)
      ]),
      quiz("m10-s03-q05", "application and evaluation", "Phone users cannot find the Products link, while reviewers give mixed preferences about the poster colour. Which improvement should be prioritised first?", "m10-s03-improvement", "Compare the likely effect and strength of the evidence for each issue.", [
        opt("a", "Fix and retest the navigation pathway before considering the colour preference", "Correct. Repeated task failure affects access to content and provides stronger action evidence.", true),
        opt("b", "Change the poster colour first because preference may affect engagement", "Mixed preference does not establish a broad problem, while the navigation failure is observable."),
        opt("c", "Add decorative motion to both outputs and postpone the recorded issues", "Decoration does not address either the finding failure or the colour evidence.")
      ])
    ],
    extendedResponse: {
      id: "m10-s03-extended-01",
      label: "Formative learning evidence",
      wordGuide: "Write 100–110 words.",
      storageKey: "year7multimedia:evidence:m10-s03:extended-01",
      savedMessage: "Saved on this device. This is formative learning evidence, not a submission.",
      evidenceDestination: "Printable course formative-evidence summary",
      prompt: "Write an evidence-led evaluation of the connected brand. Judge one strength and two limitations against clear criteria, prioritise the most important next iteration, and explain the exact change, expected effect and retest. Include one unresolved access or evidence limit without inventing a result.",
      helpAnchor: "m10-s03-example",
      scaffold: [
        "Judge the strength with specific evidence.",
        "Name two limitations and the criteria they affect.",
        "Prioritise by likely effect and evidence strength.",
        "Describe the change and a repeatable retest.",
        "Preserve the earlier version and state one unresolved limit."
      ],
      starters: [
        "A demonstrated strength is… because…",
        "The first priority is… since evidence shows…",
        "After changing… I will retest by…"
      ],
      qualityIndicators: [
        "Judgements are supported by real project evidence.",
        "The priority is reasoned rather than preference-led.",
        "The next iteration is specific, testable and honestly limited."
      ]
    }
  }
  };

  const sections = new Map(
    content.modules.flatMap(module => module.sections || []).map(section => [section.id, section])
  );
  const missing = Object.keys(additions).filter(sectionId => !sections.has(sectionId));
  if (missing.length) {
    console.error("Year 7 Multimedia evidence extension could not find sections:", missing.join(", "));
    return;
  }

  Object.entries(additions).forEach(([sectionId, addition]) => {
    const section = sections.get(sectionId);
    const existingIds = new Set((section.checks || []).map(check => check.id));
    section.checks = [
      ...(section.checks || []),
      ...(addition.checks || []).filter(check => !existingIds.has(check.id))
    ];

    const response = addition.extendedResponse;
    if (response) {
      const normalisedGuide = String(response.wordGuide || "80–110 words")
        .replace(/^Write\s+/i, "")
        .replace(/\.$/, "");
      const extended = {
        ...response,
        wordGuide: normalisedGuide,
        kind: "extended response",
        storageKey: `${PREFIX}response:${response.id}`
      };
      const responseIds = new Set((section.extendedResponses || []).map(item => item.id));
      section.extendedResponses = responseIds.has(extended.id)
        ? section.extendedResponses
        : [...(section.extendedResponses || []), extended];
    }

    if (section.capstone && !section.capstone.wordGuide) {
      const statedGuide = String(section.capstone.prompt || "").match(/(\d+[–-]\d+\s+words?)/i)?.[1];
      section.capstone.wordGuide = statedGuide?.replace(/\bword$/i, "words") || "100–160 words";
    }
  });

  content.version = "1.1.0";
  content.knowledgeEvidenceVersion = "1.1";
  content.integration = {
    ...(content.integration || {}),
    evidencePattern: "Five multiple-choice checks, one extended response and one retained capstone per theory section",
    legacyStoragePreserved: true,
    extendedResponseKeyPattern: `${PREFIX}response:<section>-extended-01`,
    savedAtSidecarPattern: "<record-key>:saved-at"
  };
})();
