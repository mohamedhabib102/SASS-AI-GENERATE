import * as Yup from "yup";
import { useTranslation } from "react-i18next";




export const useResetPasswordValidationSchema = () => {
  const { t } = useTranslation();
  return Yup.object({
    password: Yup.string()
      .min(6, t("validations.passwordMin"))
      .required(t("validations.passwordRequired")),
    confPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("validations.confPasswordMatch"))
      .required(t("validations.confPasswordRequired")),
    "terms-conditions": Yup.boolean().oneOf(
      [true],
      t("validations.termsRequired")
    ),
  });
};

export const useForgotPasswordValidationSchema = () => {
  const { t } = useTranslation();
  return Yup.object({
    phonNumber: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, t("validations.phoneInvalid"))
      .required(t("validations.phoneRequired")),
  });
};