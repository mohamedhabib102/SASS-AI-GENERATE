import React, { useMemo, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Menu,
  UserRound
} from "lucide-react";
import ButtonChangeLang from "../shared/ButtonChangeLang";
import { useAuthStore } from "@/store/authStore";
import { useLang } from "@/hooks/useLang";
import CustomContainer from "../shared/CustomContainer";
import CustomButton from "../shared/CustomButton";
import Logo from "../shared/Logo";
import { useNavbar } from "@/hooks/useNavbar";

const Header = () => {
  const { t, lang } = useLang();
  const {data, isError} = useNavbar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const { user, isAuthenticated } = useAuthStore();
  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : <UserRound/>;


const staticLinks = useMemo(
  () => [
    { title: "home", url: `/${lang}` },
    { title: "services", url: `/${lang}/services` },
    { title: "pricing", url: `/${lang}/pricing` },
    { title: "about", url: `/${lang}/about` },
    { title: "contact", url: `/${lang}/contact` },
  ],
  [lang],
);
  let links = staticLinks;

  if (data?.data?.menu_items && !isError) {
    links = data.data.menu_items.map((item) => ({
      ...item,
      url: item.url?.startsWith(`/${lang}`)
        ? item.url
        : `/${lang}${item.url === "/" ? "" : item.url}`,
    }));
  }


  const navLinkClass = ({ isActive }) =>
    `text-nav py-2 font-normal relative ${
      isActive
        ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
        : ""
    }`;

  return (
    <header className="py-4 border boder-b border-border">
      <CustomContainer>
              <div className="container flex justify-between items-center ">
        <div className="logo w-30">
          <Logo srcImg={ data?.data?.logo?.image || "/logo-black.svg"} smal={true} alt={data?.data?.logo?.alt || "logo"} />
        </div>
        {/* all media except mobile */}
        <div className="links gap-4 items-center hidden md:flex">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.url}
              className={navLinkClass}
              end={link.url === `/${lang}` || link.url === `/${lang}/`}
            >
              {links === staticLinks ? t(`home.nav.${link.title}`) : link.title}
            </NavLink>
          ))}
        </div>
        {/* mobile media */}
        <div className="flex gap-4 items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="border-none text-primary cursor-pointer p-0 hover:bg-transparent"
              >
                <Menu size={32} strokeWidth={3} />
              </Button>
            </SheetTrigger>

            <SheetContent 
              side={lang === "ar" ? "right" : "left"} 
              className="bg-white border-none w-[300px] flex flex-col pt-12 px-6"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Mobile Navigation Menu</SheetDescription>

              <div className="mb-6">
                <Logo srcImg={ data?.data?.logo?.image || "/logo-black.svg"} smal={true} alt={data?.data?.logo?.alt || "logo"} />
              </div>

              <div className="flex flex-col gap-4 mt-4">
                {links.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.url}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={navLinkClass}
                    end={link.url === `/${lang}` || link.url === `/${lang}/`}
                  >
                    {links === staticLinks ? t(`home.nav.${link.title}`) : link.title}
                  </NavLink>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-6 border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <ButtonChangeLang className="text-main hover:text-primary" />
                </div>

                <div className="flex flex-col gap-4">
                  {!isAuthenticated && (
                    <div onClick={() => setIsMobileMenuOpen(false)}>
                      <CustomButton
                        translationKey={"home.nav.buttonSign"}
                        link={`/${lang}/auth/sign-in`}
                        location={"header"}
                      />
                    </div>
                  )}
                  
                  <Link 
                    to={isAuthenticated ? `/${lang}/profile` : `/${lang}/auth/sign-in`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 w-fit text-primary font-bold hover:opacity-80 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#E5E3FB] flex items-center justify-center overflow-hidden border border-border">
                      {isAuthenticated ? (
                        user?.avatar ? (
                          <img src={user.avatar} alt={user?.name} className="w-full h-full object-cover" />
                        ) : (
                          getInitial(user?.name)
                        )
                      ) : (
                        <UserRound />
                      )}
                    </div>
                    {isAuthenticated && (
                      <span className="text-main text-sm">
                        {user?.name || t("home.nav.myAccount")}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* desktop buttons */}
        <div className="butns hidden md:flex gap-3! lg:gap-6! items-center">
          
          <ButtonChangeLang className="text-main hover:text-primary" />
          
          <div className="flex items-center gap-2">
            {!isAuthenticated && (
              <CustomButton
                translationKey={"home.nav.buttonSign"}
                link={`/${lang}/auth/sign-in`}
                location={"header"}
              />
            )}
            
            <Link to={isAuthenticated ? `/${lang}/profile` : `/${lang}/auth/sign-in`} className="w-10 h-10 rounded-full bg-[#E5E3FB] text-primary flex items-center justify-center font-bold text-lg overflow-hidden border border-border cursor-pointer">
              {isAuthenticated ? (
                user?.avatar ? (
                  <img src={user.avatar} alt={user?.name} className="w-full h-full object-cover" />
                ) : (
                  getInitial(user?.name)
                )
              ) : (
                <UserRound/>
              )}
            </Link>
          </div>
        </div>
      </div>
      </CustomContainer>
    </header>
  );
};

export default Header;