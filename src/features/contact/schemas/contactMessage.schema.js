import * as Yup from "yup";
import { useLang } from "@/hooks/lang/useLang";

export const useContactMessageSchema = () => {
    const { t } = useLang();
    return Yup.object({
        name: Yup.string().required(t("validations.fullNameRequired")),
        email: Yup.string()
        .email(t("validations.emailInvalid"))
        .required(t("validations.emailRequired")),
        message: Yup.string().required(t("validations.messageRequired")),
        subject: Yup.string().required(t("validations.messageRequired")),
    });
};
