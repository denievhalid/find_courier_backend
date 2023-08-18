import { I18n } from "i18n";

const i18n = new I18n({
  locales: ["en", "ru"],
  defaultLocale: "ru",
  directory: "locales",
});

export default i18n;
