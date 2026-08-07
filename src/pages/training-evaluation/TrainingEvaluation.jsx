import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Layout, 
  AlertTriangle, 
  CheckCircle, 
  BookOpen, 
  Award, 
  Terminal, 
  Globe, 
  Lock, 
  Zap 
} from "lucide-react";
import CustomContainer from "@/components/shared/CustomContainer";

const TrainingEvaluation = () => {
  const [activeTab, setActiveTab] = useState("all");

  const evaluationData = {
    frontend: {
      teamName: "تيم الفرونت-إند (Frontend Team)",
      score: 5,
      maxScore: 10,
      badge: "تصميم ممتاز وأداء برمجي يحتاج تطوير",
      icon: Layout,
      color: "from-blue-500 to-indigo-600",
      textColor: "text-indigo-600",
      issues: [
        {
          title: "استدعاء الـ API بـ Method خاطئ",
          desc: "استدعاء مسار بيانات الاتصال (information-contact) باستخدام POST بدلاً من GET، مما تسبب في إرجاع خطأ 422 لعدم وجود بيانات التحقق للـ Store.",
        },
        {
          title: "غياب توكن المصادقة (Missing Token Header)",
          desc: "تسجيل الدخول ينجح ويخزن التوكن، ولكن لم يتم إرساله تلقائياً في هيدر الطلبات اللاحقة، مما عطل كامل الصفحات المحمية برمز استجابة 401.",
        },
        {
          title: "تثبيت روابط السيرفر (Hardcoded URLs)",
          desc: "تثبيت الرابط الرئيسي بدون مراعاة النطاقات الفرعية (Subdomains)، مما عطل تتبع المستأجرين (NeedsTenant) على السيرفر المحلي والإنتاجي.",
        },
        {
          title: "عناوين المسارات النسبية (Relative Path Issues)",
          desc: "تجاهل كتابة السلاش البادئ (/) في مسارات الصفحات الرئيسية مثل (api/manage-services)، مما تسبب في دمج روابط خاطئة عند التنقل.",
        }
      ],
      solutions: [
        {
          title: "تصحيح الـ Request Methods",
          desc: "تم تحويل دالة جلب البيانات لتستخدم GET بدلاً من POST لتعرض البيانات مباشرة.",
        },
        {
          title: "بناء Interceptor مركزي للتوكن",
          desc: "تعديل ملف الأكسيوس لحقن التوكن (Authorization Bearer) تلقائياً من الـ sessionStorage في رأس كل طلب بدون تدخل يدوي.",
        },
        {
          title: "ديناميكية الـ Subdomain Routing",
          desc: "برمجة دالة baseUrl لقراءة النطاق الحالي من المتصفح وتوجيهه ديناميكياً للـ Subdomain المطابق في الباك-إند.",
        }
      ],
      studyPath: [
        "RESTful API Concepts & HTTP Methods",
        "Axios Request/Response Interceptors",
        "Multi-tenant routing (Subdomains) in SPAs",
        "Defensive coding and dynamic env configurations"
      ]
    },
    backend: {
      teamName: "تيم الباك-إند (Backend Team)",
      score: 4,
      maxScore: 10,
      badge: "بنية جداول جيدة وإهمال كامل لعزل الداتا والأمان",
      icon: Code,
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-600",
      issues: [
        {
          title: "مسارات وهمية بمتحكمات مفقودة (Missing Controllers)",
          desc: "تسجيل مسارات في api.php تشير لمتحكمات غير موجودة نهائياً بالملفات (مثل ContactInformationController)، مما يسبب انهيار النظام عند الاتصال.",
        },
        {
          title: "مخالفة معايير التسمية (PSR-4 Autoloading Warning)",
          desc: "تسمية ملف الريبوزيتوري بحرف صغير (dashboardRepository.php) والكلاس بحرف كبير، مما يعطل تشغيل النظام على بيئات Linux.",
        },
        {
          title: "تشتيت وخلط في جداول قاعدة البيانات",
          desc: "تسجيل الموظفين كـ Users وصلاحية employee، بينما العدادات ولوحة التحكم تقرأ من جدول Employee الفارغ، فظهر عدد الموظفين دائماً 0.",
        },
        {
          title: "غياب عزل بيانات المستأجرين (No Tenant Isolation)",
          desc: "ثغرة أمنية كبرى؛ عدم ربط جداول الواجهة والرسائل بالمستأجر، مما سمح لشركة ما بقراءة رسائل تواصل واستفسارات شركة منافسة تماماً.",
        },
        {
          title: "قصور في لوحات التحكم (Missing Filament Resources)",
          desc: "إهمال كامل لإنشاء لوحات تحكم للمستأجرين لتعديل الهيدر، اللوجو، الهيرو، معلومات التواصل، الآراء، من نحن."
        }
      ],
      solutions: [
        {
          title: "تنظيف وهيكلة المسارات",
          desc: "حذف المسارات الميتة والمكررة وربط المتاح بالمتحكمات الصحيحة والموجودة فعلياً.",
        },
        {
          title: "ضبط التسميات والتوافق التلقائي",
          desc: "تعديل أسماء الملفات لتطابق الكلاسات وحل مشكلة الـ Autoload بالكامل.",
        },
        {
          title: "تطبيق عزل البيانات الشامل (SaaS Scoping)",
          desc: "إنشاء هجرة داتابيز لإضافة tenant_id للجداول ودمج الترايت BelongsToTenant لضمان عزل البيانات وحمايتها.",
        },
        {
          title: "بناء 9 لوحات Filament جديدة وتغذيتها",
          desc: "إنشاء كامل لوحات التحكم للموقع وتغذيتها بالبيانات الافتراضية عبر Seeder متكامل للـ Tenant servv.",
        }
      ],
      studyPath: [
        "PSR Autoloading Standards & Capitalization",
        "SaaS Multi-tenancy Architecture (Single vs Multi-DB)",
        "Advanced Filament Custom Resources & Relations",
        "Data Scoping & Query Isolation in Laravel Models"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans" dir="rtl">
      <CustomContainer>
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full tracking-wider uppercase inline-block mb-3"
          >
            شركة سيرف ٥ (Servv 5) - تدريب ٢٠٢٦
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            نتائج وتقييم تدريب فريق العمل
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-2 text-sm font-semibold text-slate-700"
          >
            تم إصدار التقرير بواسطة: المهندس محمد سليمان
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 max-w-2xl mx-auto text-slate-500 text-base"
          >
            مراجعة فنية تفصيلية للكود المكتوب في لوحة التحكم (Filament)، خطط الـ SaaS، والـ APIs، مع إرشادات تحسين كفاءة كتابة الأكواد.
          </motion.p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-2 space-x-reverse mb-8">
          {[
            { id: "all", label: "الكل" },
            { id: "frontend", label: "تيم الفرونت-إند" },
            { id: "backend", label: "تيم الباك-إند" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Teams List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {Object.entries(evaluationData).map(([key, data]) => {
              if (activeTab !== "all" && activeTab !== key) return null;
              const TeamIcon = data.icon;

              return (
                <motion.div
                  key={key}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  {/* Team Card Header */}
                  <div className={`p-6 bg-gradient-to-r ${data.color} text-white relative overflow-hidden`}>
                    <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-10">
                      <TeamIcon size={120} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="p-2 bg-white/10 rounded-lg">
                          <TeamIcon size={24} />
                        </div>
                        <h2 className="text-xl font-bold">{data.teamName}</h2>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <Award size={16} />
                        <span className="text-sm font-bold">{data.score} / {data.maxScore}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-white/80 text-sm font-medium">{data.badge}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-6">
                    {/* Issues Section */}
                    <div>
                      <div className="flex items-center space-x-2 space-x-reverse mb-3 text-amber-600">
                        <AlertTriangle size={18} />
                        <h3 className="font-bold text-sm">المشاكل والأخطاء المكتشفة</h3>
                      </div>
                      <div className="space-y-3">
                        {data.issues.map((issue, idx) => (
                          <div key={idx} className="p-3.5 bg-amber-50/50 rounded-xl border border-amber-100">
                            <h4 className="font-bold text-sm text-amber-900">{issue.title}</h4>
                            <p className="text-xs text-amber-700/90 mt-1 leading-relaxed">{issue.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions Section */}
                    <div>
                      <div className="flex items-center space-x-2 space-x-reverse mb-3 text-emerald-600">
                        <CheckCircle size={18} />
                        <h3 className="font-bold text-sm">كيف قمنا بحلها</h3>
                      </div>
                      <div className="space-y-3">
                        {data.solutions.map((sol, idx) => (
                          <div key={idx} className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100">
                            <h4 className="font-bold text-sm text-emerald-900">{sol.title}</h4>
                            <p className="text-xs text-emerald-700/90 mt-1 leading-relaxed">{sol.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Study Path Section */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center space-x-2 space-x-reverse mb-3 text-slate-800">
                        <BookOpen size={18} />
                        <h3 className="font-bold text-sm">المواضيع المطلوبة للمذاكرة والتطوير</h3>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {data.studyPath.map((topic, idx) => (
                          <li key={idx} className="flex items-center space-x-2 space-x-reverse text-xs text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Final Grade Badge */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">التقييم الفني النهائي:</span>
                      <span className={`text-lg font-black ${data.textColor}`}>
                        {data.score >= 5 ? "متوسط / مقبول" : "ضعيف / يحتاج إعادة توجيه"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </CustomContainer>
    </div>
  );
};

export default TrainingEvaluation;
