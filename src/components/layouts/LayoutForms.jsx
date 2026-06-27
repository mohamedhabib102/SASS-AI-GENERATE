import Logo from "@/components/shared/Logo";
import AboutAuth from "./AboutAuth";

const LayoutForms = ({ children, title, description, srcImg }) => {
 
  return (
<div className="flex w-full h-screen ">
        {/* right side */}
      <div className="w-1/2 bg-primary hidden md:block">
        <AboutAuth />
      </div>

      {/* left side */}
      <div className="md:w-1/2 w-full flex items-center justify-center px-6 lg:py-0 py-4">
        <div className="w-full max-w-xl">
          <div className="flex flex-col items-center justify-center gap-5 mb-5 mt-6">
              {srcImg && (
              <div>
                <Logo srcImg={srcImg}/>
              </div>
            )}

            <h1 className="font-bold text-xl lg:text-2xl text-center ">
              {title}
            </h1>

            <p className="text-gray-500 text-xs lg:text-sm text-center">
              {description}
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutForms;
