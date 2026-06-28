import * as Yup from "yup";
import { useTranslation } from "react-i18next";

export const useValidationSchema = () => {
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

export const useSignUpValidationSchema = () => {
  const { t } = useTranslation();
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
    "terms-conditions": Yup.boolean().oneOf(
      [true],
      t("validations.termsRequired")
    ),
  });
};

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