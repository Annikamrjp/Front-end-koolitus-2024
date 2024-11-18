import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "sort-header": "Sort: ",
      "sort-az": "A-Z",
      "sort-za": "Z-A",
      "gift-card": "Gift card",
      "cart": "Cart",
      "manage-cars": "Manage cars",
      "manage-shops": "Manage shops",
      "manage-prices": "Managa prices",
      "manage": "Manage"

    }
  },
  et: {
    translation: {
      "sort-header": "Sorteeri: ",
      "sort-az": "A-Z",
      "sort-za": "Z-A",
      "gift-card": "Kinkekaart",
      "cart": "Ostukorv",
      "manage-cars": "Halda autosid",
      "manage-shops": "Halda esindusi",
      "manage-prices": "Halda hindasid",
      "manage": "Halda"
      
    }
  }
};

// i     18tähte      n
// internationalization
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;