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
import { useLang } from "@/hooks/lang/useLang";
import CustomContainer from "../shared/CustomContainer";
import CustomButton from "../shared/CustomButton";
import Logo from "../shared/Logo";

const Header = () => {
  const { t } = useLang()
  const links = useMemo(
    () => [
      { label: "home", route: "/" },
      { label: "services", route: "/services" },
      { label: "prices", route: "/prices" },
      { label: "about", route: "/about" },
      { label: "contact", route: "/contact" },
    ],
    [],
  );

  return (
    <header className="py-4">
      <CustomContainer>
              <div className="container flex justify-between items-center ">
        <div className="logo w-30">
         <Logo srcImg={"/logo-black.svg"} smal={true}/>
        </div>
        {/* all media except mobile */}
        <div className="links gap-4 items-center hidden md:flex">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.route}
              className={"text-nav py-2 font-normal"}
            >
              {t(`home.nav.${link.label}`)}
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
                      className="text-nav py-2 font-normal w-full text-center"
                    >
                      {t(`home.nav.${link.label}`)}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="butns flex gap-3! lg:gap-6! items-center">
            <ButtonChangeLang />
            <CustomButton
              translationKey={"home.nav.buttoSign"}
              link={"/auth/sign-in"}
              location={"header"}
            />
              
  
          </div>
        </div>
      </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
