import LayoutForms from "@/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useLang } from "@/hooks/useLang";
import { useSigninSchema } from "../schemas/signin.schema";
import { useSignIn } from "../hooks/useSignIn";
import ServerError from "@/components/shared/ServerError";
import Loading from "@/components/shared/Loading";

const SignIn = () => {
  const { lang, t } = useLang();
  const validationSchema = useSigninSchema();

  const { mutateAsync: signIn, isPending } = useSignIn();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: async (values) => {
      formik.setStatus("");

      try {
        await signIn(values);
      } catch (error) {
    const key = error?.messageKey;
    const status = error?.response?.status;
   if (status === 401) {
      formik.setStatus(t("errors.invalidCredentials"));
      return;
    }
        if (key) {
          formik.setStatus(t(key));
          return;
        }

        formik.setStatus(t("errors.somethingWentWrong"));
      }
    },
  });

  return (
    <section className="min-h-screen">
      <LayoutForms
        title={t("signIn.title")}
        description={t("signIn.description")}
      >
        <form onSubmit={formik.handleSubmit} className="w-full py-4">
          <div className="form-field flex flex-col gap-4 my-4">

            <CustomInput
              name="email"
              type="email"
              id="email"
              labelContent={t("signIn.emailLabel")}
              palceholder="ahmed@mail.com"
              icon={Mail}
              formik={formik}
              lang={lang}
              disabled={isPending}
            />

            <CustomInput
              name="password"
              type="password"
              id="password"
              labelContent={t("signIn.passwordLabel")}
              palceholder={t("signIn.passwordPlaceholder")}
              icon={Lock}
              iconEyeClosed={EyeClosed}
              iconsEyeDashed={Eye}
              formik={formik}
              lang={lang}
              disabled={isPending}
            />

            <p className="text-primary font-semibold text-md cursor-pointer">
              <Link to="/auth/forgot-password">
                {t("signIn.forgotPassword")}
              </Link>
            </p>

          </div>

          <ServerError message={formik.status} />

          <Button
            type="submit"
            disabled={isPending}
            aria-busy={isPending}
            className="w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer"
          >
            {isPending ? <Loading size={20} /> : t("signIn.submit")}
          </Button>

          <div className="text-gray-600 text-sm mt-4 flex items-center justify-center">
            <p>
              {t("signIn.noAccount")}{" "}
              <Link to="/auth/sign-up" className="text-primary font-bold">
                {t("signIn.signUpLink")}
              </Link>
            </p>
          </div>
        </form>
      </LayoutForms>
    </section>
  );
};

export default SignIn;