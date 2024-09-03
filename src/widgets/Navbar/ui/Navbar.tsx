import { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation("main");
  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleIsAuthModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  const userData = useSelector(getUserAuthData);

  const onLogOut = useCallback(() => {
    dispatch(userActions.logOut());
  }, [dispatch]);

  if (userData.id.length || userData.username.length) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <div className={styles.links}>
          {userData && (
            <span style={{ marginRight: 10 }}>{userData.username}</span>
          )}
          <Button onClick={onLogOut} theme={ButtonTheme.CLEAR_INVERTED}>
            {t("Выйти")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Button onClick={toggleIsAuthModal} theme={ButtonTheme.CLEAR_INVERTED}>
          {t("Войти")}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={toggleIsAuthModal} />
      </div>
    </div>
  );
};
