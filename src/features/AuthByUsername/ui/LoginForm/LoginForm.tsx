import { FC, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme, Input, Text, TextTheme } from "shared/ui";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation("main");
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const onChangeUserPassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserPassword(value));
    },
    [dispatch]
  );

  const onClickLoginUser = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text content={error} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        placeholder={t("Введите имя")}
        className={styles.input}
        type="text"
        onChange={onChangeUserName}
      />
      <Input
        placeholder={t("Введите пароль")}
        className={styles.input}
        type="text"
        onChange={onChangeUserPassword}
      />
      <Button
        onClick={onClickLoginUser}
        disabled={isLoading}
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
      >
        {t("Войти")}
      </Button>
    </div>
  );
};
