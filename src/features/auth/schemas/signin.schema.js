import * as Yup from "yup";
import { useLang } from "@/hooks/useLang";

export const useSigninSchema = () => {
  const { t } = useLang();
  return Yup.object({
    email: Yup.string()
      .email(t("validations.emailInvalid"))
      .required(t("validations.emailRequired")),
    password: Yup.string()
      .min(6, t("validations.passwordMin"))
      .required(t("validations.passwordRequired")),
    // "terms-conditions": Yup.boolean().oneOf(
    //   [true],
    //   t("validations.termsRequired")
    // ),
  });
};