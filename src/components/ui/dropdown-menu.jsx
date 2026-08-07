import * as React from "react";
import { cn } from "@/lib/utils";

const DropdownMenuContext = React.createContext({
  open: false,
  setOpen: () => {},
});

function DropdownMenu({ children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

function DropdownMenuTrigger({ asChild = false, children, className, ...props }) {
  const { open, setOpen } = React.useContext(DropdownMenuContext);

  const handleToggle = () => setOpen(!open);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (event) => {
        children.props.onClick?.(event);
        handleToggle();
      },
      className: cn(children.props.className, className),
      ...props,
    });
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn("inline-flex items-center", className)}
      {...props}
    >
      {children}
    </button>
  );
}

function DropdownMenuContent({ children, className, align = "start", ...props }) {
  const { open } = React.useContext(DropdownMenuContext);

  if (!open) return null;

  const alignmentClass =
    align === "end"
      ? "right-0"
      : align === "center"
        ? "left-1/2 -translate-x-1/2"
        : "left-0";

  return (
    <div
      className={cn(
        "absolute z-50 mt-2 min-w-48 rounded-md border border-border bg-white p-1 shadow-lg",
        alignmentClass,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function DropdownMenuGroup({ children, className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      {children}
    </div>
  );
}

function DropdownMenuItem({ children, className, onClick, ...props }) {
  const { setOpen } = React.useContext(DropdownMenuContext);

  return (
    <button
      type="button"
      onClick={(event) => {
        onClick?.(event);
        setOpen(false);
      }}
      className={cn(
        "flex w-full items-center rounded-md px-2 py-1.5 text-sm text-foreground transition hover:bg-muted",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
};

export default DropdownMenu;
