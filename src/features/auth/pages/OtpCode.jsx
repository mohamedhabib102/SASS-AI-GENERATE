import { useState } from "react";

import LayoutForms from "@/layouts/LayoutForms";

import { Button } from "@/components/ui/button";

// import oTP
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useLang } from "@/hooks/lang/useLang";
import useVerifyOtp from "../hooks/useVerifyOtp";
import useSendOtp from "../hooks/useSendOtp";

// ============ JSX ============ //
const OtpCode = () => {
  const [value, setValue] = useState("");
  const {t} = useLang();


  const {verifyOtp, isPending, isError, error} = useVerifyOtp();
  const {sendOtp ,isPending : isSendingOtp ,error: sendOtpError} = useSendOtp();

  //     mutationKey: ['verify-otp'],
  //     mutationFn: async ()=> instanceAxios.post('/api/auth/verify-otp', {
  //       phone: state.phone,
  //       otp: value,
  //     }),
  //     onSuccess : (data)=> {
  //       console.log(data)
  //       toast.success("Otp is Verified Successfully");
  //       navigate("/auth/reset-password",{state: {
  //         token: data?.token
  //       }});
  //     },
  //     onError : (error)=> {
  //       console.log(error);
  //       toast.error( error?.response?.data?.message || "OTP is incorrect");
  //     },
  
  //   });

  const handleVerifyOtp = async () => {
      verifyOtp({ phone: sessionStorage.getItem('phone'), otp: value });
  };

  return (
    <section className="min-h-screen">
      <LayoutForms
        srcImg={"/logo/logoSecondary.svg"}
        title={t("otp.title")}
        description={t("otp.description")}
      >
        {/* The email entered by the user will be displayed here */}


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
          {
              error && <p className="text-red-500 text-start text-sm p-2 border-red-500 border rounded-md">
                {error?.response?.message || "OTP is incorrect"}
              </p>
            }

          <div className="flex gap-12 flex-col justify-center">
              <Button
                type="button"
                onClick={() => handleVerifyOtp()}
                disabled={isPending}
                className={
                  "w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer"
                }
              >
                {isPending ? 'Submitting...' : 'Submit'}
              </Button>
            {/* == resend otp == */}
            <button className="text-[16px] text-center text-primary cursor-pointer "
            onClick={()=> sendOtp({ phone: sessionStorage.getItem('phone') })}
            >
              {isSendingOtp ? 'جار الإرسال...' : t("otp.resend")}
            </button>
            {
              sendOtpError && <p className="text-red-500 text-start text-sm p-2 border-red-500 border rounded-md">
                {sendOtpError?.response?.message || "Error sending OTP"}
              </p>
            }
          </div>
        </div>
      </LayoutForms>
    </section>
  );
};

export default OtpCode;
