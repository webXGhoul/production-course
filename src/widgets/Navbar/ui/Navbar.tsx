import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { Button, ButtonTheme, Modal } from "shared/ui";
import { useTranslation } from "react-i18next";

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
        <Modal isOpen={isAuthModal} onClose={toggleIsAuthModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptate. Veritatis dolor sunt tempora impedit possimus repudiandae suscipit, quasi consequuntur incidunt culpa. Ad exercitationem fugit, officiis nihil sint dicta! Quisquam?
        </Modal>
      </div>
    </div>
  );
};
