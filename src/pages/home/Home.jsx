import ButtonSwitchLang from "@/components/shared/ButtonSwitchLang";
import CustomContainer from "@/components/shared/CustomContainer";
import { useTranslation } from "react-i18next";




const Home = () => {
    const {t} = useTranslation()
    return (
        <section>

            <CustomContainer>
            Home Page

            <ButtonSwitchLang/>
            <p>{t('home.nav.home')}</p>
            </CustomContainer>

        </section>
    )
}; export default Home;