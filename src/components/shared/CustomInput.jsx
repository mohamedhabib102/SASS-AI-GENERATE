    import { useState } from "react";




    const CustomInput = ({
        name,
        type,
        id,
        labelContent,
        palceholder,
        icon,
        iconEyeClosed,
        iconsEyeDashed,
        formik,
        lang
    }) => {

        const IconBase = icon;
        const IconShow = iconEyeClosed;
        const IconHide = iconsEyeDashed;

        const [password, setPassword] = useState(false);

        const handlingShowPassowrd = () => {
            setPassword(old=> !old)
        }
        
        return (
        <div className="w-full relative flex flex-col gap-1.5">
        <label htmlFor={id} className={`${lang === "ar" ? "text-right" : "text-left"} text-gray-800 text-xs lg:text-sm font-semibold select-none`}>{labelContent}</label>

        <div className="relative">


            <input
            type={type === 'password' ? (password ? 'text' : 'password') : type}
            name={name}
            placeholder={palceholder}
            id={id}
            onChange={formik.handleChange}
            className={`${lang === "ar" ? "text-right" : "text-left"} border border-gray-200 outline-none placeholder:text-gray-400 text-xs lg:text-sm
            h-10 px-9 w-full rounded-lg focus:border-primary`}
            />
            
            {icon && <span className={`absolute ${lang === 'en' ? 'left-3' : 'right-3'} text-[#9E9E9E] top-1/2 -translate-y-1/2`}>{<IconBase size={16} />}</span>}
            {type === "password" && <button 
            type="button"
            onClick={handlingShowPassowrd}
            className={`cursor-pointer absolute ${lang === 'en' ? 'right-3' : 'left-3'} text-[#9E9E9E] top-1/2 -translate-y-1/2`}>{
                password ? <IconShow size={16} /> : <IconHide size={16} />
            }</button>}
        </div>
        {
            formik.touched[name] && formik.errors[name] && (
                <p className="text-red-500 text-[11px] mt-0.5">
                    {formik.errors[name]}
                </p>
            )
        }



        </div>
        )
        
    }; export default CustomInput
