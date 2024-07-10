import { LanguageSwitcher } from "features/LanguageSwitcher";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { Button, ButtonSizes, ButtonTheme } from "shared/ui";
import { AppLink, AppLinkTheme } from "shared/ui";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsible, setCollapsible] = useState(false);
  const onToggle = () => setCollapsible((prev) => !prev);
  const { t } = useTranslation();


  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: collapsible },
        [className]
      )}
    >
      <Button theme={ButtonTheme.BACKGROUND_INVERTED} size={ButtonSizes.XL} square className={styles.collapsible_btn} aria-label="sidebar-open-btn" onClick={onToggle}>{collapsible ? ">" : "<"}</Button>
      <div>
        <AppLink
          className={styles["links__first-link"]}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
        >
          {t("Шапка.Главная")}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
        >
          {t("Шапка.О сайте")}
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsible} />
      </div>
    </div>
  );
};