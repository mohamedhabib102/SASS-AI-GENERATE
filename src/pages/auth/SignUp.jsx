import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormik } from "formik";
import { Eye, EyeClosed, Lock, Mail, User, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as Yup from 'yup'

const SignUp = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'ar';

    const validationSchema = Yup.object({
        fullName: Yup.string().required(lang === 'en' ? 'Full name is required' : 'الأسم كامل مطلوب'),
        phone: Yup.string()
            .matches(/^[0-9+ ]+$/, lang === 'en' ? 'Invalid phone number' : 'رقم الهاتف غير صالح')
            .required(lang === 'en' ? 'Phone number is required' : 'رقم الهاتف مطلوب'),
        email: Yup.string().email(lang === 'en' ? 'Invalid email address' : 'البريد الإلكتروني غير صالح').required(lang === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب'),
        password: Yup.string().min(6, lang === 'en' ? 'Password must be at least 6 characters' : 'كلمة المرور مطلوبه').required(lang === 'en' ? 'Password is required' : 'كلمة المرور مطلوبة'),
        confPassowrd: Yup.string()
            .oneOf([Yup.ref('password'), null], lang === 'en' ? 'Passwords must match' : 'كلمة المرور غير متطابقة')
            .required(lang === 'en' ? 'Confirm password is required' : 'تأكيد كلمة المرور مطلوب'),
        'terms-conditions': Yup.boolean().oneOf([true], lang === 'en' ? 'You must agree to the terms and conditions' : 'يجب الموافقة على الشروط والأحكام')
    });

    const formik = useFormik({
        initialValues: {
            fullName: "",
            phone: "",
            email: '',
            password: '',
            confPassowrd: "",
            'terms-conditions': false,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });


    return (
        <section className="min-h-screen">
            <LayoutForms
            title={lang === 'en' ? "Create a New Account" : " إنشاء حساب جديد "}
            description={lang === 'en' ? "Create your account to manage your marketing campaigns smartly in minutes." : "أنشئ حسابك لادارة حملاتك التسويقية بذكاء خلال دقائق."}
            >
                <form onSubmit={formik.handleSubmit} className="w-full ">
                    <div className="form-fields flex flex-col gap-3 my-2" >
                        <CustomInput
                            name="fullName"
                            type="text"
                            id="fName"
                            labelContent={lang === 'en' ? "Full Name" : "الاسم كامل"}
                            palceholder={lang === 'en' ? "Rania Bakr" : "رانيا بكر"}
                            icon={User}
                            formik={formik}
                            lang={lang}
                        />

                        <CustomInput
                            name="phone"
                            type="text"
                            id="phone"
                            labelContent={lang === 'en' ? "Phone Number" : "رقم الهاتف"}
                            palceholder="201068984478+"
                            icon={Phone}
                            formik={formik}
                            lang={lang}
                        />

                        <CustomInput
                            name="email"
                            type="email"
                            id="email"
                            labelContent={lang === 'en' ? "Email Address" : "البريد الالكتروني"}
                            palceholder="rania@gmail.com"
                            icon={Mail}
                            formik={formik}
                            lang={lang}
                        />

                        <CustomInput
                            name="password"
                            type="password"
                            id="password"
                            labelContent={lang === 'en' ? "Password" : "كلمة المرور"}
                            palceholder="********"
                            icon={Lock}
                            iconEyeClosed={EyeClosed}
                            iconsEyeDashed={Eye}
                            formik={formik}
                            lang={lang}
                        />

                        <CustomInput
                            name="confPassowrd"
                            type="password"
                            id="confPassowrd"
                            labelContent={lang === 'en' ? "Confirm Password" : "تأكيد كلمة المرور"}
                            palceholder="********"
                            icon={Lock}
                            iconEyeClosed={EyeClosed}
                            iconsEyeDashed={Eye}
                            formik={formik}
                            lang={lang}
                        />
                        {/* terms and conditions */}
                        <div className={`terms flex flex-col  w-full`}>
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
                                    className="text-gray-600 text-xs ms-2 select-none cursor-pointer"
                                >
                                    {lang === 'en' ? (
                                        <>
                                            I agree to the <span className="font-semibold text-primary text-xs lg:text-sm">Terms and Conditions and Privacy Policy</span>
                                        </>
                                    ) : (
                                        <>
                                            أوافق على <span className="font-semibold text-primary text-xs lg:text-sm">الشروط والاحكام وسياسة الخصوصية</span>
                                        </>
                                    )}
                                </label>
                            </div>
                            {formik.touched['terms-conditions'] && formik.errors['terms-conditions'] ? (
                                <div className="text-red-500 text-xs mt-1">{formik.errors['terms-conditions']}</div>
                            ) : null}
                        </div>
                    </div>
                    {/* submit btn */}
                    <Button
                    type="submit"
                    className="w-full h-10 text-white font-semibold text-xs lg:text-sm cursor-pointer rounded-lg bg-primary hover:bg-primary/95 transition-colors">
                         {lang === 'en' ? "Create Account" : "انشاء حساب"}
                    </Button>
                    {/* divider */}
                    <div className="or flex items-center gap-3 my-2.5">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-xs text-gray-400 font-medium select-none">{lang === 'en' ? "Or" : "أو"}</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                    {/* sign up with google */}
                    <div className="google-auth flex items-center justify-center mt-2.5">
                        <button
                            type="button"
                            className="w-full h-10 flex items-center justify-center rounded-lg cursor-pointer gap-2 border-gray-200 border text-gray-700 font-semibold text-xs lg:text-sm hover:bg-gray-50 transition-colors"
                        >
                            <img src="/google.png" alt="google image" loading="lazy" className="h-4.5 w-4.5" />
                            <span>{lang === 'en' ? "Sign up with Google" : "تسجيل الدخول"}</span>
                        </button>
                    </div>
                    {/* has account redirect */}
                    <div className="text-gray-500 text-xs mt-3 flex items-center justify-center">
                        <p>{lang === 'en' ? "Already have an account? " : "لديك حساب بالفعل؟ "} <Link to="/auth/sign-in" className="text-primary font-bold">{lang === 'en' ? "Sign In" : "تسجيل الدخول"}</Link></p>
                    </div>
                </form>
            </LayoutForms>
        </section>
    )
};export default SignUp;