    import { useState } from "react";




    const CustomInput = ({
        name,
        type,
        id,
        labelContent,
        palceholder,
        className,
        classLabel,
        icon,
        iconEyeClosed,
        iconsEyeDashed
    }) => {
        const IconBase = icon;
        const IconShow = iconEyeClosed;
        const IconHide = iconsEyeDashed;

        const [password, setPassword] = useState(false);


        const handlingShowPassowrd = () => {
            setPassword(!password)
        }
        
        return (
        <div className="w-full mb-4 relative">
        <label forHtml={id} className={classLabel}>{labelContent}</label>

        <div className="relative">


        <input
        type={password ? "password" : "text"}
        name={name}
        placeholder={palceholder}
        id={id}
        className={className}
        />


        {icon && <span className="absolute right-2 text-[#9E9E9E] top-1/2 -translate-y-1/2">{<IconBase size={18} />}</span>}
        {type === "password" && <button 
        onClick={handlingShowPassowrd}
        className="cursor-pointer absolute left-2 text-[#9E9E9E] top-1/2 -translate-y-1/2">{
            password ? <IconShow size={18} /> : <IconHide size={18} />
        }</button>}
        </div>



        </div>
        )
        
    }; export default CustomInput
