import * as Yup from "yup";
import { useTranslation } from "react-i18next";

export const useSigninSchema = () => {
  const { t } = useTranslation();
  return Yup.object({
    email: Yup.string()
      .email(t("validations.emailInvalid"))
      .required(t("validations.emailRequired")),
    password: Yup.string()
      .min(6, t("validations.passwordMin"))
      .required(t("validations.passwordRequired")),
    "terms-conditions": Yup.boolean().oneOf(
      [true],
      t("validations.termsRequired")
    ),
  });
};