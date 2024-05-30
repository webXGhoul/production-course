import { FC } from "react";
import styles from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

import DarkIcon from "shared/assets/theme-dark.svg";
import LightIcon from "shared/assets/theme-light.svg";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme, theme: globalTheme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR}>
      {globalTheme === Theme.DARK ? (
        <DarkIcon onClick={toggleTheme} />
      ) : (
        <LightIcon onClick={toggleTheme} />
      )}
    </Button>
  );
};
