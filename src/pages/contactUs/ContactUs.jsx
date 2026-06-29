import { Phone, Mail, MapPin, Circle } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { useFormik } from "formik";
import CustomInput from "@/components/shared/CustomInput";
import CustomContainer from "@/components/shared/CustomContainer";
import { useLang } from "@/hooks/lang/useLang";
import { useSignUpSchema } from "@/features/auth/schemas/signup.schema";

export default function ContactUs() {
  const { lang, t } = useLang();

  const formik = useFormik({
    initialValues: {
      email: "",
      "terms-conditions": false,
    },
    validationSchema: useSignUpSchema(lang),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <CustomContainer>
      <section className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center relative">
        {/* circl */}
        <div className="w-40 h-40 rounded-full bg-secondary/15 absolute top-[90px] left-[190px] blur-3xl pointer-events-none" />{" "}
        <div
          className="w-40 h-40 rounded-full bg-primary/15 absolute top-[90px] right-[130px]  blur-3xl"
          blur-3xl
        ></div>
        {/* Header */}
        <div className="text-center mb-12 w-full flex flex-col gap-4">
          <div className="flex items-center justify-center gap-2 mx-auto text-sm bg-secondary/10 py-2 px-4 text-center w-fit rounded-full font-semibold">
            <Circle className="w-2 h-2 fill-secondary text-secondary" />
            <span className="text-secondary text-sm font-medium">
              {t("contactUs.badge")}
            </span>
          </div>
          <div className="flex gap-2 justify-center font-semibold text-3xl md:text-[36px]">
            <span className="text-primary">{t("contactUs.title")}</span>
            <span className="text-main">{t("contactUs.title2")}</span>
          </div>
          <p className="text-desc text-[13px] md:text-[18px] max-w-3xl mx-auto leading-6.75 whitespace-pre-wrap ">
            {t("contactUs.description")}
          </p>
        </div>
        {/* Card */}
        <div className="w-full rounded-2xl p-4 sm:py-8 sm:px-6 my-[66px] border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-17 items-center ">
            {/* ======== Form ======== */}
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="text-[20px] font-semibold text-gray-800 mb-1">
                    {t("contactUs.form.title")}
                  </h3>
                  <p className="text-desc text-[16px] font-normal">
                    {t("contactUs.form.subtitle")}
                  </p>
                </div>

                <CustomInput
                  name="name"
                  type="text"
                  id="name"
                  labelContent={t("contactUs.form.name_label")}
                  palceholder={t("contactUs.form.name_placeholder")}
                  icon={Mail}
                  formik={formik}
                  lang={lang}
                />

                <CustomInput
                  name="email"
                  type="email"
                  id="email"
                  labelContent={t("contactUs.form.email_label")}
                  palceholder={t("contactUs.form.email_placeholder")}
                  icon={Mail}
                  formik={formik}
                  lang={lang}
                />

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    {t("contactUs.form.message_label")}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t("contactUs.form.message_placeholder")}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-primary transition resize-none mb-4"
                  />
                </div>

                <button className="w-full text-[16px] cursor-pointer bg-primary hover:bg-violet-700 active:scale-95 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-violet-200">
                  {t("contactUs.form.submit")}
                </button>
              </div>
            </form>

            {/* ======== Contact Info ======== */}
            <div className="bg-table relative rounded-2xl p-6 sm:p-8 flex flex-col gap-6 sm:gap-8 order-1 lg:order-2">
              <div className="hidden md:flex  absolute top-[86px] -right-7 w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-l-[30px] border-l-table" />{" "}
              {/* Header */}
              <div className="mb-3">
                <h3 className="text-[18px] font-medium text-[#222]">
                  {t("contactUs.info.title")}
                </h3>
                <p className="text-[#7A7A7A] text-sm mt-2 leading-6">
                  {t("contactUs.info.subtitle")}
                </p>
              </div>
              {/* Contact Items */}
              <div className="relative flex flex-col gap-3">
                <span
                  className={` hidden md:flex absolute top-3 bottom-3 w-[3px] bg-primary ${lang === "ar" ? "-right-4" : "-left-4"}`}
                ></span>

                {[
                  { icon: Phone, value: t("contactUs.info.phone") },
                  { icon: Mail, value: t("contactUs.info.email") },
                  { icon: MapPin, value: t("contactUs.info.address") },
                ].map(({ icon: Icon, value }) => (
                  <div key={value} className="flex items-center gap-3">
                    <div className="relative z-10 p-3 rounded-full bg-white border border-border flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[#333] text-[14px] md:text-[16px] font-normal">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              {/* Map */}
              <div className="overflow-hidden rounded-2xl h-[160px] sm:h-[184px] w-full">
                <iframe
                  title="map"
                  loading="lazy"
                  className="w-full h-full"
                  src="https://maps.google.com/maps?q=Riyadh,Saudi+Arabia&z=13&output=embed"
                />
              </div>
              {/* Social */}
              <div className="flex flex-col gap-4">
                <p className="font-medium text-lg text-[#222]">
                  {t("contactUs.info.social_label")}
                </p>
                <div className="flex gap-4">
                  {[RiTwitterXFill, FaLinkedinIn, FiFacebook].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        className="w-10 h-10 rounded-full border border-violet-200 bg-white flex items-center justify-center text-primary transition hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomContainer>
  );
}
