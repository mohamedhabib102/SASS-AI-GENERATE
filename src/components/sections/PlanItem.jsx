import { CircleCheckBig } from "lucide-react";
import { Button } from "../ui/button";





const PlanItem = ({plan}) => {
    return (
        plan.map((p) => (
            <div key={p.key} className={`${p.popular ? "bg-primary py-10 px-5" : "bg-white p-5"} border border-border rounded-2xl shadow-md`}>
                {p.popularBadge && <span>{}</span>}
                <h3 className={`${p.popular ? "text-white" : "text-main"} font-bold text-lg`}>{p.name}</h3>
                <p className={`${p.popular ? "text-white" : "text-desc"} font-normal text-sm mb-4`}>{p.tagline}</p>

                <div className={`${p.popular ? "text-white" : "text-main"} font-bold text-4xl mb-6`}>{p.price}
                    {p.type && <span className="text-sm font-normal">{p.type}</span>}
                </div>

                <ul className="mb-20">
                    {p.features?.map((f, idx) => (
                        <li key={idx} className={`${p.popular ? "text-white" : "text-gray"} flex items-center gap-2 mb-4 text-sm last:mb-0`}>
                            <CircleCheckBig size={18} className="text-secondary"/>
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>

                <Button
                type="button"
                className={`w-full ${p.key === "enterprise" ? "bg-transparent text-secondary hover:bg-[#FEF1E8] hover:text-secondary" : "bg-secondary text-white hover:bg-secondary/80"}
                border border-secondary py-5 cursor-pointer`}
                >
                 {p.button}
                </Button>
            </div>
        ))
    )
}; export default PlanItem;