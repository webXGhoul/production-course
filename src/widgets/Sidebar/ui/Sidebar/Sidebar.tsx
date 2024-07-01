import { LanguageSwitcher } from "features/LanguageSwitcher";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsible, setCollapsible] = useState(false);
  const onToggle = () => setCollapsible((prev) => !prev);


  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: collapsible },
        [className]
      )}
    >
      <button aria-label="sidebar-open-btn" onClick={onToggle}>Toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};




// названия блока _ название модификатора
// названия блока__назвния элемента _ название модификатора
(
  <>
    <div className="header__container"></div>
    <header className="header">
      <div className="header__container container">
        <nav className="header__menu">
          <a className="header__link header__link_active" href="">Main</a>
          <a className="header__link" href="">Home</a>
          <a className="header__link" href="">About</a>
        </nav>
      </div>
    </header>
    <section className="about">
      <div className="about__container container">

      </div>
    </section>
  </>
)