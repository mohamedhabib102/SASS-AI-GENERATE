import CustomInput from "../shared/CustomInput";

const LayoutFroms = ({ children, title, description }) => {

    // The children object includes a component name like "SignIn"
    // nameComponent
  return (
<div className="flex w-full min-h-screen">
  <div className="w-1/2 px-6 py-8">
  
      <div className="">
        <h1>{title}</h1>
        <h1>{description}</h1>
      </div>
    {/* here component forms */}gi
    {children}
  </div>

  <div className="w-1/2 bg-primary ">
    <div className="">


      
      {/* here component image */}
    </div>
  </div>
</div>
  );
};
export default LayoutFroms;
