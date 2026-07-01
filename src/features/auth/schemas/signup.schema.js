import * as Yup from "yup";
import { useLang } from "@/hooks/lang/useLang";

export const useSignUpSchema = () => {
  const { t } = useLang();
  return Yup.object({
    name: Yup.string().required(t("validations.fullNameRequired")),
    phone: Yup.string().matches(
      /^01[0125][0-9]{8}$/,
      t("validations.phoneInvalid")
    ),
    email: Yup.string()
      .email(t("validations.emailInvalid"))
      .required(t("validations.emailRequired")),
    password: Yup.string()
      .min(6, t("validations.passwordMin"))
      .required(t("validations.passwordRequired")),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], t("validations.confPasswordMatch"))
      .required(t("validations.confPasswordRequired")),
    // "terms-conditions": Yup.boolean().oneOf(
    //   [true],
    //   t("validations.termsRequired")
    // ),
  });
};
