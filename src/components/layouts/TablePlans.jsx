import { comparisonTableData } from "@/data/dataTable";
import { 
    Table, 
    TableHeader,  
    TableRow,
    TableHead,
    TableCell,
    TableBody
} from "../ui/table";
import { Check, Minus } from "lucide-react";

const renderValue = (cell) => {
    if (!cell) return null;
    if (cell.type === "boolean") {
        return cell.value ? (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary mx-auto">
                <Check size={14} className="text-white" />
            </span>
        ) : (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 mx-auto">
                <Minus size={14} className="text-gray-400" />
            </span>
        );
    }
    return cell.value;
};

const TablePlans = () => {
    const header = comparisonTableData.header;
    const body = comparisonTableData.body;

    return (
        <div className="border border-border rounded-2xl overflow-hidden">
            <Table className={"table-fixed"}>
                <TableHeader>
                    <TableRow className="border-b-border">
                       {header.plans.map((p, idx) => (
                        <TableHead 
                            key={idx}
                            className={`pt-5 pb-10 px-3 ${p.key === "empty" ? "text-right" : "text-center"} border-l border-border
                             text-lg ${p.popular ? "bg-table text-primary" : "bg-white text-main"}`}
                        >
                            {p.name}
                            {p.price && (
                            <span className="text-gray font-normal text-sm">
                                <p>{p.price}</p>
                            </span>
                            )}
                        </TableHead>
                       ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {body.sections.map((section, sIdx) => (
                        <>
                            <TableRow key={`section-${sIdx}`}>
                                <TableCell 
                                    colSpan={header.plans.length} 
                                    className="bg-gray-50 text-primary font-semibold text-right px-3"
                                >
                                    {section.title}
                                </TableCell>
                            </TableRow>

                            {section.rows.map((row, rIdx) => (
                                <TableRow key={`row-${sIdx}-${rIdx}`}>
                                    {header.plans.map((p) => (
                                        <TableCell
                                            key={p.key}
                                            className={`text-center px-3 border-l border-border ${
                                                p.popular ? "bg-table text-primary" : ""
                                            } ${p.key === "empty" ? "text-right" : ""}`}
                                        >
                                            {p.key === "empty" 
                                                ? row.feature 
                                                : renderValue(row.values[p.key])}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}; export default TablePlans;