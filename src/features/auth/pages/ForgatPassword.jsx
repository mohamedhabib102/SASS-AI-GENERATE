import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useLang } from "@/hooks/lang/useLang";
import { useForgotPasswordValidationSchema } from "@/features/auth/schemas";

const ForgotPassword = () => {
  const { lang, t } = useLang();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phonNumber: "",
    },
    validationSchema: useForgotPasswordValidationSchema(),
    onSubmit: (values) => {
      console.log(values);
      navigate("/auth/otp-code");
    },
  });

  return (
    <section className="min-h-screen">
      <LayoutForms
        srcImg="/logo/logoSecondary.svg"
        title={t("forgotPassword.title")}
        description={t("forgotPassword.description")}
        classLabel="gap-12"
      >
        <form
          onSubmit={formik.handleSubmit}
          className="w-full lg:w-[80%] mx-auto"
        >
          <CustomInput
            name="phonNumber"
            type="tel"
            id="phonNumber"
            labelContent={t("forgotPassword.phoneNumber")}
            palceholder={"01XXXXXXXXX"}
            icon={Phone}
            formik={formik}
            lang={lang}
            inputMode="numeric"
            maxLength={11}
            onKeyDown={(e) => {
              if (
                !/[0-9]/.test(e.key) &&
                ![
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "Tab",
                ].includes(e.key)
              ) {
                e.preventDefault();
              }
            }}
          />

          <Button
            type="submit"
            className="w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer"
          >
            {t("forgotPassword.submit")}
          </Button>
        </form>
      </LayoutForms>
    </section>
  );
};

export default ForgotPassword;
