import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useResetPasswordValidationSchema } from "@/hooks/validations";
import { useLang } from "@/hooks/lang/useLang";
import { useFormik } from "formik";
import { Eye, EyeClosed, Lock } from "lucide-react";

export default function ResetPassword() {
    const { t, lang } = useLang();

    const formik = useFormik({
        initialValues: {
            password: '',
            confPassword: '',
            'terms-conditions': false,
        },
        validationSchema: useResetPasswordValidationSchema(),
        onSubmit: (values) => {
            console.log(values);
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
            title={t('resetPassword.title')}
            description={t('resetPassword.description')}
        >
            <form onSubmit={formik.handleSubmit} className="w-full ">
                <div className="form-fields p-4 flex flex-col gap-4 my-4">
                    <CustomInput
                        name="password"
                        type="password"
                        id="password"
                        labelContent={t('resetPassword.newPasswordLabel')}
                        palceholder={t('resetPassword.newPasswordPlaceholder')}
                        icon={Lock}
                        iconEyeClosed={EyeClosed}
                        iconsEyeDashed={Eye}
                        formik={formik}
                        lang={lang}
                    />
                    <CustomInput
                        name="confPassword"
                        type="password"
                        id="confPassword"
                        labelContent={t('resetPassword.confPasswordLabel')}
                        palceholder={t('resetPassword.confPasswordPlaceholder')}
                        icon={Lock}
                        iconEyeClosed={EyeClosed}
                        iconsEyeDashed={Eye}
                        formik={formik}
                        lang={lang}
                    />
                </div>
                <div className="terms flex flex-col w-full">
                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="terms-conditions"
                            name="terms-conditions"
                            checked={formik.values['terms-conditions']}
                            onCheckedChange={(checked) => formik.setFieldValue('terms-conditions', !!checked)}
                            onBlur={formik.handleBlur}
                            className="cursor-pointer text-white bg-main w-4 h-4 border-gray-400"
                        />
                        <label
                            htmlFor="terms-conditions"
                            className="text-gray-600 text-sm ms-2 select-none cursor-pointer"
                        >
                            {t('resetPassword.termsText')}
                            <span className="font-bold text-primary text-sm lg:text-lg">
                                {t('resetPassword.termsLink')}
                            </span>
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
                    {t('resetPassword.submit')}
                </Button>
            </form>
        </LayoutForms>
    );
}


