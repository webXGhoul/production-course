import { FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  content?: string;
  theme?: TextTheme;
  children?: ReactNode;
}

export const Text: FC<TextProps> = (props) => {
  const { title, content, className, theme = TextTheme.PRIMARY, children} = props;
  return (
    <div className={classNames(styles.Text, {}, [className, styles[theme]])}>
      {title && <p className={styles.Text__title}>{title}</p> || <p className={styles.Text__title}>{children}</p>}
      {content && <p className={styles.Text__content}>{content}</p>}
    </div>
  );
};
