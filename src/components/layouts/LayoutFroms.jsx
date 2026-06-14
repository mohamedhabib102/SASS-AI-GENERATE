const LayoutFroms = ({ children }) => {

    // The children object includes a component name like "SignIn"
  return (
<div className="flex w-full min-h-screen">
  <div className="w-1/2 px-6 py-8">
    {/* here component forms */}
  </div>

  <div className="w-1/2 bg-primary ">
    <div className="">

      <div className="">
        <h1>{children.title}</h1>
        <h1>{children.description}</h1>
      </div>

      
      {/* here component image */}
    </div>
  </div>
</div>
  );
};
export default LayoutFroms;
