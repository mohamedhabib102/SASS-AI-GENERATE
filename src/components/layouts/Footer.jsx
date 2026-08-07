import React from "react";
import { useLang } from "@/hooks/useLang";
import CustomContainer from "@/components/shared/CustomContainer";
import Logo from "@/components/shared/Logo";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";



const Footer = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const quickLinks = [
    { id: 1, label: t("footer.quickLinks.home"), to: `/${lang}` },
    { id: 2, label: t("footer.quickLinks.about"), to: `/${lang}/about` },
    { id: 3, label: t("footer.quickLinks.services"), to: `/${lang}/services` },
    { id: 4, label: t("footer.quickLinks.testimonials"), to: `/${lang}/testimonials` },
    { id: 5, label: t("footer.quickLinks.pricing"), to: `/${lang}/pricing` },
  ];

  const ourServices = [
    {
      id: 1,
      label: t("footer.services.socialMedia"),
      to: `/${lang}/services/social-media`,
    },
    {
      id: 2,
      label: t("footer.services.contentCreation"),
      to: `/${lang}/services/content-creation`,
    },
    {
      id: 3,
      label: t("footer.services.adsCampaigns"),
      to: `/${lang}/services/ads-campaigns`,
    },
    { id: 4, label: t("footer.services.contactUs"), to: `/${lang}/contact` },
    { id: 5, label: t("footer.services.faq"), to: `/${lang}/faq` },
  ];

  const socialLinks = [
    { 
      id: 1, Icon: RiTwitterXFill, 
      href: "https://twitter.com", 
      label: "Twitter" 
    },
    {
      id: 2,
      Icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      id: 3,
      Icon: FiFacebook,
      href: "https://facebook.com",
      label: "Facebook",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" id="footer">
      <CustomContainer>
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Newsletter + App Download */}
          <div
            className={`flex flex-col gap-8  ${isRtl ? "text-right" : "text-left"} order-4 lg:order-4`}
          >
            <div>
              <h3 className="text-base md:text-lg text-[#EDD7A8] font-bold mb-4">
                {t("footer.newsletter.title")}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-5">
                {t("footer.newsletter.description")}
              </p>

              <form
                className={`flex items-center bg-[#3B35AC] rounded-lg overflow-hidden ${
                  isRtl ? "flex-row" : "flex-row"
                }`}
              >
                <input
                  type="email"
                  required
                  placeholder={t("footer.newsletter.placeholder")}
                  className={`flex-1 min-w-0 bg-transparent outline-none px-5 py-4 text-sm text-white placeholder:text-white placeholder:text-sm placeholder:transition-all placeholder:duration-300 placeholder:opacity-85 focus:placeholder:opacity-0 ${
                    isRtl ? "text-right" : "text-left"
                  }`}
                />
                <button
                  type="submit"
                  className="bg-[#FFFFFF] text-primary text-sm font-medium px-4 py-2 m-2 rounded-md whitespace-nowrap transition-opacity duration-200 hover:opacity-90"
                >
                  {t("footer.newsletter.subscribe")}
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-[#EDD7A8] mb-4">
                {t("footer.app.title")}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="App Store"
                >
                  <img
                    src="/images/apple-icon.svg"
                    alt="Download on the App Store"
                    className="h-10 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Play"
                >
                  <img
                    src="/images/google-icon.svg"
                    alt="Get it on Google Play"
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="order-3 lg:order-3">
            <h3 className="text-base md:text-lg font-bold text-[#EDD7A8] mb-4">
              {t("footer.services.title")}
            </h3>
            <ul className="flex flex-col gap-3">
              {ourServices.map(({ id, label, to }) => (
                <li key={id}>
                  <Link
                    to={to}
                    className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="order-2 lg:order-2">
            <h3 className="text-base md:text-lg text-[#EDD7A8] font-bold mb-4">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ id, label, to }) => (
                <li key={id}>
                  <Link
                    to={to}
                    className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo + Description + Social */}
          <div className="flex flex-col gap-5 order-1">
            <Logo srcImg={"/logo/logoMain.svg"} />
            <p className="text-sm text-white/80 leading-relaxed">
              {t("footer.about.description")}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ id, Icon, href, label }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center transition-opacity duration-200 hover:opacity-90"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-white/15" />

        {/* Bottom Bar */}
        <div className="py-5 flex items-center lg:justify-end justify-center  flex-wrap gap-4">
          <p className="text-sm text-white/70">
            &copy; {currentYear} {t("footer.bottom.copyright")}
          </p>

          <div className="flex items-center gap-6">
            <Link
              to={`/${lang}/terms`}
              className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
            >
              {t("footer.bottom.terms")}
            </Link>
            <Link
              to={`/${lang}/privacy`}
              className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
            >
              {t("footer.bottom.privacy")}
            </Link>
          </div>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;