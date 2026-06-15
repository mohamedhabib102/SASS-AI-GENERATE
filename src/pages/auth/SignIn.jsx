import LayoutFroms from "@/components/layouts/LayoutFroms";
import CustomInput from "@/components/shared/CustomInput";
import { Eye, EyeClosed, Lock, User } from "lucide-react";

const SignIn = () => {

    const handleChang = (e) => {
        e.preventDefault()
    }
  return (
    <section className="min-h-screen">
      <LayoutFroms title={"Sign In"} description={"Tester"}>
        <form
        onSubmit={handleChang}
        >
          <CustomInput
            name={"fullName"}
            type={"password"}
            classLabel="block mb-1 text-[#121212]"
            id={"fName"}
            labelContent={"الأسم كامل"}
            palceholder={"محمد موافي"}
            icon={User}
            iconEyeClosed={EyeClosed}
            iconsEyeDashed={Eye}
            className={"pr-8 w-full tetx-sm text-[#9E9E9E] block outline-none border-[#E5E5E5] border rounded-lg px-4 py-2"}
          />
        </form>
      </LayoutFroms>
    </section>
  );
};
export default SignIn;
