import { Link } from "react-router-dom";

const ServiceCard = ({ Icon, service }) => {

  console.log(service)
  return (
    <div className="bg-white border border-[#CACACA] rounded-2xl p-5 flex flex-col gap-3 text-right">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-primary">
        <Icon size={20} />
      </span>

      <h4 className="text-base font-medium text-main">
        {service.name}
      </h4>

      <p className="text-sm text-gray leading-relaxed flex-1 mb-4">
        {service.short_description}
      </p>

      <p className="text-sm font-semibold text-main">
        {service.price}$ / {service.price_label}
      </p>

      <Link
      to={`/services/${service.id}`}       
 className="cursor-pointer py-3.5 mt-1 bg-secondary hover:bg-secondary/90 text-white text-center text-sm font-medium rounded-lg"
      >
        {service.button_text}
      </Link>
    </div>
  );
};

export default ServiceCard;