import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();
  const changeLng = () =>
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={changeLng}
      className={classNames(styles.LanguageSwitcher, {}, [className])}
    >
      {t(short ? "Короткий язык" :"Язык")}
    </Button>
  );
};
