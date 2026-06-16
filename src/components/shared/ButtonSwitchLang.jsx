import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';

const  ButtonSwitchLang = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    //provide ar, en
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.lang = lang;
  };

  return (
  <Button
    className={`cursor-pointer`}
   onClick={() => changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}>
     {i18n.language === 'ar' ? 'English' : 'العربية'}
  </Button>
  );
}; export default ButtonSwitchLang;