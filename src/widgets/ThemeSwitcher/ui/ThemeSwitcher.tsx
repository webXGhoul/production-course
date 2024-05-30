import { FC } from "react";
import styles from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();

  return (
    <button className={classNames(styles.ThemeSwitcher, {}, [className])}>
      <button onClick={toggleTheme}>TOGGLE</button>
    </button>
  );
};

// Work on tomorrow:
// Add svgr loader
// Add file-loader
// add in file-loader options to use font
// import png, jpeg for typescript
// declare for svgr
