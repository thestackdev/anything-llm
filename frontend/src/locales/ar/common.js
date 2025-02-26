const TRANSLATIONS = {
  onboarding: {
    home: {
      title: "مرحبا في",
      getStarted: "بسم الله",
    },
    llm: {
      title: "إعدادات نموذج التعلم العميق المفضّلة",
      description:
        "يمكن لـِ  إيني ثينك إلْلْمْ العمل مع عدة موفرين لنماذج التعلم العميق لأداء خدمة المحادثات",
    },
    userSetup: {
      title: "إنشاء المستعمِل",
      description: ".ضبط إعدادات مستعمِلِك",
      howManyUsers: "كم من مستعمِل سيستعمِل هذا المثيل ؟",
      justMe: "فقط أنا",
      myTeam: "فريقي",
      instancePassword: "كلمة مرورالمثيل",
      setPassword: "هل تريد إنشاء كلمة مرور ؟",
      passwordReq: "يجب أن تحتوي كلمة المرور على ثمانية حروف على الأقل",
      passwordWarn: "من المهم حفظ كلمة المرور هذه لأنه لا يمكن استردادها.",

      adminUsername: "اسم مستعمل حساب المشرف",
      adminUsernameReq:
        "يجب أن يكون اسم المستعمل بطول 6 أحرف على الأقل وأن يحتوي فقط على أحرف صغيرة وأرقام وشرطات سفلية وواصلات بدون مسافات.",
      adminPassword: "كلمة مرور حساب المشرف",
      adminPasswordReq: "يجب أن تكون كلمات المرور 8 أحرف على الأقل.",
      teamHint:
        "بمجرد اكتمال الإنشاء  ستكون المشرف الوحيد يمكنك دعوة الآخرين ليكونوا مستعملين أو مشرفين. لا تفقد كلمة المرور الخاصة بك حيث يمكن للمشرفين فقط إعادة تعيين كلمات المرور",
    },
    data: {
      title: "معالجة البيانات والخصوصية",
      description:
        "نحن ملتزمون بالشفافية والمراقبة عندما يتعلق الأمر ببياناتك الشخصية.",
      settingsHint: "يمكن إعادة ضبط هذه الإعدادات في أي وقت.",
    },
    survey: {
      title: "مرحباً في إيني ثينك إلْلْمْ",
      description:
        " بما يتناسب مع احتياجاتك ساعدنا إذا أحببت في تصميم  إيني ثينك إلْلْمْ",

      email: "ما هو بريدك الالكتروني؟",
      useCase: "لماذا ستستخدم إيني ثينك إلْلْمْ؟",
      useCaseWork: "للعمل",
      useCasePersonal: "للاستخدام الشخصي",
      useCaseOther: "شيء آخَر",
      comment: "كيف سمعت عن إيني ثينك إلْلْمْ ؟",
      commentPlaceholder:
        "أخبرنا كيف وجدتنا!، يوتيوب، تويتر، جيثوب، ريديت وما إلى ذلك -",
      skip: "تخطي الاستطلاع",
      thankYou: "شكرا على تقييماتك!",
    },
    workspace: {
      title: "قم بإنشاء مساحة العمل الأولى الخاصة بك",
      description:
        "قم بإنشاء مساحة العمل الأولى الخاصة بك وابدأ مع إيني ثينك إلْلْمْ.",
    },
  },
  common: {
    "workspaces-name": "اسم مساحة العمل",
    error: "خطأ",
    success: "موفّق",
    user: "مستعمِل",
    selection: "اختيار النموذج",
    saving: "حفظ...",
    save: "حفظ التغييرات",
    previous: "الصفحة السابقة",
    next: "الصفحة التالية",
    optional: "اختياري",
    yes: "نعم",
    no: "لا",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "إعدادات المثيل",
    system: "الإعدادات العامة",
    invites: "دعوات",
    users: "مستعملون",
    workspaces: "مساحات العمل",
    "workspace-chats": "محادثات مساحة العمل",
    customization: "التخصيص",
    "api-keys": "واجهة برمجة التطبيقات للمطورين",
    llm: "النماذج اللغوية الكبيرة",
    transcription: "النسْخ",
    embedder: "مُضمّن",
    "text-splitting": "تقسيم النص تقطيعه",
    "voice-speech": "الصوت والخطاب",
    "vector-database": "قاعدة بيانات المتجهات",
    embeds: "تضمين المحادثة",
    "embed-chats": "سجل تضمين المحادثة",
    security: "حماية",
    "event-logs": "سجلات الأحداث",
    privacy: "الخصوصية والبيانات",
    "ai-providers": "موفرو الذكاء الاصطناعي",
    "agent-skills": "مهارات الوكيل",
    admin: "مشرف",
    tools: "أدوات",
    "experimental-features": "الميزات التجريبية",
    contact: "اتصل بالدعم",
    "browser-extension": "ملحق المتصفح",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "مرحبا في",
      "placeholder-username": "اسم المستعمِل",
      "placeholder-password": "كلمة المرور",
      login: "تسجيل الدخول",
      validating: "جاري التحقق...",
      "forgot-pass": "هل نسيت كلمة المرور",
      reset: "إعادة الضبط",
    },
    "sign-in": {
      start: "تسجيل الدخول إلى",
      end: "حساب.",
    },
    "password-reset": {
      title: "إعادة تعيين كلمة المرور",
      description:
        "قم بإدخال المعلومات اللازمة أدناه لإعادة تعيين كلمة المرور الخاصة بك.",
      "recovery-codes": "رموز الاسترداد",
      "recovery-code": " {{index}} رمز الاسترداد",
      "back-to-login": "العودة إلى تسجيل الدخول",
    },
  },

  welcomeMessage: {
    part1:
      "مرحبًا بك في إيني ثينك إلْلْ اِمْ ، إيني ثينك إلْلْ اِمْ هي أداة ذكاء اصطناعي مفتوحة المصدر من مينْتْ بْلِكْس تعمل على تحويل أي شيء إلى روبوت محادثة مدرب يمكنك الاستعلام منه والمحادثة معه. إيني ثينك إلْلْ اِمْ هو برنامج (احضر مفاتيحك الخاصة) لذا لا توجد اشتراكات أو رسوم أو تكاليف لهذا البرنامج خارج الخدمات التي تريد استخدامها معه.",
    part2:
      "إيني ثينك إلْلْ اِمْ هي الطريقة الأسهل لوضع منتجات الذكاء الاصطناعي القوية مثل أوبن إآي و جيبيتي فور و لَنكشين و بينيكونديبي و كروماديبي وغيرها من الخدمات معًا في حزمة أنيقة لزيادة إنتاجيتك بمقدار 100 ضعف.",
    part3:
      "يمكن تشغيل  إيني ثينك إلْلْ اِمْ محليًا بالكامل على جهازك ولن تلاحظ حتى وجوده! لا حاجة إلى وحدة معالجة رسومية. التثبيت السحابي والمحلي متوفرين أيضًا.\nتزداد منظومة أدوات الذكاء الاصطناعي قوة يومًا بعد يوم. يجعل  إيني ثينك إلْلْ اِمْ استخدامه سهلاً.",
    githubIssue: "إنشاء مسألة على جيثوب",
    user1: "كيف أبدأ؟",
    part4:
      "الأمر بسيط. يتم تنظيم جميع  الحُزَم في  زُمَرٍ نطلق عليها مساحة العمل . وتتكون مساحات العمل من مجموعات من الملفات والمستندات والصور وملفات  بيديإفْ وغيرها من الملفات التي سيتم تحويلها إلى شيء يمكن  لنماذج التعلم العميق فهمه واستخدامه في المحادثة. يمكنك إضافة الملفات وإزالتها في أي وقت.",
    createWorkspace: "قم بإنشاء مساحة العمل الأولى الخاصة بك",
    user2:
      "هل هذا يشبه دروبوكس للذكاء الاصطناعي أم ماذا؟ ماذا عن المحادثة؟ إنه روبوت محادثة أليس كذلك؟",
    part5:
      "إن  إيني ثينك إلْلْمْ أكثر من مجرد  دروبوكس أكثر ذكاءً.\n\n إيني ثينك إلْلْمْ يوفر طريقتين للتحدث مع بياناتك:\n\n<i>الاستعلام:</i> ستستخرج محادثاتُك البيانات أو الاستنتاجات الموجودة في مستندات مساحة العمل الخاصة بك والتي يمكنها الوصول إليها. إن إضافة المزيد من المستندات إلى مساحة العمل تجعلها أكثر ذكاءً! \n\n<i>المحادثة:</i> تساهم مستنداتك + سجل المحادثة المستمر في نفس الوقت في إغناء نموذج التعلم العميق. إنه رائع لإضافة معلومات نصية في الوقت الفعلي أو التصحيحات وسوء الفهم الذي قد يكون لدى نموذج التعلم العميق. \n\nيمكنك التبديل بين أي من الوضعين \n<i>في منتصف المحادثة!</i>",
    user3: "ما شاء الله، هذا يبدو مذهلاً، دعني أجربه الآن!",
    part6: "استمتع!",
    starOnGitHub: "ابدأ على جيثوب",
    contact: "اتصل ب مينْت بليكْس",
  },

  "new-workspace": {
    title: "مساحة عمل جديدة",
    placeholder: "مساحتي للعمل",
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "الإعدادات العامة",
    chat: "إعدادات المحادثة",
    vector: "قاعدة بيانات المتجهات",
    members: "أعضاء",
    agent: "تكوين الوكيل",
  },

  // General Appearance
  general: {
    vector: {
      title: "عدد المتجهات",
      description:
        "العدد الإجمالي للمتجهات في قاعدة بيانات المتجهات الخاصة بك.",
    },
    names: {
      description: "سيؤدي هذا فقط إلى تغيير اسم العرض لمساحة العمل الخاصة بك.",
    },
    message: {
      title: "رسائل المحادثة المقترحة",
      description:
        " تخصيص الرسائل التي سيتم اقتراحها لمستعملي مساحة العمل الخاصة بك.",
      add: "إضافة رسالة جديدة",
      save: "حفظ الرسائل",
      heading: "اشرح لي",
      body: "فوائد برنامج إيني ثينك إلْلْمْ",
    },
    pfp: {
      title: "صورة الملف الشخصي للمساعد",
      description: "تخصيص صورة الملف الشخصي للمساعد لمساحة العمل هذه.",
      image: "صورة مساحة العمل",
      remove: "إزالة صورة مساحة العمل",
    },
    delete: {
      title: "حذف مساحة العمل",
      description:
        "احذف مساحة العمل هذه وكل بياناتها. سيؤدي هذا إلى حذف مساحة العمل لجميع المستخدمين.",
      delete: "حذف مساحة العمل",
      deleting: "حذف مساحة العمل...",
      "confirm-start": "أنت على وشكِ حذف كامل",
      "confirm-end":
        "لمساحة العمل. سيؤدي هذا إلى إزالة جميع تضمينات المتجهات في قاعدة بيانات المتجهات الخاصة بك.\n\nستظل ملفات المصدر الأصلية دون مساس. هذا الإجراء لا رجعة فيه.",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "موفر نموذج التعلم العميق لمساحة العمل",
      description:
        "موفر نموذج التعلم العميق المحدد والنموذج الذي سيتم استخدامه لمساحة العمل هذه. من الوهلة الأولى، يستخدم موفر نموذج التعلم العميق هذا مع إعدادات النظام.",
      search: "البحث عن كل مُوفري نماذج التعلم العميق",
    },
    model: {
      title: "نموذج محادثة مساحة العمل",
      description:
        "نموذج المحادثة المحدد الذي سيتم استخدامه لمساحة العمل هذه. إذا كان غير محدد، فسيتم استخدام نموذج التعلم العميق الافتراضي للنظام.",
      wait: "-- في انتظار النماذج --",
    },
    mode: {
      title: "وضع المحادثة",
      chat: {
        title: "المحادثة",
        "desc-start": "سيقدم إجابات حسب المعرفة العامة لنموذج التعلم العميق",
        and: "and",
        "desc-end": "المستند الذي تم العثور عليه حسب السياق.",
      },
      query: {
        title: "استعلام",
        "desc-start": "سوف تقدم الإجابات",
        only: "فقط",
        "desc-end": "إذا وجد المستند في السياق",
      },
    },
    history: {
      title: "سجل المحادثة",
      "desc-start":
        "عدد المحادثات السابقة التي سيتم تضمينها في رد الذاكرة قصيرة المدى.",
      recommend: "الموصى به 20.",
      "desc-end":
        "من المرجح أن يؤدي أي رقم أكبر من 45 إلى فشل مستمر في المحادثة اعتمادًا على حجم الرسالة.",
    },
    prompt: {
      title: "النداء",
      description:
        "النداء التي سيتم استخدامه في مساحة العمل هذه. حدد السياق والتعليمات للذكاء الاصطناعي للاستجابة. يجب عليك تقديم نداء مصمم بعناية حتى يتمكن الذكاء الاصطناعي من إنشاء استجابة دقيقة وذات صلة.",
    },
    refusal: {
      title: "الرد على رفض وضعية الاستعلام",
      "desc-start": "عندما تكون في",
      query: "استعلام",
      "desc-end":
        "وضعٍية ترغب في إرجاع رفض آخر مناسب عندما لا يتم العثور على السياق.",
    },
    temperature: {
      title: "حرارة نموذج التعلم العميق",
      "desc-start":
        'يتحكم هذا الإعداد في مدى "الإبداع" الذي ستكون عليه إجابات نموذج التعلم العميق.',
      "desc-end":
        "كلما زاد العدد كلما كان الإبداع أكبر. بالنسبة لبعض النماذج، قد يؤدي هذا إلى استجابات غير منسجمة عند ضبطها على رقم مرتفع للغاية.",
      hint: "لدى معظم نماذج التعلم العميق مجالات مقبولة مختلفة من القيم الصالحة. استشر موفر نموذج التعلم العميق الخاص بك للحصول على هذه المعلومات.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "معرف قاعدة بيانات المتجهة",
    snippets: {
      title: "الحد الأقصى لمقتطفات السياق",
      description:
        "يتحكم هذا الإعداد في الحد الأقصى لعدد مقتطفات السياق التي سيتم إرسالها إلى نموذج التعلم العميق لكل محادثة أو استعلام.",
      recommend: "الموصى به: 4",
    },
    doc: {
      title: "عتبة تشابه المستند",
      description:
        "الحد الأدنى لدرجة التشابه المطلوبة لاعتبار المصدر مرتبطًا بالمحادثة. وكلما زاد الرقم، كلما كان المصدر أكثر تشابهًا بالمحادثة.",
      zero: "لا قيد",
      low: "منخفضة (درجة التشابه ≥ .25)",
      medium: "متوسطة ​​(درجة التشابه ≥ .50)",
      high: "عالية (درجة التشابه ≥ .75)",
    },
    reset: {
      reset: "إعادة تعيين قاعدة بيانات المتجهات",
      resetting: "مسح المتجهات...",
      confirm:
        "أنت على وشك إعادة تعيين قاعدة بيانات المتجهات الخاصة بمساحة العمل هذه. سيؤدي هذا إلى إزالة جميع تضمينات المتجهات المضمنة حاليًا.\n\nستظل ملفات المصدر الأصلية دون مساس. هذا الإجراء لا رجعة فيه.",
      error: "تعذرت إعادة تعيين قاعدة بيانات متجهة مساحة العمل!",
      success: "تم إعادة تعيين قاعدة بيانات متجهة مساحة العمل!",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "يعتمد أداء نماذج التعلم العميق التي لا تدعم صراحةً استدعاء الأدوات بشكل كبير على قدرات النموذج ودقته. قد تكون بعض القدرات محدودة أو غير وظيفية.",
    provider: {
      title: "موفر نموذج التعلم العميق لوكيل مساحة العمل",
      description:
        "موفر نموذج التعلم العميق والنموذج المحدد الذي سيتم استخدامه لوكيل الخاص بمساحة العمل هذه.",
    },
    mode: {
      chat: {
        title: "نموذج محادثة وكيل مساحة العمل",
        description:
          "نموذج المحادثة المحدد الذي سيتم استخدامه لوكيل الخاص بمساحة العمل هذه.",
      },
      title: "نموذج وكيل مساحة العمل",
      description:
        "نموذج نموذج التعلم العميق المحدد الذي سيتم استخدامه لوكيل الخاص بمساحة العمل هذه.",
      wait: "-- في انتظار النماذج --",
    },

    skill: {
      title: "مهارات الوكيل الافتراضية",
      description:
        "قم بتحسين القدرات الطبيعية للوكيل الافتراضي باستخدام هذه المهارات المعدة مسبقًا. ينطبق هذا الإعداد على جميع مساحات العمل.",
      rag: {
        title: "التوليد المعزز بالاسترجاع والذاكرة طويلة المدى",
        description:
          'اسمح للوكيل بالاستفادة من مستنداتك المحلية للإجابة على استعلام أو اطلب من الوكيل "تذكر" أجزاء من المحتوى لاسترجاعها في الذاكرة طويلة المدى.',
      },
      view: {
        title: "عرض وتلخيص المستندات",
        description:
          "السماح للوكيل بإدراج وتلخيص محتوى ملفات مساحة العمل المضمنة حاليًا.",
      },
      scrape: {
        title: "جمع محتوى المواقع الإلكترونية",
        description: "السماح للوكيل بزيارة مواقع الويب وجمع محتواها.",
      },
      generate: {
        title: "إنشاء المخططات البيانية",
        description:
          "تمكين الوكيل الافتراضي لإنشاء أنواع مختلفة من المخططات من البيانات المقدمة أو المعطاة في المحادثة.",
      },
      save: {
        title: "إنشاء الملفات وحفظها في المتصفح",
        description:
          "تمكين الوكيل الافتراضي من إنشاء الملفات والكتابة عليها وحفظها و تنزيلها في متصفحك.",
      },
      web: {
        title: "البحث والتصفح المباشر على الويب",
        "desc-start":
          "قم بتمكين الوكيل الخاص بك من البحث في الويب للإجابة على أسئلتك من خلال الاتصال بموفر البحث على الويب.",
        "desc-end":
          "لن يعمل البحث على الويب أثناء حصص المحادثة بواسطة الوكيل حتى يتم إعداد ذلك.",
      },
    },
  },

  // Workspace Chats
  recorded: {
    title: "محادثات مساحة العمل",
    description:
      "هذه هي جميع المحادثات والرسائل المسجلة التي أرسلها المستعملون مرتبة حسب تاريخ إنشائها.",
    export: "تصدير",
    table: {
      id: "معرف",
      by: "أرسلت بواسطة",
      workspace: "مساحة العمل",
      prompt: "نداء",
      response: "استجابة",
      at: "أرسلت في",
    },
  },

  // Appearance
  appearance: {
    title: "مظهر",
    description: "تخصيص إعدادات مظهر منصتك.",
    logo: {
      title: "تخصيص الشعار",
      description: "قم بتحميل شعارك المخصص لجعل روبوت المحادثة خاصا بك .",
      add: "أضف شعارًا مخصصًا",
      recommended: "الحجم الموصى به: 800 × 200",
      remove: "قم بإزالة",
      replace: "قم باستبدال",
    },
    message: {
      title: "تخصيص الرسائل",
      description: "قم بتخصيص الرسائل التلقائية التي يتم عرضها لمستعمليك.",
      new: "جديد",
      system: "نظام",
      user: "مستعمل",
      message: "رسالة",
      assistant: "مساعد الدردشة لِـ إني ثينك إلْلْم",
      "double-click": "انقر نقراً مزدوجاً للتحرير...",
      save: "حفظ الرسائل",
    },
    icons: {
      title: "أيقونات التذييل المخصصة",
      description: "تخصيص أيقونات التذييل المعروضة في أسفل الشريط الجانبي.",
      icon: "أيقونة",
      link: "رابط",
    },
  },

  // API Keys
  api: {
    title: " مفاتيح واجهة برمجة التطبيقات.",
    description:
      "تسمح مفاتيح واجهة برمجة التطبيقات  لحامليها بالوصول إلى مثيل إني ثينك إلْلْم هذا وإدارته برمجيًا.",
    link: "اقرأ وثائق واجهة برمجة التطبيقات .",
    generate: "إنشاء مفتاح واجهة برمجة التطبيقات الجديد",
    table: {
      key: "مفتاح واجهة برمجة التطبيقات",
      by: "تم الإنشاء بواسطة",
      created: "تم إنشاؤها",
    },
  },

  llm: {
    title: "تفضيل نموذج التعلم العميق",
    description:
      "هذه هي بيانات الاعتماد والإعدادات الخاصة بنموذج التعلم العميق للمحادثة وموفر التضمين المفضلين لديك . من المهم أن تكون هذه المفاتيح حديثة وصحيحة وإلا فلن يعمل برنامج إني ثينك إلْلْم بشكل صحيح.",
    provider: "موفر نموذج التعلم العميق",
  },

  transcription: {
    title: "تفضيل نموذج النسخ",
    description:
      "هذه هي بيانات الاعتماد والإعدادات الخاصة بموفر نموذج النسخ المفضل لديك. من المهم أن تكون هذه المفاتيح حديثة وصحيحة وإلا فلن يتم نسخ ملفات الوسائط والصوت.",
    provider: "موفر النسخ",
    "warn-start":
      "يمكن أن يؤدي استخدام نموذج الهمس المحلي على الأجهزة ذات ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية المحدودة إلى تعطيل إني ثينك إلْلْم عند معالجة ملفات الوسائط.",
    "warn-recommend":
      "نوصي بذاكرة وصول عشوائي بسعة 2 جيجابايت على الأقل وتحميل ملفات أقل من 10 ميجا بايت.",
    "warn-end": "سيتم تنزيل النموذج المدمج تلقائيًا عند الاستخدام الأول.",
  },

  embedding: {
    title: "تفضيل التضمين",
    "desc-start":
      "عند استخدام نموذج تعلم عميق لا يدعم محرك التضمين أصلاً - قد تحتاج إلى تحديد بيانات الاعتماد بالإضافة إلى ذلك لتضمين النص.",
    "desc-end":
      "التضمين هو عملية تحويل النص إلى متجهات. هذه البيانات مطلوبة لتحويل ملفاتك ومطالباتك إلى تنسيق يمكن لـ إني ثينك إلْلْمْ استخدامه للمعالجة.",
    provider: {
      title: "موفر التضمين",
      description:
        "لا يلزم إجراء أي إعداد عند استخدام محرك التضمين الأصلي الخاص بـ إني ثينك إلْلْمْ.",
    },
  },

  text: {
    title: "تقسيم النص وتفضيلات التقطيع",
    "desc-start":
      "في بعض الأحيان، قد ترغب في تغيير الطريقة الافتراضية التي يتم بها تقسيم المستندات الجديدة وتقطيعها قبل إدراجها في قاعدة بيانات المتجهة الخاصة بك.",
    "desc-end":
      "يجب عليك فقط تعديل هذا الإعداد إذا كنت تفهم كيفية عمل تقسيم النص وتأثيراته الجانبية.",
    "warn-start": "التغييرات هنا سوف تنطبق فقط على",
    "warn-center": "المستندات المضمنة حديثًا",
    "warn-end": "، وليس على المستندات الموجودة.",
    size: {
      title: "حجم قطعة النص",
      description:
        "هذا هو الحد الأقصى لطول الأحرف التي يمكن أن تكون موجودة في متجهة واحدة.",
      recommend: "الحد الأقصى لطول نموذج التضمين هو",
    },

    overlap: {
      title: "تداخل قطعة النص",
      description:
        "هذا هو الحد الأقصى لتداخل الأحرف الذي يحدث أثناء تقطيع قطعتي نص متجاورتين.",
    },
  },

  // Vector Database
  vector: {
    title: "قاعدة بيانات المتجهة",
    description:
      "هذه هي بيانات الاعتماد والإعدادات الخاصة بكيفية عمل مثيل إني ثينك إلْلْمْ الخاص بك. من المهم أن تكون هذه المفاتيح حالية وصحيحة.",
    provider: {
      title: "موفر قاعدة بيانات المتجهة",
      description: "ليست هناك حاجة تعيين إعدادات لانسديبي .",
    },
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "أدوات المحادثة القابلة للتضمين",
    description:
      "تعتبر أدوات المحادثة القابلة للتضمين عبارة عن واجهات محادثة عامة مرتبطة بمساحة عمل واحدة. تتيح لك هذه الأدوات إنشاء مساحات عمل يمكنك بعد ذلك نشرها .",
    create: "إنشاء تضمين",
    table: {
      workspace: "مساحة العمل",
      chats: "المحادثات المرسلة",
      Active: "المجالات النشطة",
    },
  },

  "embed-chats": {
    title: "تضمين المحادثات",
    export: "تصدير",
    description:
      "هذه هي جميع المحادثات والرسائل المسجلة من أي تضمين قمت بنشره.",
    table: {
      embed: "تضمين",
      sender: "مُرسِل",
      message: "رسالة",
      response: "استجابة",
      at: "أرسلت في",
    },
  },

  multi: {
    title: "وضعية المستعملين المتعددين",
    description:
      "قم بإعداد مثيلك لدعم فريقك من خلال تنشيط وضعية المستعملين المتعددين.",
    enable: {
      "is-enable": "تم تمكين وضعية المستعملين المتعددين",
      enable: "تمكين وضعية المستعملين المتعددين",
      description:
        "افتراضيًا، ستكون أنت المشرف الوحيد. وبصفتك مشرفا ستحتاج إلى إنشاء حسابات لجميع المستعملين أو المشرفين الجدد. لا تفقد كلمة مرورك، حيث يمكن فقط للمستعمل المشرف إعادة تعيين كلمات المرور.",
      username: "اسم المستعمل لحساب المشرف",
      password: "كلمة مرور حساب المشرف",
    },
    password: {
      title: "حماية كلمة المرور",
      description:
        "إحم مثيل إني ثينك إلْلْمْ بكلمة المرور. إذا نسيتها فلا يوجد طريقة لاستردادها، فاحرص على حفظها.",
    },
    instance: {
      title: "حماية كلمة مرور المثيل",
      description:
        "افتراضيًا، ستكون أنت المشرف الوحيد. وبصفتك مشرفا، ستحتاج إلى إنشاء حسابات لجميع المستعملين أو المشرفين الجدد. لا تفقد كلمة مرورك، حيث يمكن فقط لمستعمل مشرف إعادة تعيين كلمات المرور.",
      password: "كلمة مرور المثيل",
    },
  },

  // Event Logs
  event: {
    title: "سجلات الحدث",
    description:
      "عرض كافة الإجراءات والأحداث التي تحدث في هذا المثيل للمراقبة.",
    clear: "محو سجلات الأحداث",
    table: {
      type: "نوع الحدث",
      user: "مستعمِل",
      occurred: "حدث في",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "الخصوصية ومعالجة البيانات",
    description:
      "هذا هو التكوين الخاص بك لكيفية تعامل موفري الطرف الثالث المتصلين و إني ثينك إلْلْمْ مع بياناتك.",
    llm: "اختيار نموذج التعلم العميق",
    embedding: "تفضيلات التضمين",
    vector: "قاعدة بيانات المتجهة",
    anonymous: "تم تمكين القياس المستتر عن بعد ",
  },
};

export default TRANSLATIONS;
