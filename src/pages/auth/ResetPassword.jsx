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
      srcImg={"/LogoSecondary.png"}
      
      title="إعادة تعيين كلمة المرور"
      description="أدخل كلمة مرور قوية لحماية حسابك"
    >

                <form onSubmit={formik.handleSubmit} className="w-full ">
                    <div className="form-fields flex flex-col gap-4 my-4" >
                        <CustomInput
                             name="password"
                             type="password"
                             id="password"
                             labelContent={lang === 'en' ? "Password" : "أدخل كلمة مرور جديدة"}
                             palceholder="********"
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
                             palceholder="********"
                             icon={Lock}
                             iconEyeClosed={EyeClosed}
                             iconsEyeDashed={Eye}
                             formik={formik}
                             lang={lang}
                         />
                    </div>
                    <div className={`terms flex flex-col  w-full mb-4 `}>
                             <div className={`flex items-center gap-2 `}>
                                 <Checkbox
                                     id="terms-conditions"
                                     name="terms-conditions"
                                     checked={formik.values['terms-conditions']}
                                     onCheckedChange={(checked) => formik.setFieldValue('terms-conditions', !!checked)}
                                     onBlur={formik.handleBlur}
                                     className="cursor-pointer text-white w-4.5 h-4.5 rounded-md border-gray-300 data-checked:bg-primary data-checked:border-primary"
                                 />
                                 <label
                                     htmlFor="terms-conditions"
                                     className="text-gray-600 text-sm ms-2 select-none cursor-pointer"
                                 >
                                     {lang === 'en' ? (
                                         <>
                                             I agree to the <span className="font-semibold text-primary text-sm lg:text-base">Terms and Conditions and Privacy Policy</span>
                                         </>
                                     ) : (
                                         <>
                                             أوافق على <span className="font-semibold text-primary text-sm lg:text-base">الشروط والاحكام وسياسة الخصوصية</span>
                                         </>
                                     )}
                                 </label>
                             </div>
                             {formik.touched['terms-conditions'] && formik.errors['terms-conditions'] ? (
                                 <div className="text-red-500 text-xs mt-1">{formik.errors['terms-conditions']}</div>
                             ) : null}
                         </div>
                 <Button
                   type="submit"
                   className="w-full h-12 text-white font-semibold text-sm lg:text-base cursor-pointer rounded-xl bg-primary hover:bg-primary/95 transition-colors"
                 >
                     تعيين كلمة المرور
                 </Button>
      </form>

    </LayoutForms>
  );
}