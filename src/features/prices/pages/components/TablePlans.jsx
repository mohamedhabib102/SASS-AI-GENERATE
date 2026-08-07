import { Fragment, useState } from "react";
import { useLang } from "@/hooks/useLang";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
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
  const { lang } = useLang();
  const header = data?.header;
  const body = data?.body;

  const plans = header?.plans || [];
  const sections = body?.sections || [];

  const mobilePlans = plans.filter((p) => p.key !== "feature");
  const [activeKey, setActiveKey] = useState(mobilePlans[0]?.key);

  return (
    <div className="border border-border rounded-2xl overflow-hidden mb-24">
      {/* Desktop Design */}
      <Table className={"table-fixed hidden lg:table"}>
        <TableHeader>
          <TableRow className="border-b-border">
            {plans.map((p) => (
              <TableHead
                key={p.key}
                className={`pt-5 pb-8 px-3 border-l border-border text-lg ${p.popular ? "bg-table text-primary" : "bg-white text-main"}`}
              >
                <div className={`flex flex-col items-center gap-2 ${p.key === "feature" ? "items-start" : "items-center"}`}>
                  {p.badge && (
                    <span className="inline-flex items-center justify-center rounded-full bg-[#F56E14] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white font-semibold">
                      {p.badge}
                    </span>
                  )}
                  <span className={`font-semibold ${p.key === "feature" ? "text-right" : "text-center"}`}>
                    {p.name}
                  </span>
                  {p.price && (
                    <span className="text-gray font-normal text-sm">
                      {p.price}
                    </span>
                  )}
                 
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {sections.map((section, sIdx) => (
            <Fragment key={`section-${sIdx}`}>
              <TableRow className="bg-[#F5F5F5] border-b border-border">
                <TableCell colSpan={plans.length} className="text-primary font-semibold px-3 py-3">
                  {section.title}
                </TableCell>
              </TableRow>

              {section.rows?.map((row, rIdx) => (
                <TableRow key={`row-${sIdx}-${rIdx}`} className={"border-b border-b-border"}>
                  {plans.map((p) => (
                    <TableCell
                      key={p.key}
                      className={`px-3 py-3 border-l border-border ${p.popular ? "bg-table text-primary" : "bg-white text-main"} ${p.key === "feature" ? "text-right font-semibold" : "text-center"}`}
                    >
                      {p.key === "feature"
                        ? row.feature
                        : renderValue(row.values?.[p.key])}
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
          {sections.map((section, sIdx) => (
            <div key={`mobile-section-${sIdx}`}>
              <div className="bg-[#F5F5F5] text-primary font-semibold px-3 py-3">
                {section.title}
              </div>

              {section.rows?.map((row, rIdx) => (
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