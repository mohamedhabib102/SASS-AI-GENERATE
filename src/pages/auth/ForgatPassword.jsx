import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Mail } from "lucide-react";
import logoMain from "@/assets/logo/logoMain.svg";
// import SubmitBtn from "@/components/shared/SubmitBtn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// Validation
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
});

// ========== Jsx ========== //
const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="min-h-screen">
      <LayoutForms
        srcImg={logoMain}
        title={"نسيت كلمة المرور؟"}
        description={
          "أدخل بريدك الالكتروني الذي تستخدمه لاختيار كلمة مرور جديدة."
        }
        classLabel={'gap-12'}
      >
        <div className="w-full lg:w-[80%] mx-auto">
          <CustomInput
            name={"email"}
            type={"email"}
            classLabel=""
            id={"email"}
            labelContent={"البريد الألكتروني"}
            palceholder={"أدخل بريدك الألكتروني"}
            icon={Mail}
            className={
              "pr-8 w-full tetx-sm text-[#9E9E9E] block outline-none border-[#E5E5E5] border rounded-lg px-4 py-2"
            }
            formik={formik}
          />

          {/* btn send otp */}
          <Link to={"/auth/otp-code"}>
            <Button
              type="submit"
              className={
                "w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer"
              }
            >
              ارسال رمز التحقق{" "}
            </Button>
          </Link>
        </div>
      </LayoutForms>
    </section>
  );
};

export default ForgotPassword;
