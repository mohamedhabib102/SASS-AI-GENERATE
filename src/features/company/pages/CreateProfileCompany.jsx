import LayoutForms from "@/layouts/LayoutForms";
import CustomInput from "@/components/shared/CustomInput";
import CustomSelect from "@/components/shared/CustomSelect";
import { Button } from "@/components/ui/button";
import { Building2, Mail, Phone, Briefcase, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GenerateLinkDialog from "./components/GenerateLinkDialog";
import { useState } from "react";
import { useFormik } from "formik";
import { useLang } from "@/hooks/useLang";
import { useCompanySchema } from "@/features/company/schema/company.schema";
import { useCreateProfile } from "@/features/company/hooks/useCreateProfile";
import { usePlansName } from "@/features/company/hooks/usePlansName";
import Loading from "@/components/shared/Loading";

const CreateProfileCompany = () => {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const schema = useCompanySchema();
  const { mutateAsync, isPending: loadingCreate } = useCreateProfile();
  const { data: plans, isPending: isLoadingPlans } = usePlansName();
  const [openDialog, setOpenDialog] = useState(false);
  const {link, setLink} = useState("");

  const formik = useFormik({
    initialValues: {
      company_name: "",
      email: "",
      phone: "",
      field: "",
      plan: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const data = {
          name: values.company_name,
          email: values.email,
          phone: values.phone,
          industry: values.field,
          plan_id: Number(values.plan),
        };

        const res = await mutateAsync(data);
        const url = res?.data?.url || "https://www.example.com";
        setLink(url)

        setOpenDialog(true);
        console.log(res);
      } catch (error) {
        const st = error?.response?.status;
        const msg = error?.response?.data?.errors;
        console.log(st);

        switch (st) {
          case 422:
            if (msg) {
              const newErrors = {};
              const newTouched = {};

              if (msg.name || msg.domain) {
                newErrors.company_name = t("errors.companyAlreadyExists");
                newTouched.company_name = true;
              }

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
            } else {
              formik.setFieldError(
                "company_name",
                t("errors.companyAlreadyExists")
              );
            }
            break;
          default:
            console.error("Create profile error:", error);
            break;
        }
      }
    },
  });

  const planOptions =
    plans?.map((plan) => ({
      value: plan.id,
      label: plan.name,
    })) ?? [];

  return (
    <>
      <GenerateLinkDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        text={
          lang === "ar"
            ? "جارٍ تجهيز الرابط الخاص بحساب الشركة..."
            : "Preparing your company account link..."
        }
        seconds={10}
        link={link}
      />

      <LayoutForms
        title={t("createCompany.title")}
        description={t("createCompany.description")}
        srcImg="/logo/logoSecondary.svg"
      >
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="form-fields flex flex-col gap-3 my-2">
            {/* Company Name */}
            <CustomInput
              name="company_name"
              type="text"
              id="company_name"
              labelContent={t("createCompany.companyNameLabel")}
              palceholder={t("createCompany.companyNamePlaceholder")}
              icon={Building2}
              disabled={loadingCreate}
              formik={formik}
              lang={lang}
            />

            {/* Email */}
            <CustomInput
              name="email"
              type="email"
              id="email"
              labelContent={t("createCompany.emailLabel")}
              palceholder={t("createCompany.emailPlaceholder")}
              icon={Mail}
              disabled={loadingCreate}
              formik={formik}
              lang={lang}
            />

            {/* Phone */}
            <CustomInput
              name="phone"
              type="text"
              id="phone"
              labelContent={t("createCompany.phoneLabel")}
              palceholder={t("createCompany.phonePlaceholder")}
              icon={Phone}
              disabled={loadingCreate}
              formik={formik}
              lang={lang}
            />

            {/* Field of Work */}
            <CustomInput
              name="field"
              type="text"
              id="field"
              labelContent={t("createCompany.fieldLabel")}
              palceholder={t("createCompany.fieldPlaceholder")}
              icon={Briefcase}
              disabled={loadingCreate}
              formik={formik}
              lang={lang}
            />

            {/* Selected Plan */}
            <CustomSelect
              name="plan"
              id="plan"
              labelContent={t("createCompany.planLabel")}
              placeholder={
                isLoadingPlans ? "..." : t("createCompany.planPlaceholder")
              }
              icon={CreditCard}
              formik={formik}
              lang={lang}
              options={planOptions}
              disabled={isLoadingPlans || loadingCreate}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loadingCreate}
            className="w-full mt-6 py-6 text-white font-semibold text-md cursor-pointer"
          >
            {loadingCreate ? <Loading /> : t("createCompany.submit")}
          </Button>
        </form>
      </LayoutForms>
    </>
  );
};

export default CreateProfileCompany;
