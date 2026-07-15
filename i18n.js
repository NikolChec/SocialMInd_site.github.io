const STORAGE_KEY = "socialmind_lang";

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_product: "Product",
    nav_impact: "Impact",
    nav_team: "Team",
    nav_contact: "Contact",

    hero_title: "Beating the fear, Bringing friends near.",
    hero_p1:
      "A safe, immersive way for teens to practice everyday social situations and build confidence-guided by real-time AI characters in VR.",
    hero_p2:
      "We help students overcome social anxiety step by step, in a supportive virtual environment that adapts to their needs.",
    btn_learn_more: "Learn More",
    btn_see_how: "See How It Works",

    helps_title: "What SocialMind Helps With",
    helps_card1_title: "Social Anxiety",
    helps_card1_text:
      "Helping students who struggle with speaking in class or joining groups.",
    helps_card2_title: "Real Practice, No Judgment",
    helps_card2_text:
      "AI-powered characters allow safe, repeatable practice without pressure.",
    helps_card3_title: "Stronger Social-Emotional Skills",
    helps_card3_text:
      "Building confidence, communication, and emotional self-awareness.",

    why_title: "Why Social Skills Matter",
    why_text:
      "Many students avoid raising their hand or speaking up-not because they don't care, but because social situations feel overwhelming. SocialMind turns avoided moments into opportunities for growth.",

    audience_title: "Who It's For",
    audience_card1_title: "Students",
    audience_card1_text:
      "A safe way to practice situations that feel intimidating in real life.",
    audience_card2_title: "Educators & Counselors",
    audience_card2_text:
      "A modern SEL tool that boosts support capacity in schools.",
    audience_card3_title: "Partners & Innovators",
    audience_card3_text:
      "For schools and organizations exploring meaningful mental-health innovation.",

    highlights_title: "Highlights",
    highlights_1: "AI-powered interactive characters",
    highlights_2: "Short VR scenarios based on real school life",
    highlights_3: "Personal goals after each session",
    highlights_4: "Designed with counselors & advisors",
    highlights_5: "Built by students with a mission",

    teaser_text: "Want to understand the story behind SocialMind?",
    teaser_link: "Explore our mission ->",

    about_title: "About SocialMind",
    about_intro:
      "SocialMind is a youth-led educational initiative designed to help teens overcome social anxiety and develop real-world social confidence through immersive VR practice and AI-driven interactions.",
    problem_title: "The Problem",
    problem_p1:
      "Many teens experience social anxiety. They fear speaking in class, joining conversations, or being judged by peers. Over time, avoidance becomes a habit - and students who look \"fine\" from the outside often struggle silently.",
    problem_p2:
      "Schools want to help, but support systems are overloaded. Counselors and psychologists must prioritize urgent cases, leaving many students without consistent guidance or safe practice opportunities.",
    solution_title: "Our Solution",
    solution_text:
      "SocialMind transforms avoided social moments into safe, repeatable practice. Students enter realistic school-based scenarios in VR and interact with AI characters that respond in real time. They can rehearse challenging situations at their own pace, without fear of judgment.",
    why_vr_ai_title: "Why VR and AI?",
    why_vr_card1_title: "VR Creates Real Feeling - Without Real Risk",
    why_vr_card1_text:
      "Virtual reality makes practice feel real enough to build skills, while staying emotionally safe and controlled.",
    why_vr_card2_title: "AI Characters Make Practice Human",
    why_vr_card2_text:
      "Instead of scripted dialogues, AI characters react naturally, allowing students to experience true conversation flow.",
    vision_title: "Our Vision",
    vision_p1:
      "We believe quality education must include emotional and social growth, not only academic success. Our vision is a school environment where every student feels safe to participate, connect, and grow socially, emotionally, and academically.",
    vision_p2:
      "SocialMind aims to become a practical, modern tool that schools can use to support teens, reduce silent suffering, and strengthen belonging.",
    values_title: "Our Values",
    values_1: "Emotional safety before performance",
    values_2: "Practice over pressure",
    values_3: "Innovation with human sensitivity",
    values_4: "Collaboration with educational and clinical advisors",
    values_5: "Youth leadership and real-world impact",

    product_title: "How SocialMind Works",
    product_intro:
      "SocialMind turns avoided social moments into guided, repeatable VR practice. Each session blends immersive scenes with real-time AI interactions designed to help teens build confidence safely and gradually.",
    step1_title: "Step 1 - Choose a Social Scenario",
    step1_text:
      "Students start by selecting a real-life school situation that usually feels stressful. Examples include:",
    step1_1: "Introducing themselves to a group",
    step1_2: "Joining a conversation at lunch",
    step1_3: "Asking a question in class",
    step1_4:
      "Talking to a supportive adult figure (like our virtual counselor \"Alon\")",
    step2_title: "Step 2 - Enter a VR Scene",
    step2_text:
      "With a VR headset, students step into a realistic school-based environment: a classroom, hallway, counselor's office, or group of peers. The visuals, distance, eye contact, and tone create an immersive, emotionally engaging experience.",
    step3_title: "Step 3 - Interact with AI Characters",
    step3_text:
      "Students talk naturally while AI-powered characters respond in real time. No scripts. No memorizing lines. Characters adjust their tone, pace, and reactions based on the student's responses.",
    step3_card1_title: "Real Conversation Flow",
    step3_card1_text:
      "Instead of pre-recorded options, each interaction feels unique, making practice feel authentic and relevant.",
    step3_card2_title: "Emotionally Safe Practice",
    step3_card2_text:
      "Students can retry as many times as they need - without fear of judgment.",
    step4_title: "Step 4 - Reflection & Micro-Goals",
    step4_text:
      "After each session, a short reflection helps students recognize progress. They receive a small, achievable \"micro-goal\" for next time - such as:",
    step4_1: '"Hold eye contact for one extra second."',
    step4_2: '"Say your name with a clear voice."',
    step4_3: '"Ask one simple question."',
    step4_end:
      "These tiny steps reduce fear and gently build real-world courage.",

    impact_title: "Impact & Progress",
    impact_intro:
      "SocialMind is not just an idea - it is a growing initiative built by students, tested through real challenges, and guided by a mission to change how schools support teens with social anxiety.",
    achievements_title: "Competitions & Milestones",
    ach1_title: "StartCup AI (Semifinalists)",
    ach1_text:
      "Advanced through early stages with our VR + AI concept, product-market fit work, and investor materials.",
    ach2_title: "SAGE World Cup",
    ach2_text:
      "Presented SocialMind internationally as a mission-driven startup for youth mental health and social-emotional learning.",
    ach3_title: "International Startup Competition - Georgia",
    ach3_text:
      "Represented our school and country with SocialMind, refining the product vision and impact story.",
    school_talks_title: "Raising Awareness in Schools",
    school_talks_text:
      "During development, we also led talks in our school about social anxiety and teen mental health. These sessions helped students and educators understand silent struggles, reduce stigma, and build a more supportive environment.",
    sdg_title: "Aligned with the UN Sustainable Development Goals",
    sdg_1: "SDG 3: Good Health & Well-Being",
    sdg_2: "SDG 4: Quality Education",
    sdg_3: "SDG 10: Reduced Inequalities",
    sdg_text:
      "SocialMind supports teen well-being, strengthens emotional-social learning in schools, and helps students who are often overlooked due to quiet or avoidant behavior.",
    next_steps_title: "What's Next",
    next_steps_text:
      "We are currently building a full MVP that will allow schools to run structured VR sessions and track student progress safely.",
    next_1: "Complete MVP development in VR + AI",
    next_2: "Run pilot programs in partner schools",
    next_3: "Expand scenarios for different social challenges",
    next_4: "Build long-term partnerships with educational systems",

    team_title: "Meet the Team",
    team_intro:
      "SocialMind is built by a focused student team combining advanced technology, product thinking, and a mission to improve teen social confidence.",
    core_team_title: "Core Team",
    nikol_role: "CEO & CTO",
    nikol_bio: "Leads strategy and the technical development of SocialMind.",
    team_email_label: "Email:",
    team_phone_label: "Phone:",
    team_linkedin: "LinkedIn ->",
    arthur_role: "Co-CTO & Marketing Manager",
    arthur_bio: "Supports engineering and leads marketing and outreach.",

    contact_title: "Contact Us",
    contact_intro:
      "Whether you're a school, educator, partner, or organization interested in learning more about SocialMind, we'd love to hear from you.",
    get_in_touch_title: "Get in Touch",
    contact_email: "Email: socialmind2025@gmail.com",
    contact_instagram: "Instagram: Coming Soon",
    contact_location: "Location: Israel",
    contact_footer:
      "For collaborations, school pilots, or general questions - feel free to reach out.",

    // ── Homepage redesign keys ──────────────────────────────────────────
    nav_schools: "For Schools",
    nav_research: "Research",
    nav_privacy: "Privacy",
    nav_implementation: "Implementation",
    nav_company: "About",
    nav_request_demo: "Request a Demo",

    hero_title_line1: "Practice social skills",
    hero_title_join: " with ",
    hero_title_line2: "confidence.",
    hero_lead: "Guided AI conversations help students practice real school moments in a safe, supportive space—then reflect and grow.",
    hero_cta_primary: "Request a Demo",
    hero_cta_secondary: "Explore the Platform",
    hero_trust_line: "Built for schools. Privacy first. Human judgment always central.",
    trust_item_1: "Youth-led initiative",
    trust_item_2: "Selected innovation programs",
    trust_item_3: "Student dignity by design",
    trust_item_4: "English & Hebrew experience",
    trust_item_5: "Responsible AI development",
    journey_eyebrow: "Student practice journey",
    journey_title: "Students practice real moments—again and again.",
    journey_intro: "Guided conversations in realistic school situations.",
    journey_card1_kicker: "Practice moment",
    journey_card1_title: "Starting a Conversation",
    journey_card1_text: "Students practice opening a conversation, staying engaged, and building confidence.",
    journey_card2_kicker: "Practice moment",
    journey_card2_title: "Joining the Group",
    journey_card2_text: "Students practice joining a group, introducing themselves, and participating with ease.",
    schools_eyebrow: "Built for schools",
    schools_title: "Built for schools. Informed by educator conversations.",
    schools_intro: "SocialMind supports student practice while keeping human educator judgment central.",
    schools_point1: "Supports students as they build real social confidence",
    schools_point2: "Non-diagnostic and never a replacement for professionals",
    schools_point3: "English & Hebrew experience",
    schools_point4: "Collaborative approach to school implementation",
    schools_cta: "Explore SocialMind for Schools",
    school_flow_1: "Student Practice",
    school_flow_2: "AI Feedback",
    school_flow_3: "Reflection",
    school_flow_4: "Educator Support",
    demo_eyebrow: "Implementation path",
    demo_title: "From demo to pilot—together.",
    demo_intro: "A clear, collaborative process for every school.",
    demo_step1: "Request a Demo",
    demo_step2: "Introductory Meeting",
    demo_step3: "Product Walkthrough",
    demo_step4: "School Needs Discussion",
    demo_step5: "Mutual Fit",
    demo_step6: "Possible Pilot Proposal",
    demo_note: "A demo request begins a conversation. It does not commit your school to a pilot.",
    demo_cta: "Request a Demo",
    faq_eyebrow: "FAQ",
    faq_title: "Questions schools ask most",
    faq_q1: "How does SocialMind work?",
    faq_a1: "Students practice school-based social moments through guided AI conversations, then receive reflection prompts and small next steps.",
    faq_q2: "Is student data safe?",
    faq_a2: "SocialMind is designed with privacy-aware school use in mind. We discuss data needs, access, and safeguards with schools before any implementation.",
    faq_q3: "Is this a diagnostic tool?",
    faq_a3: "No. SocialMind is a practice and reflection tool for educational settings, not a diagnostic or clinical product.",
    faq_q4: "How does implementation work?",
    faq_a4: "Implementation starts with a demo conversation, a walkthrough, and a discussion of school needs before any pilot proposal.",
    faq_q5: "Does SocialMind replace educators?",
    faq_a5: "No. SocialMind keeps human educator judgment central and provides structured information to support adults in the loop.",
    faq_q6: "Is the platform available in Hebrew?",
    faq_a6: "The website supports English and Hebrew, and the product direction includes a bilingual experience for schools.",
    faq_q7: "Is VR required?",
    faq_a7: "No. VR is an optional practice layer for moments where presence and realism add value.",
    faq_q8: "What happens after a demo request?",
    faq_a8: "We follow up to understand your context, answer questions, and decide together whether a pilot discussion makes sense.",
    hero_system_vr: "Optional VR layer",
    hero_dashboard_label: "Educator view",
    hero_dashboard_title: "Practice patterns",
    hero_dashboard_text: "Progress over time",
    hero_flow_practice: "Student Practice",
    hero_flow_feedback: "AI Feedback",
    hero_flow_insights: "Educator Insights",

    progress_eyebrow: "How SocialMind works",
    progress_title: "Practice becomes feedback. Feedback becomes insight.",
    progress_intro: "SocialMind connects student practice, AI-powered feedback, and educator visibility in one structured learning loop.",
    progress_card1_title: "Interactive Practice",
    progress_card1_text: "Students rehearse everyday social situations in a safe, repeatable environment designed for practice without pressure.",
    progress_card1_b1: "Start conversations",
    progress_card1_b2: "Join a group",
    progress_card1_b3: "Ask for help",
    progress_card1_b4: "Handle disagreement",
    progress_card1_b5: "Participate in class",
    progress_card1_b6: "Speak in front of others",
    progress_card2_title: "Personalized Feedback",
    progress_card2_text: "After each practice session, students receive clear feedback that highlights strengths and suggests one practical next step.",
    progress_card2_b1: "Strength-based feedback",
    progress_card2_b2: "Clear next steps",
    progress_card2_b3: "Supportive language",
    progress_card2_b4: "Repeat and improve",
    progress_card3_title: "Educator Insights",
    progress_card3_text: "Educators can see practice patterns, recurring challenges, and progress over time — helping them understand where support may be needed.",
    progress_card3_b1: "Practice patterns",
    progress_card3_b2: "Progress over time",
    progress_card3_b3: "Recurring challenges",
    progress_card3_b4: "Support decisions",

    system_eyebrow: "One connected system",
    system_title: "Student practice and educator insight, connected.",
    system_text: "The student app, AI feedback engine, educator dashboard, and optional VR simulations are connected parts of one system — linking what students practice with what educators can understand and support.",
    system_card1_title: "Student App",
    system_card1_text: "Students practice social situations, reflect on their responses, receive feedback, and track progress over time.",
    system_card2_title: "AI Feedback Engine",
    system_card2_text: "AI analyzes student responses and generates clear, personalized, actionable feedback.",
    system_card3_title: "Educator Dashboard",
    system_card3_text: "Educators see patterns, progress, and insights that can help guide the next support step.",
    system_optional_tag: "Optional",
    system_card4_title: "Optional VR Practice Layer",
    system_card4_text: "VR adds immersive practice for situations where presence and realism create extra value.",

    value_eyebrow: "For students and educators",
    value_title: "Practice students can use. Insights educators can act on.",
    student_eyebrow: "For students",
    student_title: "A safe place to practice before the real moment",
    student_text: "SocialMind gives students a structured place to try different responses, learn from feedback, and build confidence through repeated practice.",
    student_b1: "Real school-life situations",
    student_b2: "Practice at your own pace",
    student_b3: "Clear, supportive feedback",
    student_b4: "Set small goals and grow",
    educator_eyebrow: "For educators",
    educator_title: "A clearer view of practice, needs, and progress",
    educator_text: "SocialMind helps educators understand how students practice, where they get stuck, and what kind of support may help next.",
    educator_note: "SocialMind does not replace educator judgment. It provides additional information and tools to support more informed decisions.",
    educator_b1: "Understand practice patterns",
    educator_b2: "Spot recurring challenges",
    educator_b3: "Track progress over time",
    educator_b4: "Support the next step",

    vr_eyebrow: "Optional VR layer",
    vr_title: "Immersive practice where it adds real value.",
    vr_text: "For moments that benefit from stronger presence — such as public speaking, difficult conversations, or realistic school scenarios — SocialMind can extend practice through VR simulations.",
    vr_note: "VR is an advanced practice layer within the system, not a requirement for using SocialMind.",

    diff_eyebrow: "Why SocialMind is different",
    diff_title: "Not just content. Not just conversation. A connected practice and insight system.",
    diff_card1_title: "Traditional SEL platforms",
    diff_card1_text: "Often teach through content, videos, and activities.",
    diff_card2_title: "Generic AI chatbots",
    diff_card2_text: "Enable conversation, but are not always designed for school scenarios, educator workflows, or structured progress.",
    diff_card3_title: "Survey and analytics tools",
    diff_card3_text: "Collect information, but do not give students a place to practice the skills themselves.",
    diff_card4_title: "SocialMind",
    diff_card4_text: "Connects interactive practice, personalized feedback, progress tracking, and educator insight in one system.",

    built_title: "Built for school reality.",
    built_card1_title: "Privacy-aware by design",
    built_card1_text: "Designed with careful data practices, student dignity, and school review in mind.",
    built_card2_title: "Built for educator oversight",
    built_card2_text: "Keeps adults in the loop with structured insights that support professional judgment.",
    built_card3_title: "Flexible practice modes",
    built_card3_text: "Supports different needs, comfort levels, and implementation paths.",
    built_card4_title: "Designed with school needs in mind",
    built_card4_text: "Built for conversations with educators, counselors, and student support teams.",

    closing_title: "Ready to see SocialMind in action?",
    closing_text: "Start with a demo conversation and explore whether SocialMind fits your school community.",
    closing_cta_primary: "Request a Demo",
    closing_cta_secondary: "Explore Our Mission",

    footer_tagline: "AI-powered social skills practice for schools.",
    footer_col1_h: "Product",
    footer_col1_1: "Product Overview",
    footer_col1_2: "Student Experience",
    footer_col1_3: "AI & Feedback",
    footer_col2_h: "For Schools",
    footer_col2_1: "For Schools",
    footer_col2_2: "Implementation / Pilot",
    footer_col2_3: "Request a Demo",
    footer_col3_h: "Research & Safety",
    footer_col3_1: "Research & Educational Principles",
    footer_col3_2: "Privacy & Safety",
    footer_col4_h: "Company",
    footer_col4_1: "About & Team",
    footer_col4_2: "Contact",
    footer_email: "socialmind2025@gmail.com",
    footer_demo_cta: "Request a Demo",
    footer_col5_h: "Legal",
    footer_col5_1: "Privacy Policy",
    footer_col5_2: "Terms",
    footer_language_note: "English / עברית",
    footer_fine: "© 2026 SocialMind · Youth-led educational initiative",
  },

  he: {
    nav_home: "בית",
    nav_about: "אודות",
    nav_product: "מוצר",
    nav_impact: "השפעה",
    nav_team: "צוות",
    nav_contact: "צור קשר",

    hero_title: "מנצחים את הפחד, מקרבים חברים.",
    hero_p1:
      "דרך בטוחה וסוחפת לבני נוער לתרגל מצבים חברתיים יומיומיים ולבנות ביטחון - בהנחיית דמויות AI בזמן אמת ב-VR.",
    hero_p2:
      "אנחנו עוזרים לתלמידים להתגבר על חרדה חברתית צעד אחר צעד, בסביבה וירטואלית תומכת שמותאמת לצרכים שלהם.",
    btn_learn_more: "למידע נוסף",
    btn_see_how: "לראות איך זה עובד",

    helps_title: "במה SocialMind עוזר",
    helps_card1_title: "חרדה חברתית",
    helps_card1_text: "סיוע לתלמידים שמתקשים לדבר בכיתה או להצטרף לקבוצות.",
    helps_card2_title: "תרגול אמיתי, בלי שיפוטיות",
    helps_card2_text: "דמויות מבוססות AI מאפשרות תרגול בטוח וחוזר ללא לחץ.",
    helps_card3_title: "מיומנויות חברתיות-רגשיות חזקות יותר",
    helps_card3_text: "בניית ביטחון, תקשורת ומודעות עצמית רגשית.",

    why_title: "למה כישורים חברתיים חשובים",
    why_text:
      "הרבה תלמידים נמנעים מלהצביע או לדבר - לא כי לא אכפת להם, אלא כי מצבים חברתיים מרגישים מציפים. SocialMind הופך רגעים שנמנעו מהם להזדמנויות לצמיחה.",

    audience_title: "למי זה מיועד",
    audience_card1_title: "תלמידים",
    audience_card1_text: "דרך בטוחה לתרגל מצבים שמרגישים מאיימים בחיים האמיתיים.",
    audience_card2_title: "מחנכים ויועצים",
    audience_card2_text: "כלי SEL מודרני שמגדיל את יכולת התמיכה בבתי ספר.",
    audience_card3_title: "שותפים וחדשנים",
    audience_card3_text:
      "לבתי ספר וארגונים שמקדמים חדשנות משמעותית בבריאות הנפש.",

    highlights_title: "נקודות בולטות",
    highlights_1: "דמויות אינטראקטיביות מבוססות AI",
    highlights_2: "תרחישי VR קצרים המבוססים על חיי בית הספר",
    highlights_3: "מטרות אישיות אחרי כל מפגש",
    highlights_4: "פותח יחד עם יועצים ומומחים",
    highlights_5: "נבנה על ידי תלמידים עם שליחות",

    teaser_text: "רוצים להבין את הסיפור מאחורי SocialMind?",
    teaser_link: "לגלות את החזון שלנו <-",

    about_title: "אודות SocialMind",
    about_intro:
      "SocialMind הוא מיזם חינוכי בהובלת נוער שנועד לעזור לבני נוער להתגבר על חרדה חברתית ולפתח ביטחון חברתי אמיתי באמצעות תרגול VR ודיאלוגים מבוססי AI.",
    problem_title: "הבעיה",
    problem_p1:
      "בני נוער רבים חווים חרדה חברתית. הם חוששים לדבר בכיתה, להצטרף לשיחה או להישפט על ידי חברים. עם הזמן, הימנעות הופכת להרגל - ותלמידים שנראים \"בסדר\" מבחוץ לעיתים מתמודדים בשקט.",
    problem_p2:
      "בתי הספר רוצים לעזור, אבל מערכות התמיכה עמוסות. יועצים ופסיכולוגים חייבים לתעדף מקרים דחופים, ותלמידים רבים נשארים ללא ליווי עקבי או הזדמנות לתרגול בטוח.",
    solution_title: "הפתרון שלנו",
    solution_text:
      "SocialMind הופך רגעים חברתיים שנמנעים מהם לתרגול בטוח וחוזר. תלמידים נכנסים לתרחישים מציאותיים מבית הספר ב-VR ומתקשרים עם דמויות AI שמגיבות בזמן אמת. כך ניתן לתרגל בקצב אישי וללא חשש משיפוטיות.",
    why_vr_ai_title: "למה VR ו-AI?",
    why_vr_card1_title: "VR יוצר תחושה אמיתית - בלי סיכון אמיתי",
    why_vr_card1_text:
      "מציאות מדומה הופכת את התרגול למציאותי מספיק כדי לבנות מיומנויות, תוך שמירה על סביבה בטוחה ומבוקרת רגשית.",
    why_vr_card2_title: "דמויות AI הופכות את התרגול לאנושי",
    why_vr_card2_text:
      "במקום דיאלוגים מוכתבים מראש, דמויות AI מגיבות באופן טבעי ומאפשרות זרימת שיחה אמיתית.",
    vision_title: "החזון שלנו",
    vision_p1:
      "אנחנו מאמינים שחינוך איכותי חייב לכלול צמיחה רגשית וחברתית, לא רק הצלחה אקדמית. החזון שלנו הוא בית ספר שבו כל תלמיד מרגיש בטוח להשתתף, להתחבר ולצמוח חברתית, רגשית ולימודית.",
    vision_p2:
      "SocialMind שואף להיות כלי מעשי ומודרני לבתי ספר, שמסייע להפחית סבל שקט ולחזק תחושת שייכות.",
    values_title: "הערכים שלנו",
    values_1: "בטיחות רגשית לפני ביצועים",
    values_2: "תרגול לפני לחץ",
    values_3: "חדשנות עם רגישות אנושית",
    values_4: "שיתוף פעולה עם יועצים חינוכיים וקליניים",
    values_5: "מנהיגות נוער והשפעה אמיתית",

    product_title: "איך SocialMind עובד",
    product_intro:
      "SocialMind הופך רגעים חברתיים שנמנעו מהם לתרגול VR מודרך וחוזר. כל מפגש משלב סצנות סוחפות עם אינטראקציות AI בזמן אמת כדי לעזור לבני נוער לבנות ביטחון בצורה בטוחה והדרגתית.",
    step1_title: "שלב 1 - בחירת תרחיש חברתי",
    step1_text:
      "התלמידים בוחרים מצב בית ספרי אמיתי שבדרך כלל מרגיש מלחיץ. לדוגמה:",
    step1_1: "להציג את עצמם בפני קבוצה",
    step1_2: "להצטרף לשיחה בהפסקת צהריים",
    step1_3: "לשאול שאלה בכיתה",
    step1_4: "לדבר עם דמות תומכת (כמו היועץ הווירטואלי שלנו \"אלון\")",
    step2_title: "שלב 2 - כניסה לסצנת VR",
    step2_text:
      "באמצעות משקפי VR התלמידים נכנסים לסביבה בית ספרית מציאותית: כיתה, מסדרון, חדר יועץ או קבוצת תלמידים. הוויזואליות, המרחק, קשר העין והטון יוצרים חוויה סוחפת ומעוררת רגשית.",
    step3_title: "שלב 3 - אינטראקציה עם דמויות AI",
    step3_text:
      "התלמידים מדברים באופן טבעי בזמן שדמויות AI מגיבות בזמן אמת. בלי תסריטים ובלי לשנן משפטים. הדמויות מתאימות את הטון, הקצב והתגובות לפי תשובות התלמיד.",
    step3_card1_title: "זרימת שיחה אמיתית",
    step3_card1_text:
      "במקום אפשרויות מוקלטות מראש, כל אינטראקציה מרגישה ייחודית, אותנטית ורלוונטית.",
    step3_card2_title: "תרגול בטוח רגשית",
    step3_card2_text: "התלמידים יכולים לנסות שוב כמה פעמים שצריך - בלי פחד משיפוטיות.",
    step4_title: "שלב 4 - רפלקציה ומטרות קטנות",
    step4_text:
      "אחרי כל מפגש, רפלקציה קצרה עוזרת לתלמידים לזהות התקדמות. הם מקבלים \"מיקרו-מטרה\" קטנה וברורה לפעם הבאה, לדוגמה:",
    step4_1: '"להחזיק קשר עין לשנייה נוספת."',
    step4_2: '"להגיד את השם בקול ברור."',
    step4_3: '"לשאול שאלה פשוטה אחת."',
    step4_end: "הצעדים הקטנים האלה מפחיתים פחד ובונים אומץ בעולם האמיתי.",

    impact_title: "השפעה והתקדמות",
    impact_intro:
      "SocialMind הוא לא רק רעיון - זו יוזמה מתפתחת שנבנתה על ידי תלמידים, נבחנה מול אתגרים אמיתיים ומונעת ממשימה לשנות את האופן שבו בתי ספר תומכים בבני נוער עם חרדה חברתית.",
    achievements_title: "תחרויות ואבני דרך",
    ach1_title: "StartCup AI (חצי גמר)",
    ach1_text:
      "התקדמנו בשלבים מוקדמים עם קונספט ה-VR + AI שלנו, עבודת התאמת מוצר-שוק וחומרי משקיעים.",
    ach2_title: "SAGE World Cup",
    ach2_text:
      "הצגנו את SocialMind בזירה הבינלאומית כסטארטאפ עם שליחות לבריאות נפשית של בני נוער וללמידה חברתית-רגשית.",
    ach3_title: "תחרות סטארטאפים בינלאומית - גאורגיה",
    ach3_text:
      "ייצגנו את בית הספר ואת המדינה עם SocialMind, תוך חידוד חזון המוצר וסיפור ההשפעה.",
    school_talks_title: "העלאת מודעות בבתי הספר",
    school_talks_text:
      "במהלך הפיתוח קיימנו גם שיחות בבית הספר על חרדה חברתית ובריאות נפשית של בני נוער. המפגשים סייעו לתלמידים ולצוות להבין מאבקים שקטים, להפחית סטיגמה ולבנות סביבה תומכת יותר.",
    sdg_title: "מיושר עם יעדי הפיתוח בר-קיימא של האו\"ם",
    sdg_1: "SDG 3: בריאות ורווחה",
    sdg_2: "SDG 4: חינוך איכותי",
    sdg_3: "SDG 10: צמצום אי-שוויון",
    sdg_text:
      "SocialMind תומך ברווחת בני נוער, מחזק למידה חברתית-רגשית בבתי ספר ומסייע לתלמידים שלעיתים לא מקבלים מענה בגלל התנהגות שקטה או נמנעת.",
    next_steps_title: "מה הלאה",
    next_steps_text:
      "אנחנו בונים כעת MVP מלא שיאפשר לבתי ספר להפעיל מפגשי VR מובנים ולעקוב אחר התקדמות תלמידים בצורה בטוחה.",
    next_1: "להשלים פיתוח MVP ב-VR + AI",
    next_2: "להריץ פיילוטים בבתי ספר שותפים",
    next_3: "להרחיב תרחישים לאתגרים חברתיים נוספים",
    next_4: "לבנות שותפויות ארוכות טווח עם מערכות חינוך",

    team_title: "הכירו את הצוות",
    team_intro:
      "SocialMind נבנה על ידי צוות תלמידים ממוקד שמשלב טכנולוגיה מתקדמת, חשיבה מוצרית ושליחות לחיזוק הביטחון החברתי של בני נוער.",
    core_team_title: "צוות הליבה",
    nikol_role: "CEO & CTO",
    nikol_bio: "מובילה את האסטרטגיה ואת הפיתוח הטכנולוגי של SocialMind.",
    team_email_label: "אימייל:",
    team_phone_label: "טלפון:",
    team_linkedin: "לינקדאין <-",
    arthur_role: "Co-CTO & Marketing Manager",
    arthur_bio: "תומך בהנדסה ומוביל שיווק והסברה.",

    contact_title: "צור קשר",
    contact_intro:
      "בין אם אתם בית ספר, אנשי חינוך, שותפים או ארגון שמעוניין ללמוד עוד על SocialMind - נשמח לשמוע מכם.",
    get_in_touch_title: "דברו איתנו",
    contact_email: "אימייל: socialmind2025@gmail.com",
    contact_instagram: "אינסטגרם: בקרוב",
    contact_location: "מיקום: ישראל",
    contact_footer: "לשיתופי פעולה, פיילוטים בבתי ספר או שאלות כלליות - מוזמנים לפנות.",

    // ── Homepage redesign keys ──────────────────────────────────────────
    nav_schools: "לבתי ספר",
    nav_research: "מחקר",
    nav_privacy: "פרטיות",
    nav_implementation: "יישום",
    nav_company: "אודות",
    nav_request_demo: "בקשת הדגמה",

    hero_title_line1: "מתרגלים מיומנויות חברתיות",
    hero_title_join: " עם ",
    hero_title_line2: "ביטחון.",
    hero_lead: "שיחות AI מודרכות עוזרות לתלמידים לתרגל רגעים אמיתיים מבית הספר במרחב בטוח ותומך - ואז לעצור, לחשוב ולצמוח.",
    hero_cta_primary: "בקשת הדגמה",
    hero_cta_secondary: "לגלות את הפלטפורמה",
    hero_trust_line: "נבנה לבתי ספר. פרטיות תחילה. שיקול דעת אנושי תמיד במרכז.",
    trust_item_1: "יוזמה בהובלת נוער",
    trust_item_2: "תוכניות חדשנות נבחרות",
    trust_item_3: "כבוד התלמיד מהתכנון",
    trust_item_4: "חוויה באנגלית ובעברית",
    trust_item_5: "פיתוח AI אחראי",
    journey_eyebrow: "מסע תרגול לתלמידים",
    journey_title: "תלמידים מתרגלים רגעים אמיתיים - שוב ושוב.",
    journey_intro: "שיחות מודרכות במצבים בית ספריים מציאותיים.",
    journey_card1_kicker: "רגע תרגול",
    journey_card1_title: "התחלת שיחה",
    journey_card1_text: "תלמידים מתרגלים פתיחת שיחה, שמירה על מעורבות ובניית ביטחון.",
    journey_card2_kicker: "רגע תרגול",
    journey_card2_title: "הצטרפות לקבוצה",
    journey_card2_text: "תלמידים מתרגלים הצטרפות לקבוצה, הצגה עצמית והשתתפות נינוחה.",
    schools_eyebrow: "נבנה לבתי ספר",
    schools_title: "נבנה לבתי ספר. בהשראת שיחות עם אנשי חינוך.",
    schools_intro: "SocialMind תומכת בתרגול תלמידים תוך שמירה על שיקול דעת אנושי וחינוכי במרכז.",
    schools_point1: "תומך בתלמידים בזמן שהם בונים ביטחון חברתי אמיתי",
    schools_point2: "לא אבחוני ולעולם לא מחליף אנשי מקצוע",
    schools_point3: "חוויה באנגלית ובעברית",
    schools_point4: "גישה שיתופית ליישום בבתי ספר",
    schools_cta: "לגלות את SocialMind לבתי ספר",
    school_flow_1: "תרגול תלמידים",
    school_flow_2: "משוב AI",
    school_flow_3: "רפלקציה",
    school_flow_4: "תמיכה חינוכית",
    demo_eyebrow: "מסלול יישום",
    demo_title: "מהדגמה לפיילוט - יחד.",
    demo_intro: "תהליך ברור ושיתופי לכל בית ספר.",
    demo_step1: "בקשת הדגמה",
    demo_step2: "פגישת היכרות",
    demo_step3: "הצגת המוצר",
    demo_step4: "שיחת צרכי בית הספר",
    demo_step5: "בדיקת התאמה הדדית",
    demo_step6: "הצעת פיילוט אפשרית",
    demo_note: "בקשת הדגמה מתחילה שיחה. היא לא מחייבת את בית הספר לפיילוט.",
    demo_cta: "בקשת הדגמה",
    faq_eyebrow: "שאלות נפוצות",
    faq_title: "שאלות שבתי ספר שואלים",
    faq_q1: "איך SocialMind עובד?",
    faq_a1: "תלמידים מתרגלים רגעים חברתיים מבית הספר דרך שיחות AI מודרכות, ואז מקבלים שאלות רפלקציה וצעדים קטנים להמשך.",
    faq_q2: "האם מידע התלמידים בטוח?",
    faq_a2: "SocialMind מתוכנן לשימוש בית ספרי מודע פרטיות. לפני יישום, אנחנו משוחחים עם בתי הספר על צרכי מידע, גישה ואמצעי הגנה.",
    faq_q3: "האם זה כלי אבחוני?",
    faq_a3: "לא. SocialMind הוא כלי תרגול ורפלקציה למסגרות חינוכיות, לא מוצר אבחוני או קליני.",
    faq_q4: "איך עובד היישום?",
    faq_a4: "היישום מתחיל בשיחת הדגמה, הצגת המוצר ושיחה על צרכי בית הספר לפני כל הצעת פיילוט.",
    faq_q5: "האם SocialMind מחליף אנשי חינוך?",
    faq_a5: "לא. SocialMind משאיר את שיקול הדעת האנושי במרכז ומספק מידע מובנה לתמיכה באנשי חינוך.",
    faq_q6: "האם הפלטפורמה זמינה בעברית?",
    faq_a6: "האתר תומך באנגלית ובעברית, וכיוון המוצר כולל חוויה דו-לשונית לבתי ספר.",
    faq_q7: "האם VR נדרש?",
    faq_a7: "לא. VR הוא שכבת תרגול אופציונלית לרגעים שבהם נוכחות וריאליזם מוסיפים ערך.",
    faq_q8: "מה קורה אחרי בקשת הדגמה?",
    faq_a8: "ניצור קשר כדי להבין את ההקשר, לענות על שאלות ולהחליט יחד אם נכון להתקדם לשיחת פיילוט.",
    hero_system_vr: "שכבת VR אופציונלית",
    hero_dashboard_label: "מבט לאנשי חינוך",
    hero_dashboard_title: "דפוסי תרגול",
    hero_dashboard_text: "התקדמות לאורך זמן",
    hero_flow_practice: "תרגול תלמידים",
    hero_flow_feedback: "משוב AI",
    hero_flow_insights: "תובנות לאנשי חינוך",

    progress_eyebrow: "איך SocialMind הופכת תרגול להתקדמות",
    progress_title: "איך SocialMind הופכת תרגול להתקדמות",
    progress_intro: "SocialMind מחברת בין תרגול תלמידים, משוב מבוסס AI ונראות לאנשי חינוך בלולאת למידה מובנית אחת.",
    progress_card1_title: "תרגול אינטראקטיבי",
    progress_card1_text: "תלמידים מתרגלים מצבים חברתיים מהחיים בסביבה בטוחה, חוזרת ונטולת שיפוטיות.",
    progress_card1_b1: "להתחיל שיחות",
    progress_card1_b2: "להצטרף לקבוצה",
    progress_card1_b3: "להתמודד עם אי־הסכמות",
    progress_card1_b4: "לבקש עזרה",
    progress_card1_b5: "להשתתף בכיתה",
    progress_card1_b6: "לדבר מול אחרים",
    progress_card2_title: "משוב מותאם אישית",
    progress_card2_text: "אחרי כל תרגול, התלמידים מקבלים משוב מותאם שמדגיש חוזקות ונותן הכוונה מעשית לניסיון הבא.",
    progress_card2_b1: "משוב מבוסס AI",
    progress_card2_b2: "ברור ותומך",
    progress_card2_b3: "צעדים מעשיים להמשך",
    progress_card2_b4: "לחזור ולשפר",
    progress_card3_title: "תובנות לאנשי חינוך",
    progress_card3_text: "הדשבורד מרכז דפוסי תרגול, אתגרים חוזרים והתקדמות לאורך זמן, כדי לעזור לאנשי חינוך להבין היכן ייתכן שנדרשת תמיכה ומה יכול להיות הצעד הבא.",
    progress_card3_b1: "דפוסי תרגול",
    progress_card3_b2: "התקדמות לאורך זמן",
    progress_card3_b3: "אתגרים חוזרים",
    progress_card3_b4: "תמיכה בהחלטות",

    system_eyebrow: "מערכת אחת מחוברת",
    system_title: "מערכת אחת מחוברת לתרגול, משוב ותמיכה",
    system_text: "אפליקציית התלמידים, מנוע המשוב, דשבורד אנשי החינוך וסימולציות ה־VR אינם מוצרים נפרדים. הם חלקים מחוברים של מערכת אחת שמקשרת בין תרגול תלמידים לבין תובנות חינוכיות.",
    system_card1_title: "אפליקציית תלמיד",
    system_card1_text: "תרגול מצבים חברתיים, רפלקציה, משוב אישי ומעקב אחר התקדמות.",
    system_card2_title: "מנוע משוב AI",
    system_card2_text: "מנתח תגובות ומייצר משוב ברור, מותאם ואפשרי לפעולה.",
    system_card3_title: "דשבורד לאנשי חינוך",
    system_card3_text: "מציג דפוסים, התקדמות ותובנות שעוזרות להבין היכן נדרשת תמיכה.",
    system_optional_tag: "אופציונלי",
    system_card4_title: "שכבת תרגול VR אופציונלית",
    system_card4_text: "תרגול אימרסיבי למצבים שבהם נוכחות ותחושת מציאות מוסיפות ערך.",

    value_eyebrow: "לתלמידים ולאנשי חינוך",
    value_title: "תרגול שתלמידים יכולים להשתמש בו. תובנות שאנשי חינוך יכולים לפעול לפיהן.",
    student_eyebrow: "לתלמידים",
    student_title: "מרחב בטוח לתרגול לפני הרגע האמיתי",
    student_text: "SocialMind מאפשרת לתלמידים לחקור מצבים חברתיים, לנסות תגובות שונות ולקבל משוב מותאם בלי הלחץ של טעויות באינטראקציה אמיתית.",
    student_b1: "מצבים אמיתיים מחיי בית הספר",
    student_b2: "תרגול בקצב אישי",
    student_b3: "משוב ברור ותומך",
    student_b4: "מטרות קטנות וצמיחה הדרגתית",
    educator_eyebrow: "לאנשי חינוך",
    educator_title: "מתרגול תלמידים לתובנות חינוכיות שימושיות",
    educator_text: "SocialMind עוזרת לאנשי חינוך לקבל תמונה ברורה יותר של דפוסי תרגול, אתגרים חוזרים והתקדמות לאורך זמן, בלי להסתמך רק על סקרים או תצפיות נקודתיות.",
    educator_note: "המערכת אינה מחליפה שיקול דעת חינוכי. היא מספקת מידע וכלים נוספים לתמיכה בהחלטות מושכלות יותר.",
    educator_b1: "להבין דפוסי תרגול",
    educator_b2: "לזהות אתגרים נפוצים",
    educator_b3: "לעקוב אחר התקדמות לאורך זמן",
    educator_b4: "לתמוך בצעד הבא",

    vr_eyebrow: "שכבת VR אופציונלית",
    vr_title: "תרגול אימרסיבי במקומות שבהם הוא מוסיף ערך",
    vr_text: "במצבים כמו דיבור מול קהל, שיחות מורכבות או תרחישים שמרוויחים מתחושת נוכחות חזקה יותר, SocialMind יכולה להרחיב את החוויה באמצעות סימולציות VR.",
    vr_note: "VR היא שכבת תרגול מתקדמת בתוך המערכת, ולא דרישה לשימוש בה.",

    diff_eyebrow: "מה מייחד את זה",
    diff_title: "לא רק תוכן. לא רק שיחה. מערכת מחוברת לתרגול ותובנות.",
    diff_card1_title: "פלטפורמות SEL מסורתיות",
    diff_card1_text: "מלמדות באמצעות תוכן, סרטונים ופעילויות.",
    diff_card2_title: "צ'אטבוטים כלליים של AI",
    diff_card2_text: "מאפשרים שיחה, אבל לא בהכרח בנויים לתרחישי בית ספר, זרימות עבודה חינוכיות או התקדמות מובנית.",
    diff_card3_title: "כלי סקרים ואנליטיקה",
    diff_card3_text: "אוספים מידע, אבל אינם מאפשרים לתלמידים לתרגל את המיומנויות בעצמם.",
    diff_card4_title: "SocialMind",
    diff_card4_text: "מחברת תרגול אינטראקטיבי, משוב מותאם, מעקב התקדמות ותובנות לאנשי חינוך.",

    built_title: "בנוי לבתי ספר",
    built_card1_title: "מודעות לפרטיות מהתכנון",
    built_card1_text: "מתוכנן עם מחשבה על ניהול מידע זהיר וכבוד התלמידים.",
    built_card2_title: "בנוי לפיקוח חינוכי",
    built_card2_text: "משאיר אנשי חינוך בתמונה עם תובנות מובנות שתומכות בשיקול דעת.",
    built_card3_title: "מצבי תרגול גמישים",
    built_card3_text: "תומך בצרכים שונים של בתי ספר, רמות נוחות שונות ודרכי הטמעה מגוונות.",
    built_card4_title: "מתוכנן סביב צרכי בית הספר",
    built_card4_text: "נבנה לשיחות עם מורים, יועצות וצוותי תמיכה בתלמידים.",

    closing_title: "מוכנים לראות את SocialMind בפעולה?",
    closing_text: "התחילו בשיחת הדגמה ובדקו האם SocialMind מתאים לקהילת בית הספר שלכם.",
    closing_cta_primary: "בקשת הדגמה",
    closing_cta_secondary: "לגלות את החזון שלנו",

    footer_tagline: "תרגול מיומנויות חברתיות מבוסס AI לבתי ספר.",
    footer_col1_h: "מוצר",
    footer_col1_1: "סקירת מוצר",
    footer_col1_2: "חוויית תלמידים",
    footer_col1_3: "AI ומשוב",
    footer_col2_h: "לבתי ספר",
    footer_col2_1: "לבתי ספר",
    footer_col2_2: "יישום / פיילוט",
    footer_col2_3: "בקשת הדגמה",
    footer_col3_h: "מחקר ובטיחות",
    footer_col3_1: "מחקר ועקרונות חינוכיים",
    footer_col3_2: "פרטיות ובטיחות",
    footer_col4_h: "החברה",
    footer_col4_1: "אודות וצוות",
    footer_col4_2: "יצירת קשר",
    footer_email: "socialmind2025@gmail.com",
    footer_demo_cta: "בקשת הדגמה",
    footer_col5_h: "משפטי",
    footer_col5_1: "מדיניות פרטיות",
    footer_col5_2: "תנאים",
    footer_language_note: "English / עברית",
    footer_fine: "© 2026 SocialMind · יוזמה חינוכית בהובלת נוער",
  },
};

function applyLanguage(lang) {
  const safeLang = translations[lang] ? lang : "en";
  const dict = translations[safeLang];

  document.documentElement.lang = safeLang;
  document.documentElement.dir = safeLang === "he" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === safeLang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  localStorage.setItem(STORAGE_KEY, safeLang);
}

function initI18n() {
  const saved = localStorage.getItem(STORAGE_KEY) || "en";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  applyLanguage(saved);
}

window.addEventListener("DOMContentLoaded", initI18n);
