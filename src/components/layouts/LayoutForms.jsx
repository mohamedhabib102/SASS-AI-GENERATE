import AboutAuth from "./AboutAuth";

const LayoutForms = ({ children, title, description, srcImg, classLabel }) => {
  return (
    <div className="flex w-full min-h-screen">
      {/* right side  */}
      <div className="w-1/2 bg-primary hidden md:block">
        {/* your fixed component here */}
        <AboutAuth />
      </div>

      {/* left side */}
      <div className="md:w-1/2 w-full px-6 py-8 ">
        <div
          className={`flex flex-col items-center justify-center h-full ${classLabel}`}
        >
          <div className="text-center ">
            {srcImg && (
              <div className="mb-6">
                <img src={srcImg} alt="logo" className="w-125 object-cover" />
              </div>
            )}

            <h1 className="font-bold text-2xl lg:text-3xl">{title}</h1>
            <p className="text-gray text-md">{description}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
export default LayoutForms;
