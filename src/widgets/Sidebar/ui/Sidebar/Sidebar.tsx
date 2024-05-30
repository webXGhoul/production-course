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
  console.log(
    classNames(styles.Sidebar, { [styles.collapsed]: collapsible }, [className])
  );

  return (
    <div
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: collapsible },
        [className]
      )}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
