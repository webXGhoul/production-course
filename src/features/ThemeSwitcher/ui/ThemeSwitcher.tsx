import { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
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
    <Button className={className} theme={ButtonTheme.CLEAR}>
      {globalTheme === Theme.DARK ? (
        <DarkIcon onClick={toggleTheme} />
      ) : (
        <LightIcon onClick={toggleTheme} />
      )}
    </Button>
  );
};
