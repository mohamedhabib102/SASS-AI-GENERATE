import { useState } from "react";

import LayoutForms from "@/components/layouts/LayoutForms";

// import SubmitBtn from "@/components/shared/SubmitBtn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// import oTP
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

// ============ JSX ============ //
const OtpCode = () => {
  const [value, setValue] = useState("");

  return (
    <section className="min-h-screen">
      <LayoutForms
        srcImg={"/logo/logoSecondary.svg"}
        title={"أدخل رمز التحقق"}
        description={"أرسلنا رمز مكون من 6أرقام إلى البريد الإلكترونى"}
      >
        {/* The email entered by the user will be displayed here */}
        <p className="text-gray text-[18px] text-center mt-3">
          organizer@bookfair.gov.sa
        </p>

        {/* ============ Otp and btn send otp  ============*/}
        <div className="w-full lg:w-[80%] mx-auto">
          <div className=" flex justify-center gap-6 mt-12 mb-6" dir="ltr">
            <InputOTP
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={value}
              onChange={(val) => {
                const numbersOnly = val.replace(/\D/g, "");
                setValue(numbersOnly);
              }}
            >
              <InputOTPGroup className="grid grid-cols-6 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className="border border-[#CACACA] rounded-md w-12 h-12 text-center focus:border-primary! out"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="flex gap-12 flex-col justify-center">
            <Link to={"/auth/forgot-password/otp-code"}>
              <Button
                type="submit"
                className={
                  "w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer"
                }
              >
                تأكيد رمز التحقق
              </Button>
            </Link>
            {/* == resend otp == */}
            <button className="text-[16px] text-center text-primary cursor-pointer ">
              إعادة إرسال الرمز
            </button>
          </div>
        </div>
      </LayoutForms>
    </section>
  );
};

export default OtpCode;
