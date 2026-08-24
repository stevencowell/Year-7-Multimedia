(() => {
  "use strict";

  const stages = [
    {
      id: "brief-audience",
      number: 1,
      title: "Brand brief and audience",
      action: "Define your original fast-food business and the people it is designed for.",
      why: "A clear brief gives every later design decision a purpose.",
      evidence: "A concise business name, slogan, product direction and target-audience explanation.",
      prompt: "What should your audience understand, feel or do when they see this brand?",
      fields: [
        { id: "brief-brand-name", label: "Business name", type: "text", required: true, placeholder: "Your original business name" },
        { id: "brief-slogan", label: "Slogan", type: "text", required: true, placeholder: "A short original slogan" },
        { id: "brief-products", label: "Product direction", type: "textarea", rows: 3, required: true, placeholder: "Describe the kinds of products your business will offer." },
        { id: "brief-audience", label: "Target audience and their needs", type: "textarea", rows: 5, required: true, placeholder: "Who are you designing for, and what matters to them?" },
        { id: "brief-originality", label: "How I kept the idea original", type: "textarea", rows: 4, required: false, placeholder: "Explain what you selected, changed or developed yourself, including any responsible use of AI for ideas." }
      ],
      requireImage: false,
      support: ["My audience is...", "They need the brand to...", "I kept the idea original by..."],
      modules: [{ href: "modules/module-01.html", label: "Revisit Module 1" }],
      sources: [
        { title: "Business Planning Brainstorm", driveId: "13tXPa3Zq024LQK5sinXcbaukdzPfJEoMvm3wfNOmoTg", sha256: "DC7E5F0928A1E351F1B0860986A8AFF4C5BF5D3A5E6445EA628039FCE6AD533C", purpose: "Business name, slogan, products, colours, audience and responsible-AI boundary" }
      ],
      activityRelationship: "Planning practice may be revised into this selected brief. Quiz answers are not copied into the folio.",
      assessmentBoundary: "Project evidence only. Follow any separate formal task notice your teacher gives you."
    },
    {
      id: "visual-direction",
      number: 2,
      title: "Visual direction and success criteria",
      action: "Set a visual direction and write criteria you can use to judge the brand.",
      why: "Colours, type and layout work better when they are chosen for the audience, not just personal taste.",
      evidence: "A mood board or visual-direction image, a caption and a small set of observable success criteria.",
      prompt: "How will your visual choices make the brand suitable and easy to recognise?",
      fields: [
        { id: "visual-palette", label: "Colour palette and intended meaning", type: "textarea", rows: 4, required: true, placeholder: "Name the main colours and explain what they communicate." },
        { id: "visual-typography", label: "Typography and tone", type: "textarea", rows: 4, required: true, placeholder: "Describe the type style and the tone it creates." },
        { id: "visual-criteria", label: "Success criteria", type: "textarea", rows: 5, required: true, placeholder: "Write 3-5 checks that can be observed in the finished brand." },
        { id: "visual-caption", label: "Image caption - what does this evidence prove?", type: "textarea", rows: 3, required: true, placeholder: "Explain the useful ideas shown in your mood board or visual-direction image." }
      ],
      requireImage: true,
      imageLabel: "Add your mood board or visual-direction image",
      support: ["The palette suits the audience because...", "The typeface creates a... tone.", "A successful design will..."],
      modules: [{ href: "modules/module-02.html", label: "Revisit Module 2" }],
      sources: [
        { title: "Being a Graphic Designer", driveId: "18vZsOCmAIfvwDfujuUrDJzOfP6zeeSUcPgX8JlWpNr4", sha256: "0DB87C1DAFF8B95F58E5C017A737E79ABFCD852A41879912B662246FE249288F", purpose: "Typography, palette, hierarchy, mood boards and design problem-solving" }
      ],
      activityRelationship: "The visual-language activity can generate a mood board; keep only the selected direction and explanation here.",
      assessmentBoundary: "Selected design-process evidence only. It is not automatically marked or submitted."
    },
    {
      id: "logo-system",
      number: 3,
      title: "Logo system",
      action: "Present your original logo and explain why it works for the brand.",
      why: "A strong logo needs to remain recognisable at different sizes and in different contexts.",
      evidence: "A logo image, caption, design rationale and a recorded scale or contrast check.",
      prompt: "Which visual decision does the most work in making your logo recognisable?",
      fields: [
        { id: "logo-rationale", label: "Logo rationale", type: "textarea", rows: 5, required: true, placeholder: "Explain the symbol, colour and typography choices." },
        { id: "logo-check", label: "Scale and contrast check", type: "textarea", rows: 4, required: true, placeholder: "What happened when you viewed it small, large or on a different background?" },
        { id: "logo-change", label: "Change made after checking", type: "textarea", rows: 4, required: false, placeholder: "Describe one change and why it improved the logo." },
        { id: "logo-caption", label: "Image caption - what does this evidence prove?", type: "textarea", rows: 3, required: true, placeholder: "State what this logo version demonstrates." }
      ],
      requireImage: true,
      imageLabel: "Add your final logo or a useful logo comparison",
      support: ["The logo is recognisable because...", "At a small size I noticed...", "I improved the logo by..."],
      modules: [{ href: "modules/module-03.html", label: "Revisit Module 3" }],
      sources: [
        { title: "Creating a Logo in Canva Demo Video", driveId: "1QwBddmlZ8KtJ_e1HzQFyY5EM-IpedPRg", sha256: "4BDD6997A9A39E9D94A9CFEDC01467567BE473304D9CAE85400570A7719B5BE8", purpose: "Teacher-demonstrated logo production workflow" }
      ],
      activityRelationship: "Logo ideation and critique can be practised elsewhere; this card keeps the selected version and its rationale.",
      assessmentBoundary: "Student-created evidence only. The software demonstration is support, not assessment criteria."
    },
    {
      id: "menu-ethics",
      number: 4,
      title: "Menu information and honest marketing",
      action: "Organise menu information and explain one honest, responsible marketing choice.",
      why: "Customers should be able to scan information quickly without being misled.",
      evidence: "A menu image, caption, hierarchy explanation and a short ethical-marketing decision.",
      prompt: "How did you make important information easy to find and claims easy to trust?",
      fields: [
        { id: "menu-hierarchy", label: "Information hierarchy", type: "textarea", rows: 5, required: true, placeholder: "Explain how headings, groups, spacing or alignment help people scan the menu." },
        { id: "menu-honesty", label: "Honest marketing decision", type: "textarea", rows: 5, required: true, placeholder: "Explain one claim, image or choice you checked so it would not mislead the audience." },
        { id: "menu-improvement", label: "One improvement after testing", type: "textarea", rows: 4, required: false, placeholder: "What did a reader find difficult, and what did you change?" },
        { id: "menu-caption", label: "Image caption - what does this evidence prove?", type: "textarea", rows: 3, required: true, placeholder: "Point to the hierarchy or honest-information choice visible in the image." }
      ],
      requireImage: true,
      imageLabel: "Add your menu or a close view of its information hierarchy",
      support: ["Readers see... first because...", "I grouped... together so...", "I avoided a misleading claim by..."],
      modules: [
        { href: "modules/module-04.html", label: "Revisit Module 4" },
        { href: "modules/module-08.html", label: "Revisit Module 8" }
      ],
      sources: [
        { title: "Canteen Menu WWHS.jpg", driveId: "13ive02RO-0Ejmm1AEXgo69uUk8wGJ822", sha256: "2348BBD07604F902E9D108A54410AB6482B47D64A921FDD7732993F31172F4D1", purpose: "Information hierarchy and scanning exemplar only; not current price authority" },
        { title: "Investigation: The McDonald's Management & Marketing Simulation", driveId: "1yFGIGIEeoFJ2UVKpIlY1TUt7DAQdIWWJvdw2T69NqSs", sha256: "8B4F519C7833B8C0378EC313CCF9F2ADCFEF82176E51BC700F7AD977C69D8970", purpose: "Marketing, greenwashing, ripple effects and designer responsibility" }
      ],
      activityRelationship: "Menu analysis and the marketing investigation inform this evidence; full activity responses remain in their own learning route.",
      assessmentBoundary: "The historical canteen image is an information-design example, not authority for current products or prices."
    },
    {
      id: "poster-context",
      number: 5,
      title: "Promotional poster in context",
      action: "Present your poster in context and explain how it directs attention.",
      why: "A design can look different once it is placed where an audience will actually see it.",
      evidence: "A poster or context mock-up, caption, hierarchy explanation and one context-driven change.",
      prompt: "What should the audience notice first, second and third, and how did you make that happen?",
      fields: [
        { id: "poster-hierarchy", label: "First, second and third viewing order", type: "textarea", rows: 5, required: true, placeholder: "Describe the intended viewing order and the visual choices that create it." },
        { id: "poster-context-check", label: "Context check", type: "textarea", rows: 5, required: true, placeholder: "Explain what worked or became difficult to read in the mock-up context." },
        { id: "poster-change", label: "Change made after the context check", type: "textarea", rows: 4, required: false, placeholder: "Describe one improvement and why it was needed." },
        { id: "poster-caption", label: "Image caption - what does this evidence prove?", type: "textarea", rows: 3, required: true, placeholder: "Explain what this poster or mock-up demonstrates." }
      ],
      requireImage: true,
      imageLabel: "Add your poster or a context mock-up",
      support: ["The first thing viewers notice is... because...", "In context, I found...", "I changed... so that..."],
      modules: [{ href: "modules/module-05.html", label: "Revisit Module 5" }],
      sources: [
        { title: "Drive poster and three mock-ups", driveId: "15TN4IA_A8hVyi8y6pJm1FQLt8sgVC6lF", sha256: "2E850274FFE76E0718BD67467502A20702BF0CBE47330F8D147C479A1EDAA13B", purpose: "Poster composition, hierarchy and context-testing exemplars; companion IDs are recorded in the Drive source manifest" },
        { title: "Create a poster in Canva", driveId: "1xN8xO5IlId6A7KnY-YQQjXK3_qygi-f3", sha256: "EE27D90F469472143E3EE1951FE408099FDDD871689C7EE25155F620830D9FFE", purpose: "Teacher-demonstrated poster production workflow" }
      ],
      activityRelationship: "Poster construction and critique can be practised in Module 5; keep only the selected evidence and decision here.",
      assessmentBoundary: "The Drive poster is an exemplar. Students must submit their own original work."
    },
    {
      id: "uniform-application",
      number: 6,
      title: "Staff uniform brand application",
      action: "Apply the visual identity to a staff-uniform concept and justify the choices.",
      why: "A brand system should remain consistent and usable beyond a single logo or poster.",
      evidence: "A uniform concept image, caption and explanation of consistency, suitability and accessibility.",
      prompt: "How does the uniform belong to the same brand while still working as clothing for staff?",
      fields: [
        { id: "uniform-consistency", label: "Brand consistency", type: "textarea", rows: 5, required: true, placeholder: "Explain how colour, logo placement and type connect the uniform to the brand." },
        { id: "uniform-suitability", label: "Suitability and accessibility", type: "textarea", rows: 5, required: true, placeholder: "Explain a readability, contrast, comfort or role-suitability decision." },
        { id: "uniform-change", label: "One checked improvement", type: "textarea", rows: 4, required: false, placeholder: "What did you change after comparing the uniform with the rest of the identity?" },
        { id: "uniform-caption", label: "Image caption - what does this evidence prove?", type: "textarea", rows: 3, required: true, placeholder: "Explain the brand application visible in this uniform concept." }
      ],
      requireImage: true,
      imageLabel: "Add your staff-uniform concept",
      support: ["This belongs to the brand because...", "The placement works because...", "I checked contrast by..."],
      modules: [{ href: "modules/module-06.html", label: "Revisit Module 6" }],
      sources: [
        { title: "Creating a Staff Uniform in Canva Demo", driveId: "1hIuwMunPHaPjdVAjPsKlIWJEm9vYMkxl", sha256: "8D1CDA437C03E5AF48E8AE7C2060C9FC8832AADC1DAAE120F01CF927B8FBF7A6", purpose: "Teacher-demonstrated brand application workflow" }
      ],
      activityRelationship: "The application activity can produce alternatives; this card keeps the chosen concept and rationale.",
      assessmentBoundary: "The folio records a design decision, not teacher-observed practical competence."
    },
    {
      id: "motion-advertisement",
      number: 7,
      title: "Motion advertisement",
      action: "Record how your motion advertisement changes over time and how you checked the export.",
      why: "Motion design depends on clear states, timing and a working file, not just one attractive frame.",
      evidence: "A still image or storyboard frame, caption, motion explanation, MP4 filename and quality check.",
      prompt: "How does the movement guide attention without making the message harder to understand?",
      fields: [
        { id: "motion-plan", label: "States, transition and timing", type: "textarea", rows: 5, required: true, placeholder: "Describe what changes, the transition used and why the timing suits the message." },
        { id: "motion-file", label: "Original MP4 filename", type: "text", required: true, placeholder: "Example: brand-product-ad-v2.mp4" },
        { id: "motion-quality", label: "Export and playback check", type: "textarea", rows: 5, required: true, placeholder: "Record where you played the MP4, what worked and what you fixed." },
        { id: "motion-caption", label: "Image caption - what does this evidence prove?", type: "textarea", rows: 3, required: true, placeholder: "Explain what this still frame or storyboard view shows." }
      ],
      requireImage: true,
      imageLabel: "Add one useful still frame or storyboard image",
      imageBoundary: "This folio accepts one still image, not the MP4. Your video remains in its original file or school-approved location and is not included in folio backup, submission export or print.",
      support: ["The first state shows...", "The Match and Move transition helps because...", "I checked the exported MP4 by..."],
      modules: [{ href: "modules/module-07.html", label: "Revisit Module 7" }],
      sources: [
        { title: "Match and Move", driveId: "1yRWtqn_jBI_IyJRJ8yyJ3KL1Fp1L8vgt", sha256: "5662A70FE44811A36E2BDAE712E5869C9A6F065CC82A8CB9E7D2EA92C2C01AA4", purpose: "Teacher-demonstrated portrait motion-ad workflow and MP4 export" },
        { title: "Match and Move Advertising", driveId: "1dk-pn0y46VZLTET4dY9cVYRTcQumJgd_", sha256: "3386649CD49C1D3213BCD1DDE51D33C46CAE1EB830D66187FD9FD310DC101507", purpose: "Supplied 0:16 source clip; opens a blank A4 Canva document and is retained only as an evidence-quality check (REWORK)" }
      ],
      activityRelationship: "Storyboard and motion practice can be revised before this evidence is selected. Quiz or video-watch records remain separate.",
      assessmentBoundary: "A still image and filename do not prove the MP4 was submitted. Follow the teacher's approved video-submission direction."
    },
    {
      id: "web-evaluation",
      number: 8,
      title: "Web portfolio and evaluation",
      action: "Record the website evidence and evaluate how well the connected brand meets the brief.",
      why: "The final website should bring the brand together and show what you would improve next.",
      evidence: "A site link or teacher-viewable location, final screenshot, page/access check, feedback response and evaluation.",
      prompt: "Which evidence best shows that the website and brand solve the original design challenge?",
      fields: [
        { id: "web-link", label: "Website link or teacher-approved location", type: "url", required: true, placeholder: "https://sites.google.com/..." },
        { id: "web-check", label: "Pages, media and access check", type: "textarea", rows: 5, required: true, placeholder: "Record how you checked Home, Products and Contact Us, the media, links and approved viewing access." },
        { id: "web-feedback", label: "Useful feedback and response", type: "textarea", rows: 5, required: true, placeholder: "State the feedback you used and what you changed or chose not to change." },
        { id: "web-evaluation", label: "Evaluation against the brief and criteria", type: "textarea", rows: 7, required: true, placeholder: "Use evidence to explain what worked, what did not and one realistic next improvement." },
        { id: "web-caption", label: "Image caption - what does this evidence prove?", type: "textarea", rows: 3, required: true, placeholder: "Explain what the final website screenshot demonstrates." }
      ],
      requireImage: true,
      imageLabel: "Add a privacy-safe final website screenshot",
      imageBoundary: "Before importing a screenshot, crop out profile photos, names, email addresses, account menus, comments and sharing details.",
      support: ["The strongest evidence is... because...", "Feedback led me to...", "If I had another lesson, I would..."],
      modules: [
        { href: "modules/module-09.html", label: "Revisit Module 9" },
        { href: "modules/module-10.html", label: "Revisit Module 10" }
      ],
      sources: [
        { title: "Google Sites Demonstration", driveId: "1PV_O58qVIZ7AtoJrjfTLl9R_xML1JcqP", sha256: "F1D1A7F44D03CA7E055D6A1FAC31D9291DE10B75C0ABEF525D35DFD5386840FC", purpose: "Home, Products and Contact Us structure, media placement, preview, publishing and link checking" },
        { title: "Website Link", driveId: "1M_Iqw3xC-FdAXi5FYyQ0X9on4HE6_i2Cq4kiu1DgXjc", sha256: "C750AB8863AA682916360BC94F44B48FA5F6399EC86384BD4166BC83043E4E49", purpose: "Final website-link evidence prompt" },
        { title: "Fast Food Futures Digital Branding Unit", driveId: "1KqrXZtWsX6l_mklGmTcgb6LxvteCa_U8-FI53gwnyMU", sha256: "36792E836C11B0431EC571AB22245A0B4A57D844807AC055D6FBB0D9DD258BCE", purpose: "Evaluation-question structure only; private responses are excluded" }
      ],
      activityRelationship: "Website production and feedback activities support this final synthesis; only the selected site evidence and evaluation belong here.",
      assessmentBoundary: "A saved link is preparation, not proof of access or formal submission. Use the sharing setting and hand-in route your teacher provides."
    }
  ];

  window.YEAR7_MULTIMEDIA_FOLIO = Object.freeze({
    courseId: "year7multimedia",
    courseTitle: "Year 7 Technology - Multimedia: Fast Food Futures",
    schemaVersion: "1.0.0",
    recordKey: "year7multimedia:folio:v1:state",
    legacyKeys: ["year7multimedia:folio", "year7multimedia:folio:v0:state"],
    backupFormat: "year7multimedia-folio-backup",
    submissionFormat: "year7multimedia-folio-submission",
    database: Object.freeze({ name: "year7multimedia-folio", version: 1, store: "images" }),
    allowedImageTypes: Object.freeze(["image/jpeg", "image/png", "image/webp"]),
    maxImageBytes: 3 * 1024 * 1024,
    stages: Object.freeze(stages)
  });
})();
