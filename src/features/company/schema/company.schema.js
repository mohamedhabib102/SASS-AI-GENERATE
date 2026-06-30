import * as Yup from "yup";
import { useLang } from "@/hooks/lang/useLang";

export const useCompanySchema = () => {
  const { t } = useLang();
  return Yup.object({
    company_name: Yup.string().required(t("validations.companyNameRequired")),
    email: Yup.string()
      .email(t("validations.emailInvalid"))
      .required(t("validations.emailRequired")),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, t("validations.phoneInvalid"))
      .required(t("validations.phoneRequired")),
    field: Yup.string().required(t("validations.fieldRequired")),
    plan: Yup.string().required(t("validations.planRequired")),
  });
};
