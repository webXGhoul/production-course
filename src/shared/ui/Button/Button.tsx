import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...props}
    >
      {children}
    </button>
  );
};
