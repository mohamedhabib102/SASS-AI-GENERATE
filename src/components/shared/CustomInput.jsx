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
  lang,
}) => {
  const IconBase = icon;
  const IconShow = iconEyeClosed;
  const IconHide = iconsEyeDashed;

  const [password, setPassword] = useState(false);

  const handlingShowPassowrd = () => {
    setPassword((old) => !old);
  };

  return (
    <div className="w-full mb-4 relative flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`${lang === "ar" ? "text-right" : "text-left"} text-black text-lg font-semibold`}
      >
        {labelContent}
      </label>

      <div className="relative">
        <input
          type={password ? "password" : "text"}
          name={name}
          placeholder={palceholder}
          id={id}
          onChange={formik.handleChange}
          className={`${lang === "ar" ? "text-right" : "text-left"} border border-gray-300 outline-none placeholder:text-sm
            py-2 px-8 w-full rounded-lg`}
        />

        {icon && (
          <span
            className={`absolute ${lang === "en" ? "left-2" : "right-2"} text-[#9E9E9E] top-1/2 -translate-y-1/2`}
          >
            {<IconBase size={18} />}
          </span>
        )}
        {type === "password" && (
          <button
            onClick={handlingShowPassowrd}
            className={`cursor-pointer absolute ${lang === "en" ? "right-2" : "left-2"} text-[#9E9E9E] top-1/2 -translate-y-1/2`}
          >
            {password ? <IconShow size={18} /> : <IconHide size={18} />}
          </button>
        )}
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default CustomInput;
