<<<<<<< HEAD
// import ButtonSwitchLang from "@/components/shared/ButtonSwitchLang";
=======
import Header from "@/components/layouts/Header";
import ButtonSwitchLang from "@/components/shared/ButtonSwitchLang";
>>>>>>> 5dfe4d8050c1e3436d07794626c11d176da1e49d
import CustomContainer from "@/components/shared/CustomContainer";
import ButtonSwitchLang from "@/components/shared/ButtonSwitchLang";
import { useTranslation } from "react-i18next";

const Home = () => {
<<<<<<< HEAD
  const { t } = useTranslation();
  return (
    <section>
      <CustomContainer>
        Home Page
        <ButtonSwitchLang />
        <p>{t("home.nav.home")}</p>
      </CustomContainer>
    </section>
  );
};
export default Home;
=======
    const {t} = useTranslation()
    return (
        <section>
            <CustomContainer>
                <Header/>

            <ButtonSwitchLang/>
            <p>{t('home.nav.home')}</p>
            </CustomContainer>

        </section>
    )
}; export default Home;
>>>>>>> 5dfe4d8050c1e3436d07794626c11d176da1e49d
