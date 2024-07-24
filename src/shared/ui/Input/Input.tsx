import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  SyntheticEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder = "Введите текст",
    autofocus = false,
    ...otherProps
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef?.current;
    if (autofocus) {
      setIsFocus(true);
      input.focus();
    }
    return () => {
      setIsFocus(false);
    };
  }, [autofocus]);

  const onBlur = () => {
    setIsFocus(false);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onSelect = (e: SyntheticEvent<HTMLInputElement>) => {
    const input = e?.target as HTMLInputElement;
    setCaretPosition(input?.selectionStart || 0);
  };

  return (
    <div className={classNames(styles.Input, {}, [className])}>
      {placeholder && (
        <div className={styles.Input__placeholder}>{placeholder + ">"}</div>
      )}
      <div className={styles.Input__wrapper}>
        <input
          className={styles.Input__content}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onSelect={onSelect}
          onBlur={onBlur}
          ref={inputRef}
          {...otherProps}
        />

        {isFocus && (
          <span
            style={{ left: caretPosition * 9 }}
            className={styles.Input__caret}
          ></span>
        )}
      </div>
    </div>
  );
});
