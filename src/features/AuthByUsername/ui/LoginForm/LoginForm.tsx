import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, Input } from "shared/ui";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        autofocus
        placeholder={t("Введите имя")}
        className={styles.input}
        type="text"
      />
      <Input
        placeholder={t("Введите пароль")}
        className={styles.input}
        type="text"
      />
      <Button className={styles.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};
