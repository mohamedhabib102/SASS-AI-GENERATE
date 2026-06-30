import { ChevronDown } from "lucide-react";

const CustomSelect = ({
  name,
  id,
  labelContent,
  placeholder,
  icon,
  formik,
  lang,
  disabled,
  options = []
}) => {
  const IconBase = icon;

  return (
    <div className="w-full relative flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className={`${lang === "ar" ? "text-right" : "text-left"} text-gray-800 text-xs lg:text-sm font-semibold select-none`}
      >
        {labelContent}
      </label>

      <div className="relative">
        <select
          name={name}
          id={id}
          disabled={disabled}
          value={formik.values[name] || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`${lang === "ar" ? "text-right pr-9 pl-9" : "text-left pl-9 pr-9"} border outline-none text-gray-800 placeholder:text-gray-400 text-xs lg:text-sm
            h-10 w-full rounded-lg transition-colors appearance-none bg-white cursor-pointer
            ${
              formik.touched[name] && formik.errors[name]
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-primary"
            }`}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-800 bg-white">
              {option.label}
            </option>
          ))}
        </select>

        {icon && (
          <span
            className={`absolute ${lang === "en" ? "left-3" : "right-3"} text-[#9E9E9E] top-1/2 -translate-y-1/2 pointer-events-none`}
          >
            {<IconBase size={16} />}
          </span>
        )}

        <span
          className={`absolute ${lang === "en" ? "right-3" : "left-3"} text-[#9E9E9E] top-1/2 -translate-y-1/2 pointer-events-none`}
        >
          <ChevronDown size={16} />
        </span>
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-[11px] mt-0.5">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default CustomSelect;
