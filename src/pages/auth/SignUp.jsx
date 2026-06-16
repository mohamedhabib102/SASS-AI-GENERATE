import LayoutForms from "@/components/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormik } from "formik";
import { Eye, EyeClosed, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'

const validationSchema = Yup.object({
    fullName: Yup.string().email('الأسم كامل مطلوب').required('البريد الإلكتروني مطلوب'),
    email: Yup.string().email('البريد الإلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
    password: Yup.string().min(6, 'كلمة المرور مطلوبه').required('كلمة المرور مطلوبة'),
    confPassowrd: Yup.string().min(6, 'كلمة المرور مطلوبه').required('كلمة المرور مطلوبة'),
    'terms-conditions': Yup.boolean().oneOf([true], 'يجب الموافقة على الشروط والأحكام')
})

const SignUp = () => {
    const formik =useFormik({
        initialValues: {
            fullName: "",
            email:'',
            password:'',
            confPassowrd: "",
            'terms-conditions': false,
        },
        validationSchema,
        onSubmit:(values)=> {
            console.log(values)
        }
    })


    return (
        <section className="min-h-screen">
            <LayoutForms
            title={" إنشاء حساب جديد "}
            description={"أنشئ حسابك لادارة حملاتك التسويقية بذكاء خلال دقائق."}
            >
                <form onSubmit={formik.handleSubmit} className="w-full lg:w-[80%] mx-auto">
                    <div className="form-fields p-4 flex flex-col gap-4 my-4" >
                        <CustomInput
                            name="fullName"
                            type="text"
                            id="fName"
                            labelContent="الأسم كامل"
                            palceholder="محمد موافي"
                            icon={User}
                            formik={formik}
                        />

                        <CustomInput
                            name="email"
                            type="email"
                            id="email"
                            labelContent="البريد الألكتروني"
                            palceholder="mowafy.dev@gmail.com"
                            icon={Mail}
                            formik={formik}
                        />


                        <CustomInput
                            name="password"
                            type="password"
                            id="password"
                            labelContent="كلمة المرور"
                            palceholder="أدخل كلمة المرور"
                            icon={Lock}
                            iconEyeClosed={EyeClosed}
                            iconsEyeDashed={Eye}
                            formik={formik}
                        />

                         
                        <CustomInput
                            name="confPassowrd"
                            type="password"
                            id="confPassowrd"
                            labelContent="إعادة كلمة المرور"
                            palceholder="إعادة كلمة المرور"
                            icon={Lock}
                            iconEyeClosed={EyeClosed}
                            iconsEyeDashed={Eye}
                            formik={formik}
                        />
                        {/* terms and conditions */}
                        <div className="terms flex items-star flex-col  justify-start ">
                            <div className="flex items-center">
                                <Checkbox
                                 id={"terms-conditions"}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="text-white bg-main w-4 h-4 border-gray-400"
                                />
                                <label htmlFor="terms-conditions"
                                name="terms-conditions"
                                className="text-gray-600 text-sm mr-2">
                                أوافق على <span className="font-bold text-primary text-sm lg:text-lg"> الشروط والاحكام وسياسة الخصوصية</span>
                                </label>
                            </div>
                            {
                                formik.touched['terms-conditions'] && formik.errors['terms-conditions'] ? (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors['terms-conditions']}</div>
                                ) : null
                            }
                        </div>
                    </div>
                    {/* submit btn */}
                    <Button
                    type="submit"
                    className={'w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer'}>
                         انشاء حساب
                    </Button>
                    {/* divider */}
                    <div class="or flex items-center gap-3 my-4">
                        <div class="flex-1 h-px bg-gray-200"></div>
                        <span class="text-sm text-gray-400 font-medium select-none">أو</span>
                        <div class="flex-1 h-px bg-gray-200"></div>
                    </div>
                    {/* sign in with google email */}
                    <div class="google-auth flex items-center justify-center mt-4">
                        <button
                            class="w-full flex items-center justify-center rounded-lg cursor-pointer gap-2 border-gray-200 border py-3 text-gray-600"
                        >
                            <span>تسجيل الدخول</span>
                            <img src="/google.png" alt="google image" loading="lazy"/>
                        </button>
                        </div>
                    {/* has no email */}
                    <div className="text-gray-600 text-sm mt-4 flex items-center justify-center">
                        <p>  لديك حساب بالفعل؟ <Link to="/auth/sign-in" className="text-primary font-bold">انشاء حساب جديد</Link></p>
                    </div>
                </form>
            </LayoutForms>
        </section>
    )
};export default SignUp;