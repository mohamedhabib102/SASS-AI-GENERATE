const LayoutForms = ({ children, title, description, srcImg }) => {

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/2 bg-primary ">
        <div className="">{/* here component image */}</div>
      </div>

      {/* Forgot Password */}
      <div className="w-1/2 px-6 py-8 flex flex-col justify-center">
        <div className=" flex flex-col items-center">
          <div className="mb-6">
            {srcImg ? <img src={srcImg} alt="logo"  /> : null}
          </div>
          <h1 className="font-semibold text-main text-[32px] leading-11">
            {title}
          </h1>
          <p className="text-gray text-[18px] leading-6.75 mb-2">{description}</p>
        </div>
        {/* here component forms */}
        {children}
      </div>
    </div>
  );
};
export default LayoutForms;
