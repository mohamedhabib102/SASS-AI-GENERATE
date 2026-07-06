import LayoutForms from "@/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeClosed, Lock, Mail, User, Phone } from "lucide-react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "@/hooks/useLang";
import Loading from "@/components/shared/Loading";
import { useRegister } from "@/features/auth/hooks/useSignUp";
import { useSignUpSchema } from "../schemas/signup.schema";

const SignUp = () => {
  const { lang, t } = useLang();
  const {
    mutateAsync,
    isPending: loadingRegister,
  } = useRegister();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",
      // "terms-conditions": false,
    },
    validationSchema: useSignUpSchema(),
    onSubmit: async (values) => {
      try {
        const data = {
          name: values.name,
          phone: values.phone,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation
        };
        const res = await mutateAsync(data);
        navigate("/company/create-profile");
        console.log(res);
      } catch (error) {
        const st = error?.response?.status;
        const msg = error?.response?.data?.errors;
        
        switch (st) {
          case 422:
            if (msg) {
              const newErrors = {};
              const newTouched = {};

              if (msg.email) {
                newErrors.email = t("erros.emailErrorSignup");
                newTouched.email = true;
              }
              if (msg.phone) {
                newErrors.phone = t("erros.phoneErrorSignup");
                newTouched.phone = true;
              }

              if (Object.keys(newErrors).length > 0) {
                formik.setErrors({ ...formik.errors, ...newErrors });
                formik.setTouched({ ...formik.touched, ...newTouched }, false);
              }
            }
            break;
          default:
            console.error("Signup error:", error);
            break;
        }
      }
    },
  });



  return (
    <section className="min-h-screen">
      <LayoutForms
        title={t("signUp.title")}
        description={t("signUp.description")}
      >
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="form-fields flex flex-col gap-3 my-2">
            <CustomInput
              name="name"
              type="text"
              id="name"
              disabled={loadingRegister}
              labelContent={t("signUp.fullNameLabel")}
              palceholder={t("signUp.fullNamePlaceholder")}
              icon={User}
              formik={formik}
              lang={lang}
            />
            <CustomInput
              name="phone"
              type="text"
              id="phone"
              labelContent={lang === "en" ? "Phone Number" : "رقم الهاتف"}
              palceholder="201068984478+"
              icon={Phone}
              disabled={loadingRegister}
              formik={formik}
              lang={lang}
            />
            <CustomInput
              name="email"
              type="email"
              id="email"
              labelContent={t("signUp.emailLabel")}
              palceholder="mowafy.dev@gmail.com"
              icon={Mail}
              disabled={loadingRegister}
              formik={formik}
              lang={lang}
            />
            <CustomInput
              name="password"
              type="password"
              id="password"
              labelContent={t("signUp.passwordLabel")}
              palceholder={t("signUp.passwordPlaceholder")}
              icon={Lock}
              disabled={loadingRegister}
              iconEyeClosed={EyeClosed}
              iconsEyeDashed={Eye}
              formik={formik}
              lang={lang}
            />
            <CustomInput
              name="password_confirmation"
              type="password"
              id="password_confirmation"
              labelContent={t("signUp.confPasswordLabel")}
              palceholder={t("signUp.confPasswordPlaceholder")}
              icon={Lock}
              disabled={loadingRegister}
              iconEyeClosed={EyeClosed}
              iconsEyeDashed={Eye}
              formik={formik}
              lang={lang}
            />

            {/* terms and conditions */}
            {/* <div className="terms flex flex-col w-full">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms-conditions"
                  name="terms-conditions"
                  disabled={loadingRegister}
                  checked={formik.values["terms-conditions"]}
                  onCheckedChange={(checked) =>
                    formik.setFieldValue("terms-conditions", !!checked)
                  }
                  onBlur={formik.handleBlur}
                  className="cursor-pointer text-white w-4.5 h-4.5 rounded-md border-gray-300 data-checked:bg-primary data-checked:border-primary"
                />
                <label
                  htmlFor="terms-conditions"
                  className="text-gray-600 text-xs ms-2 select-none cursor-pointer"
                >
                  {lang === "en" ? (
                    <>
                      I agree to the{" "}
                      <span className="font-semibold text-primary text-xs lg:text-sm">
                        Terms and Conditions and Privacy Policy
                      </span>
                    </>
                  ) : (
                    <>
                      أوافق على{" "}
                      <span className="font-semibold text-primary text-xs lg:text-sm">
                        الشروط والاحكام وسياسة الخصوصية
                      </span>
                    </>
                  )}
                </label>
              </div>
              {formik.touched["terms-conditions"] &&
              formik.errors["terms-conditions"] ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors["terms-conditions"]}
                </div>
              ) : null}
            </div> */}
          </div>

          {/* submit btn */}
          <Button
            disabled={loadingRegister}
            type="submit"
            className="w-full mt-4 py-6 text-white font-semibold text-md"
          >
            {loadingRegister ? <Loading size={20} /> : t("signUp.submit")}
          </Button>

          {/* divider */}
          <div className="or flex items-center gap-3 my-2.5">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400 font-medium select-none">
              {t("signUp.or")}
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>



          {/* has account redirect */}
          <div className="text-gray-500 text-xs mt-3 flex items-center justify-center">
            <p>
              {t("signUp.hasAccount")}{" "}
              <Link to="/auth/sign-in" className="text-primary font-bold">
                {t("signUp.signInLink")}
              </Link>
            </p>
          </div>
        </form>
      </LayoutForms>
    </section>
  );
};

export default SignUp;
