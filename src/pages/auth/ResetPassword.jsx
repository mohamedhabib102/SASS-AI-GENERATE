import LayoutForms from "@/components/layouts/LayoutForms";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail } from "lucide-react";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";

export default function ResetPassword() {

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      "terms-conditions": false,
    },
    validationSchema,
    onSubmit: (values) => {
    },
  });

  return (
    <LayoutForms
      logo={
        <img
          src="/LogoSecondary.png"
          alt="Logo"
          className="w-100 h-16 mb-10"
        />
      }
      title="نسيت كلمة المرور؟"
      description="أدخل بريدك الالكتروني الذي تستخدمه لاختيار كلمة مرور جديدة."
    >

                <form onSubmit={formik.handleSubmit} className="w-full lg:w-[80%] mx-auto">
                            <div className="form-fields p-4 flex flex-col gap-4 my-4" >
        <CustomInput
          name="email"
          type="email"
          id="email"
          labelContent="البريد الإلكتروني"
          palceholder="أدخل بريدك الإلكتروني"
          icon={Mail}
          formik={formik}
        />
       </div>
        <Button
          type="submit"
          className="w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer"
        >
          ارسال رمز التحقق
        </Button>
      </form>

    </LayoutForms>
  );
}