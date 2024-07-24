import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { Button, ButtonTheme } from "shared/ui";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleIsAuthModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Button onClick={toggleIsAuthModal} theme={ButtonTheme.CLEAR_INVERTED}>{t("Войти")}</Button>
        <LoginModal isOpen={isAuthModal} onClose={toggleIsAuthModal}/>
      </div>
    </div>
  );
};
