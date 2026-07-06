import { Fragment, useState } from "react";
import { comparisonTableData } from "@/data/dataTable";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "../../../../components/ui/table";
import { Check, Minus } from "lucide-react";

const renderValue = (cell) => {
  if (!cell) return null;
  if (cell.type === "boolean") {
    return cell.value ? (
      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${cell.key === "enterprise" ? "bg-table text-primary" : "bg-primary text-white"}  mx-auto`}>
        <Check size={14} className="" />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 mx-auto">
        <Minus size={14} className="text-gray-400" />
      </span>
    );
  }
  return cell.value;
};

const TablePlans = ({ data }) => {
  const header = data?.header || comparisonTableData.header;
  const body = data?.body || comparisonTableData.body;

  const mobilePlans = header.plans.filter((p) => p.key !== "empty");
  const [activeKey, setActiveKey] = useState(mobilePlans[0]?.key);

  return (
    <div className="border border-border rounded-2xl overflow-hidden mb-24">
      {/* Desktop Design */}
      <Table className={"table-fixed hidden lg:table"}>
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
            <Fragment key={`section-${sIdx}`}>
              <TableRow key={sIdx} className="border border-border">
                {header.plans.map((p, pIdx) => (
                  <TableCell
                    key={p.key}
                    className={`${p.key === "pro" ? "bg-table" : "bg-[#F5F5F5]"} text-primary font-semibold text-right 
                    px-3 py-3`}
                  >
                    {pIdx === 0 && section.title}
                  </TableCell>
                ))}
              </TableRow>

              {section.rows.map((row, rIdx) => (
                <TableRow key={`row-${sIdx}-${rIdx}`} className={"border-b border-b-border"}>
                  {header.plans.map((p) => (
                    <TableCell
                      key={p.key}
                      className={`text-center p-3 border-l border-border ${
                        p.popular ? "bg-table text-primary" : "bg-white text-main"
                      } ${p.key === "empty" ? "text-right" : ""} font-medium`}
                    >
                      {p.key === "empty"
                        ? row.feature
                        : renderValue(row.values[p.key])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </Fragment>
          ))}
        </TableBody>
      </Table>


      {/* Mobile Design */}
      <div className="lg:hidden">
        <div className="flex border-b border-border">
          {mobilePlans.map((p) => (
            <button
              key={p.key}
              onClick={() => setActiveKey(p.key)}
              className={`flex-1 text-center px-2 py-4 text-sm font-semibold transition-colors ${
                activeKey === p.key
                  ? "bg-table text-primary border-b-2 border-primary"
                  : "bg-white text-main"
              }`}
            >
              {p.name}
              {p.price && (
                <span className="block text-gray font-normal text-xs mt-1">
                  {p.price}
                </span>
              )}
            </button>
          ))}
        </div>

        <div>
          {body.sections.map((section, sIdx) => (
            <div key={`mobile-section-${sIdx}`}>
              <div className="bg-[#F5F5F5] text-primary font-semibold px-3 py-3">
                {section.title}
              </div>

              {section.rows.map((row, rIdx) => (
                <div
                  key={`mobile-row-${sIdx}-${rIdx}`}
                  className="flex items-center justify-between px-3 py-3 border-b border-border"
                >
                  <span className="text-main font-medium">{row.feature}</span>
                  <span className="font-medium">
                    {renderValue(row.values[activeKey])}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TablePlans;