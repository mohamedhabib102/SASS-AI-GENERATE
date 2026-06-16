import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
});

const ForgotPassword = () => {
  // const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // navigate("/auth/otp-code");
    },
  });

  return (
    <section className="min-h-screen">
      <LayoutForms
        srcImg={"/logo/logoSecondary.svg"}
        title={"نسيت كلمة المرور؟"}
        description={
          "أدخل بريدك الالكتروني الذي تستخدمه لاختيار كلمة مرور جديدة."
        }
        classLabel={"gap-12"}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="w-full lg:w-[80%] mx-auto"
        >
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
        </form>
      </LayoutForms>
    </section>
  );
};

export default ForgotPassword;
