import Header from "@/components/layouts/Header";
import CustomContainer from "@/components/shared/CustomContainer";
import { useTranslation } from "react-i18next";

const Home = () => {
    const {t} = useTranslation()
    return (
        <section>
            <CustomContainer>
                <Header/>

            <p>{t('home.nav.home')}</p>
            </CustomContainer>

        </section>
    )
}; export default Home;
