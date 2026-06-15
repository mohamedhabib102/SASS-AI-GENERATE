import { Input } from "../ui/input";




const CustomInput = ({
    name,
    type,
    id,
    labelContent,
    palceholder,
    className,
    classLabel,
    icon,
    iconPassword
}) => {
    const Icon = icon
    
    return (
    <div className="w-full mb-4 relative">
     <label forHtml={id} className={classLabel}>{labelContent}</label>

     <div className="relative">


     <input
      type={type}
      name={name}
      placeholder={palceholder}
      id={id}
      className={className}
      />
     {icon && <span className="absolute right-2 text-[#9E9E9E] top-1/2 -translate-y-1/2">{<Icon size={20} />}</span>}
      </div>

    </div>
    )
    
}; export default CustomInput