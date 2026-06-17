import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useValidationSchema } from "@/hooks/validations";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useLang } from "@/hooks/lang/useLang";

const SignIn = () => {
    const {lang, t} = useLang()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            'terms-conditions': false,
        },
        validationSchema: useValidationSchema(lang),
        onSubmit: (values) => {
            console.log(values);
        }
    });
    
    return (
        <section className="min-h-screen darl">
            <LayoutForms
            title={t('signIn.title')}
            description={t('signIn.description')}
            >
                <form onSubmit={formik.handleSubmit} className="w-full lg:w-[80%] mx-auto">
                    <div className="form-fields p-4 flex flex-col gap-4 my-4" >
                        <CustomInput
                            name="email"
                            type="email"
                            id="email"
                            labelContent={t('signIn.emailLabel')}
                            palceholder="ahmed@mail.com"
                            icon={Mail}
                            formik={formik}
                            lang={lang}
                        />
                        <CustomInput
                            name="password"
                            type="password"
                            id="password"
                            labelContent={t('signIn.passwordLabel')}
                            palceholder={t('signIn.passwordPlaceholder')}
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
                                    {t('signIn.termsText')}
                                    <span className="font-bold text-primary text-sm lg:text-lg">
                                        {t('signIn.termsLink')}
                                    </span>
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
                        {t('signIn.submit')}
                    </Button>
                    {/* divider */}
                    <div className="or flex items-center gap-3 my-4">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-sm text-gray-400 font-medium select-none">{t('signIn.or')}</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                    {/* sign in with google email */}
                    <div className="google-auth flex items-center justify-center mt-4">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center rounded-lg cursor-pointer gap-2 border-gray-200 border py-3 text-gray-600"
                        >
                            <span>{t('signIn.googleBtn')}</span>
                            <img src="/google.png" alt="google image" loading="lazy"/>
                        </button>
                        </div>
                    {/* has no email */}
                    <div className="text-gray-600 text-sm mt-4 flex items-center justify-center">
                        <p>{t('signIn.noAccount')} <Link to="/auth/sign-up" className="text-primary font-bold">{t('signIn.signUpLink')}</Link></p>
                    </div>
                </form>
            </LayoutForms>
        </section>
    )
};

export default SignIn;