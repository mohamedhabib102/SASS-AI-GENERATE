import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormik } from "formik";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as Yup from 'yup'

const SignIn = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'ar';

    const validationSchema = Yup.object({
        email: Yup.string().email(lang === 'en' ? 'Invalid email address' : 'البريد الإلكتروني غير صالح').required(lang === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب'),
        password: Yup.string().min(6, lang === 'en' ? 'Password must be at least 6 characters' : 'كلمة المرور مطلوبه').required(lang === 'en' ? 'Password is required' : 'كلمة المرور مطلوبة'),
        'terms-conditions': Yup.boolean().oneOf([true], lang === 'en' ? 'You must agree to the terms and conditions' : 'يجب الموافقة على الشروط والأحكام')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            'terms-conditions': false,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });
    
    return (
        <section className="min-h-screen darl">
            <LayoutForms
            title={lang === 'en' ? "Sign In" : "تسجيل الدخول"}
            description={lang === 'en' ? "Sign in to manage book fairs and cultural events" : "سجل الدخول لاداره معارض الكتب والفاعليات الثقافيه"}
            >
                <form onSubmit={formik.handleSubmit} className="w-full lg:w-[80%] mx-auto">
                    <div className="form-fields p-4 flex flex-col gap-4 my-4" >
                        <CustomInput
                            name="email"
                            type="email"
                            id="email"
                            labelContent={lang === 'en' ? "Email Address" : "البريد الإلكتروني"}
                            palceholder="ahmed@mail.com"
                            icon={Mail}
                            formik={formik}
                            lang={lang}
                        />
                        <CustomInput
                            name="password"
                            type="password"
                            id="password"
                            labelContent={lang === 'en' ? "Password" : "كلمة المرور"}
                            palceholder={lang === 'en' ? "Enter your password" : "أدخل كلمة المرور"}
                            icon={Lock}
                            iconEyeClosed={EyeClosed}
                            iconsEyeDashed={Eye}
                            formik={formik}
                            lang={lang}
                        />
                        {/* terms and conditions */}
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
                    </div>
                    {/* submit btn */}
                    <Button
                    type="submit"
                    className={'w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer'}>
                        {lang === 'en' ? "Sign In" : "تسجيل الدخول"}
                    </Button>
                    {/* divider */}
                    <div className="or flex items-center gap-3 my-4">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-sm text-gray-400 font-medium select-none">{lang === 'en' ? "Or" : "أو"}</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                    {/* sign in with google email */}
                    <div className="google-auth flex items-center justify-center mt-4">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center rounded-lg cursor-pointer gap-2 border-gray-200 border py-3 text-gray-600"
                        >
                            <span>{lang === 'en' ? "Sign in with Google" : "تسجيل الدخول باستخدام Google"}</span>
                            <img src="/google.png" alt="google image" loading="lazy"/>
                        </button>
                        </div>
                    {/* has no email */}
                    <div className="text-gray-600 text-sm mt-4 flex items-center justify-center">
                        <p>{lang === 'en' ? "Don't have an account yet? " : "ليس لديك حساب بعد؟ "} <Link to="/auth/sign-up" className="text-primary font-bold">{lang === 'en' ? "Create new account" : "انشاء حساب جديد"}</Link></p>
                    </div>
                </form>
            </LayoutForms>
        </section>
    )
};export default SignIn;
