import { useState, useEffect } from "react";
import LayoutForms from "@/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed, Lock, Mail, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useLang } from "@/hooks/useLang";
import { useSigninSchema } from "@/features/auth/schemas/signin.schema";
import { useSignIn } from "@/features/auth/hooks/useSignIn";
import ServerError from "@/components/shared/ServerError";
import Loading from "@/components/shared/Loading";
import GoogleAuthButton from "./components/GoogleAuthButton";
import { useAuthStore } from "@/store/authStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const SignIn = () => {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const validationSchema = useSigninSchema();
  const { mutateAsync: signIn, isPending } = useSignIn();
  const login = useAuthStore((state) => state.login);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [companyUrl, setCompanyUrl] = useState(null);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer;
    if (dialogOpen && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [dialogOpen, countdown]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: async (values) => {
      formik.setStatus("");

      try {
        const response = await signIn(values);
        const user = response?.data?.user;
        const url = response?.data?.company_url;

        if (url) {
          // If company_url is present, don't store user and don't navigate
          setCompanyUrl(url);
          setCountdown(30);
          setDialogOpen(true);
        } else {
          // Normal client login
          login(user);
          navigate(`/${lang}/profile`);
        }
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
              <Link to={`/${lang}/auth/forgot-password`}>
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

          <GoogleAuthButton />
        </form>
      </LayoutForms>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md text-center flex flex-col items-center">
          <DialogHeader className="w-full">
            <DialogTitle className="text-center text-xl text-primary font-bold">
              {t("signInDialog.title")}
            </DialogTitle>
            <DialogDescription className="text-center text-md text-gray-600 mt-2">
              {t("signInDialog.description")}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center py-6 gap-4">
            {countdown > 0 ? (
              <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin flex items-center justify-center relative">
                <span className="absolute text-primary font-bold text-lg animate-none">
                  {countdown}
                </span>
              </div>
            ) : (
              <Button
                onClick={() => {
                  window.location.href = companyUrl;
                }}
                className="w-full py-6 text-white font-bold bg-primary hover:bg-primary-dark transition-all flex items-center gap-2"
              >
                {t("signInDialog.goToDashboard")}
                <ExternalLink size={20} />
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SignIn;