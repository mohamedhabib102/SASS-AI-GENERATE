import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useSignUpValidationSchema } from "@/hooks/validations";
import { Eye, EyeClosed, Lock, Mail, User, Phone } from "lucide-react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useLang } from "@/hooks/lang/useLang";

const SignUp = () => {
    const { lang, t } = useLang();

    const formik = useFormik({
        initialValues: {
            fullName: "",
            phone: "",
            email: '',
            password: '',
            confPassowrd: "",
            'terms-conditions': false,
        },
        validationSchema: useSignUpValidationSchema(),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <section className="min-h-screen">
            <LayoutForms
                title={t('signUp.title')}
                description={t('signUp.description')}
            >
                <form onSubmit={formik.handleSubmit} className="w-full">
                    <div className="form-fields flex flex-col gap-3 my-2">
                        <CustomInput
                            name="fullName"
                            type="text"
                            id="fName"
                            labelContent={t('signUp.fullNameLabel')}
                            palceholder={t('signUp.fullNamePlaceholder')}
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
                            labelContent={t('signUp.emailLabel')}
                            palceholder="mowafy.dev@gmail.com"
                            icon={Mail}
                            formik={formik}
                            lang={lang}
                        />
                        <CustomInput
                            name="password"
                            type="password"
                            id="password"
                            labelContent={t('signUp.passwordLabel')}
                            palceholder={t('signUp.passwordPlaceholder')}
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
                            labelContent={t('signUp.confPasswordLabel')}
                            palceholder={t('signUp.confPasswordPlaceholder')}
                            icon={Lock}
                            iconEyeClosed={EyeClosed}
                            iconsEyeDashed={Eye}
                            formik={formik}
                            lang={lang}
                        />

                        {/* terms and conditions */}
                        <div className="terms flex flex-col w-full">
                            <div className="flex items-center gap-2">
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
                        className="w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer"
                    >
                        {t('signUp.submit')}
                    </Button>

                    {/* divider */}
                    <div className="or flex items-center gap-3 my-2.5">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-sm text-gray-400 font-medium select-none">{t('signUp.or')}</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* sign up with google */}
                    <div className="google-auth flex items-center justify-center mt-2.5">
                        <button
                            type="button"
                            className="w-full h-10 flex items-center justify-center rounded-lg cursor-pointer gap-2 border-gray-200 border text-gray-700 font-semibold text-xs lg:text-sm hover:bg-gray-50 transition-colors"
                        >
                            <img src="/images/google.png" alt="google image" loading="lazy" className="h-4.5 w-4.5" />
                            <span>{t('signUp.googleBtn')}</span>
                        </button>
                    </div>

                    {/* has account redirect */}
                    <div className="text-gray-500 text-xs mt-3 flex items-center justify-center">
                        <p>
                            {t('signUp.hasAccount')}{" "}
                            <Link to="/auth/sign-in" className="text-primary font-bold">
                                {t('signUp.signInLink')}
                            </Link>
                        </p>
                    </div>
                </form>
            </LayoutForms>
        </section>
    );
};

export default SignUp;