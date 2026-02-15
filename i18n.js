const STORAGE_KEY = "socialmind_lang";

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_product: "How It Works",
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
  },

  he: {
    nav_home: "בית",
    nav_about: "אודות",
    nav_product: "איך זה עובד",
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
  },
};

function applyLanguage(lang) {
  const safeLang = translations[lang] ? lang : "en";
  const dict = translations[safeLang];

  document.documentElement.lang = safeLang;
  document.documentElement.dir = safeLang === "he" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
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
