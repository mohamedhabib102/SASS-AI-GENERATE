// data table for only test
export const comparisonTableData = {
  sectionTitle: "قارن بين الباقات بالتفصيل",
  sectionDescription:
    "اطلع على جميع المزايا والقدرات المتاحة في كل باقة لاختيار ما يناسب حجم نشاطك وأهدافك التسويقية.",

  header: {
    plans: [
      {
        key: "empty",
        badge: null,
        name: "الميزة",
        price: "",
        popular: false,
      },
      {
        key: "basic",
        badge: null,
        name: "الأساسية",
        price: "$499",
        popular: false,
      },
      {
        key: "pro",
        badge: "الأكثر شيوعاً",
        name: "الاحترافية",
        price: "$1299",
        popular: true,
      },
      {
        key: "enterprise",
        badge: null,
        name: "المؤسسية",
        price: "مخصص",
        popular: false,
      },
    ],
  },

  body: {
    sections: [
      {
        type: "section",
        title: "إدارة التسويق",
        rows: [
          {
            type: "row",
            feature: "عدد العلامات التجارية",
            values: {
              enterprise: { key: "enterprise", type: "text", value: "غير محدود" },
              pro: { key: "pro", type: "text", value: "حتى 200" },
              basic: { key: "basic", type: "text", value: "حتى 50" },
            },
          },
          {
            type: "row",
            feature: "عدد الحملات النشطة",
            values: {
              enterprise: { key: "enterprise", type: "text", value: "غير محدود" },
              pro: { key: "pro", type: "text", value: "غير محدود" },
              basic: { key: "basic", type: "text", value: "1" },
            },
          },
          {
            type: "row",
            feature: "إدارة فرق العمل",
            values: {
              enterprise: { key: "enterprise", type: "boolean", value: true },
              pro: { key: "pro", type: "boolean", value: true },
              basic: { key: "basic", type: "boolean", value: false },
            },
          },
          {
            type: "row",
            feature: "صلاحيات المستخدمين",
            values: {
              enterprise: { key: "enterprise",type: "text", value: "مخصصة" },
              pro: { key: "pro",type: "text", value: "متقدمة" },
              basic: { key: "basic",type: "text", value: "أساسية" },
            },
          },
          {
            type: "row",
            feature: "لوحة تحكم موحدة",
            values: {
              enterprise: { key: "enterprise", type: "boolean", value: true },
              pro: { key: "pro", type: "boolean", value: true },
              basic: { key: "basic", type: "boolean", value: false },
            },
          },
        ],
      },
      {
        type: "section",
        title: "المحتوى والتخطيط",
        rows: [
          {
            type: "row",
            feature: "جدولة محتوى السوشيال",
            values: {
              enterprise: { key: "enterprise",type: "text", value: "مخصص بالكامل" },
              pro: { key: "pro",type: "text", value: "متقدم" },
              basic: { key: "basic",type: "text", value: "أساسي" },
            },
          },
          {
            type: "row",
            feature: "إدارة محتوى متعددة القنوات",
            values: {
              enterprise: { key: "enterprise", type: "boolean", value: true },
              pro: { key: "pro", type: "boolean", value: true },
              basic: { key: "basic", type: "boolean", value: false },
            },
          },
          {
            type: "row",
            feature: "قوالب منشورات جاهزة",
            values: {
              enterprise: { key: "enterprise", type: "text", value: "مخصصة" },
              pro: { key: "pro", type: "text", value: "متقدمة" },
              basic: { key: "basic", type: "text", value: "محدودة" },
            },
          },
          {
            type: "row",
            feature: "تقويم تسويقي ذكي",
            values: {
              enterprise: { key: "enterprise", type: "boolean", value: true },
              pro: { key: "pro", type: "boolean", value: true },
              basic: { key: "basic", type: "boolean", value: false },
            },
          },
        ],
      },
    ],
  },
};