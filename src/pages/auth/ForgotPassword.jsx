import LayoutFroms from "@/components/layouts/LayoutFroms";
import CustomInput from "@/components/shared/CustomInput";
import { Mail } from "lucide-react";
import logoMain from "@/assets/logo/logoMain.svg";

const ForgotPassword = () => {
  return (
    <section className="min-h-screen">
      <LayoutFroms
        srcImg={logoMain}
        title={"نسيت كلمة المرور؟"}
        description={
          "أدخل بريدك الالكتروني الذي تستخدمه لاختيار كلمة مرور جديدة."
        }
      >
        <div className="">
          <CustomInput
            name={"email"}
            type={"email"}
            classLabel="block mb-1 text-[#121212]"
            id={"email"}
            labelContent={"البريد الألكتروني"}
            palceholder={"أدخل بريدك الألكتروني"}
            icon={Mail}
            className={
              "pr-8 w-full tetx-sm text-[#9E9E9E] block outline-none border-[#E5E5E5] border rounded-lg px-4 py-2"
            }
          />
        </div>
      </LayoutFroms>
    </section>
  );
};

export default ForgotPassword;
