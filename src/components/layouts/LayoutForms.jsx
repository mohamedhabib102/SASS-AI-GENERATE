const LayoutForms = ({ children, title, description }) => {

    // The children object includes a component name like "SignIn"
    // nameComponent
  return (
<div className="flex w-full min-h-screen ">
  {/* right side  */}
  <div className="w-1/2 bg-primary hidden md:block">
    {/* your fixed component here */}
  </div>

  {/* left side */}
  <div className="md:w-1/2 w-full px-6 py-8 h-full">
      <div className="py-10 gap-4">
        <div className="flex items-center justify-center flex-col gap-2 h-full">
          <h1 className="font-bold text-2xl lg:text-2x">{title}</h1>
          <p className="text-gray-600 text-md">{description}</p>
        </div>
      {/* here component forms */}
      {children}
        </div>
  </div>
</div>
  );
};
export default LayoutForms;
