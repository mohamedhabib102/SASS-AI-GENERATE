import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useLang } from "@/hooks/lang/useLang";
import { useForgotPasswordValidationSchema } from "@/hooks/validations";

const ForgotPassword = () => {
  const { lang, t } = useLang();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
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
            name="email"
            type="email"
            id="email"
            labelContent={t("forgotPassword.emailLabel")}
            palceholder={t("forgotPassword.emailPlaceholder")}
            icon={Mail}
            formik={formik}
            lang={lang}
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
