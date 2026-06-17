import React, { useMemo } from "react";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BarChart,
  BarChart2,
  BarChart2Icon,
  BarChart3Icon,
  Brush,
  Menu,
} from "lucide-react";
import ButtonChangeLang from "../shared/ButtonChangeLang";

const Header = () => {
  const links = useMemo(
    () => [
      { label: "Home", route: "/" },
      { label: "Services", route: "/services" },
      { label: "Prices", route: "/prices" },
      { label: "About", route: "/about" },
      { label: "contact", route: "/contact" },
    ],
    [],
  );

  return (
    <header className="py-4">
      <div className="container flex justify-between items-center ">
        <div className="logo w-30">
          <img src="/logo-black.svg" alt="Logo" loading="lazy" />
        </div>
        {/* all media except mobile */}
        <div className="links gap-4 items-center hidden md:flex">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.route}
              className={" text-gray-500 py-2 font-semibold"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        {/* media of mobile */}
        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="md:hidden border-none text-primary cursor-pointer p-0 hover:bg-transparent"
              >
                <Menu size={32} strokeWidth={3} />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="border-none shadow-none bg-white">
              <DropdownMenuGroup>
                {links.map((link, index) => (
                  <DropdownMenuItem key={index} className="w-fit mx-auto">
                    <NavLink
                      to={link.route}
                      className="text-gray-500 py-2 font-semibold w-full text-center"
                    >
                      {link.label}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="butns flex gap-3! lg:gap-6! items-center">
            <ButtonChangeLang />
            <Button
              className={"text-white font-medium bg-primary hover:bg-blue-600"}
            >
              <Link to={"/auth/sign-in"}>Sign in</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
