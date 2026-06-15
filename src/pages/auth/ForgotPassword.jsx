import LayoutFroms from "@/components/layouts/LayoutFroms";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const ForgotPassword = () => {
  return (
    <section className="min-h-screen">
      <LayoutFroms
        srcImg={"../../assets/logo/logoMain.png"}
        title={"نسيت كلمة المرور؟"}
        description={
          "أدخل بريدك الالكتروني الذي تستخدمه لاختيار كلمة مرور جديدة."
        }
      >
        <div className="">
          <label
            htmlFor="email"
            className=" text-sm font-semibold text-main mb-3"
          >
            أدخل بريدك الألكتروني{" "}
          </label>

          <div className="relative">
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none z-10" />

            <Input
              id="email"
              type="email"
              placeholder="rania@gmail.com"
              className="pr-10 placeholder:text-gray-400 border-gray-200 focus-visible:ring-[#6B5CE7] focus-visible:border-[#6B5CE7]"
              dir="ltr"
            />
          </div>
        </div>
      </LayoutFroms>
    </section>
  );
};

export default ForgotPassword;
