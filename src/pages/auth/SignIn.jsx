import LayoutForms from "@/components/layouts/LayoutForms";
import { Button } from "@/components/ui/button";
import SubmitBtn from "@/components/ui/customUI/SubmitBtn";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const SignIn = () => {

    const formik =useFormik({
        initialValues: {
            email:'',
            password:'',
            'terms-conditions': false,
        },
        // validationSchema,
        onSubmit:(values)=> {
            console.log('submit')
        }
    })


    return (
        <section className="min-h-screen">
            <LayoutForms
            title={"تسجيل الدخول"}
            description={"سجل الدخول لاداره معارض الكتب والفاعليات الثقافيه"}
            >
                <form onSubmit={formik.handleSubmit} className="w-full lg:w-[80%] mx-auto">
                    <div className="form-fields p-4 flex flex-col gap-4 my-4" >
                        <div className="terms flex items-center gap-2">
                            <input type="checkbox" id="terms-conditions"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                            <label htmlFor="terms-conditions"
                            name="terms-conditions"
                            className="text-gray-600 text-sm">
                            أوافق على <span className="font-bold text-primary text-sm lg:text-lg"> الشروط والاحكام وسياسة الخصوصية</span>
                            </label>
                        </div>
                    </div>
                    {/* submit btn */}
                    <Button
                    type="submit"
                    className={'w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer'}>
                        تسجيل الدخول
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
                        <p>ليس لديك حساب بعد؟ <Link to="/auth/sign-up" className="text-primary font-bold">انشاء حساب جديد</Link></p>
                    </div>
                </form>
            </LayoutForms>
        </section>
    )
};export default SignIn;