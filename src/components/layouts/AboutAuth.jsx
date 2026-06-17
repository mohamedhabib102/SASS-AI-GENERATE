import React from "react";
import { CircleCheckBig } from "lucide-react";
import { useLang } from "@/hooks/lang/useLang";

const AboutAuth = () => {
    const { t } = useLang();

    return (
        <div
        className={`bg-primary text-white flex flex-col justify-between px-6 lg:px-8 lg:py-8 py-6 select-none
        min-h-screen`}>
            {/* Top Header / Logo */}
            <div className="w-full flex justify-start">
                <img
                    src="/logo/logoMain.svg"
                    title="logo"
                    alt="logo site"
                    className="h-10 lg:h-12 w-auto"
                />
            </div>

            {/* Middle Content */}
            <div className="grow flex flex-col justify-center items-center w-full">
                {/* Illustration */}
                <div className="w-full flex justify-center mb-6">
                    <img
                        src="/images/image-auth.png"
                        alt="Marketing Illustration"
                        className="w-full max-w-56 object-contain"
                    />
                </div>

                {/* Text and Features block */}
                <div className="w-full ">
                    {/* Heading */}
                    <div className="space-y-2">
                        <h1 className="text-2xl lg:text-[2.2rem] font-bold text-white leading-tight">
                            {t('aboutAuth.welcome')}
                            <span className="block text-[#F56E14] mt-2 font-bold">{t('aboutAuth.logoTitle')}</span>
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 text-lg leading-relaxed font-normal mb-8">
                        {t('aboutAuth.descriptionLine1')}
                        <span className="block mt-1">{t('aboutAuth.descriptionLine2')}</span>
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-4">
                        {/* Bullet 1 */}
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#F0E8DB] flex items-center justify-center shrink-0">
                                <CircleCheckBig className="w-5 h-5 text-[#948163]" />
                            </div>
                            <span className="text-white/90 text-sm lg:text-base font-medium">{t('aboutAuth.feature1')}</span>
                        </li>
                        {/* Bullet 2 */}
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#F0E8DB] flex items-center justify-center shrink-0">
                                <CircleCheckBig className="w-5 h-5 text-[#948163]" />
                            </div>
                            <span className="text-white/90 text-sm lg:text-base font-medium">{t('aboutAuth.feature2')}</span>
                        </li>
                        {/* Bullet 3 */}
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#F0E8DB] flex items-center justify-center shrink-0">
                                <CircleCheckBig className="w-5 h-5 text-[#948163]" />
                            </div>
                            <span className="text-white/90 text-sm lg:text-base font-medium">{t('aboutAuth.feature3')}</span>
                        </li>
                        {/* Bullet 4 */}
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#F0E8DB] flex items-center justify-center shrink-0">
                                <CircleCheckBig className="w-5 h-5 text-[#948163]" />
                            </div>
                            <span className="text-white/90 text-sm lg:text-base font-medium">{t('aboutAuth.feature4')}</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <div className="w-full flex justify-between items-center text-white/50 text-xs lg:text-sm mt-8">
                <div>
                    <span>{t('aboutAuth.copyright')}</span>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors duration-200">{t('aboutAuth.privacy')}</a>
                    <a href="#" className="hover:text-white transition-colors duration-200">{t('aboutAuth.terms')}</a>
                </div>
            </div>
        </div>
    );
};

export default AboutAuth;