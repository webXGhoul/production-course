import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted"
}

export enum ButtonSizes {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSizes;
  square?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  size,
  square,
  ...props
}) => {
  const mods: Record<string, boolean> = {
    [styles.square]: square,
  };
  const additional: string[] = [className, styles[theme], styles[size]];
  
  return (
    <button
      className={classNames(styles.Button, mods, additional)}
      {...props}
    >
      {children}
    </button>
  );
};
