import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useLang } from "@/hooks/lang/useLang";
import { useForgotPasswordValidationSchema } from "@/features/auth/schemas";
import { useMutation } from "@tanstack/react-query";
import { instanceAxios } from "@/lib/InstanceAxios";
import toast from "react-hot-toast";
import useSendOtp from "../hooks/useSendOtp";

const ForgotPassword = () => {
  const { lang, t } = useLang();


  const {sendOtp, isPending, error} = useSendOtp();

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: useForgotPasswordValidationSchema(),
    onSubmit: (values) => {
      sessionStorage.setItem("phone", values.phone);
      sendOtp(values);
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
            name="phone"
            type="text"
            id="phone"
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

          {
            error &&
            <p className="text-red-500 text-center">
              {error?.response?.message || 'Failed To send OTP code, please try again later.'}
            </p>
          }

          <Button
            type="submit"
            className="w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer"
            onSubmit={()=> formik.handleSubmit()}
          >
            {isPending ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </LayoutForms>
    </section>
  );
};

export default ForgotPassword;