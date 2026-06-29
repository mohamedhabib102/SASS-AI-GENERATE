import { useState } from "react";

import LayoutForms from "@/components/layouts/LayoutForms";

import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

// import oTP
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useLang } from "@/hooks/lang/useLang";
import { instanceAxios } from "@/lib/InstanceAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// ============ JSX ============ //
const OtpCode = () => {
  const [value, setValue] = useState("");
  const {t} = useLang();

  const {state}=useLocation();
  console.log(state?.phone)



  const {mutate ,isPending}=useMutation({
      mutationKey: ['verify-otp'],
      mutationFn: async ()=> instanceAxios.post('/api/auth/verify-otp', {
        phone: state.phone,
        otp: value,
      }),
      onSuccess : (data)=> {
        console.log(data)
        toast.success("Otp is Verified Successfully");
        navigate("/auth/reset-password",{state: {
          token: data?.token
        }});
      },
      onError : (error)=> {
        console.log(error);
        toast.error( error?.response?.data?.message || "OTP is incorrect");
      },
  
    });;

    const queryClient = useQueryClient();
    const resendOtp = ()=> {
      queryClient.invalidateQueries(['forgotPassword']);
    }



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

          <div className="flex gap-12 flex-col justify-center">
              <Button
                type="submit"
                className={
                  "w-full mt-4 py-6 text-white font-semibold text-md cursor-pointer"
                }
              >
                {isPending ? 'Submitting...' : 'Submit'}
              </Button>
            {/* == resend otp == */}
            <button className="text-[16px] text-center text-primary cursor-pointer "
            onClick={()=> resendOtp()}
            >
              {t("otp.resend")}
            </button>
          </div>
        </div>
      </LayoutForms>
    </section>
  );
};

export default OtpCode;
