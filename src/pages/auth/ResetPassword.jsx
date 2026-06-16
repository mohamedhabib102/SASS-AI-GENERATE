import LayoutForms from "@/components/layouts/LayoutForms";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Checkbox } from "@/components/ui/checkbox";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Eye, EyeClosed, Lock } from "lucide-react";

export default function ResetPassword() {
        const { t, i18n } = useTranslation();
        const lang = i18n.language || 'ar';

    const validationSchema = Yup.object({
        password: Yup.string().min(6, lang === 'en' ? 'Password must be at least 6 characters' : 'يجب ادخال 6 احرف ع الاقل').required(lang === 'en' ? 'Password is required' : 'كلمة المرور مطلوبة'),
        'terms-conditions': Yup.boolean().oneOf([true], lang === 'en' ? 'You must agree to the terms and conditions' : 'يجب الموافقة على الشروط والأحكام')
    });

    const formik = useFormik({
        initialValues: {
            password: '',
            'terms-conditions': false,
        },
        validationSchema,
        onSubmit: (values) => {
        }
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
      title="إعادة تعيين كلمة المرور"
      description="أدخل كلمة مرور قوية لحماية حسابك"
    >

                <form onSubmit={formik.handleSubmit} className="w-full lg:w-[80%] mx-auto">
                            <div className="form-fields p-4 flex flex-col gap-4 my-4" >
<CustomInput
                            name="password"
                            type="password"
                            id="password"
                            labelContent={lang === 'en' ? "Password" : "أدخل كلمة مرور جديدة"}
                            palceholder={lang === 'en' ? "Enter your password" : "********"}
                            icon={Lock}
                            iconEyeClosed={EyeClosed}
                            iconsEyeDashed={Eye}
                            formik={formik}
                            lang={lang}
                        />
                        <CustomInput
                            name="password"
                            type="password"
                            id="password"
                            labelContent={lang === 'en' ? "Password" : "تأكيد كلمة المرور"}
                            palceholder={lang === 'en' ? "Enter your password" : "********"}
                            icon={Lock}
                            iconEyeClosed={EyeClosed}
                            iconsEyeDashed={Eye}
                            formik={formik}
                            lang={lang}
                        />
       </div>
       <div className={`terms flex flex-col  w-full `}>
                            <div className={`flex items-center gap-2 `}>
                                <Checkbox
                                    id="terms-conditions"
                                    name="terms-conditions"
                                    checked={formik.values['terms-conditions']}
                                    onCheckedChange={(checked) => formik.setFieldValue('terms-conditions', !!checked)}
                                    onBlur={formik.handleBlur}
                                    className=" cursor-pointer text-white bg-main w-4 h-4 border-gray-400"
                                />
                                <label
                                    htmlFor="terms-conditions"
                                    className="text-gray-600 text-sm ms-2 select-none cursor-pointer"
                                >
                                    {lang === 'en' ? (
                                        <>
                                            I agree to the <span className="font-bold text-primary text-sm lg:text-lg">Terms and Conditions and Privacy Policy</span>
                                        </>
                                    ) : (
                                        <>
                                            أوافق على <span className="font-bold text-primary text-sm lg:text-lg"> الشروط والاحكام وسياسة الخصوصية</span>
                                        </>
                                    )}
                                </label>
                            </div>
                            {formik.touched['terms-conditions'] && formik.errors['terms-conditions'] ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors['terms-conditions']}</div>
                            ) : null}
                        </div>
        <Button
          type="submit"
          className="w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer"
        >
تعيين كلمة المرور        </Button>
      </form>

    </LayoutForms>
  );
}