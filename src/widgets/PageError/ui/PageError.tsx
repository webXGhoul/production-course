import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const onReload = () => location.reload();

    const { t } = useTranslation();
    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <h1>{t("Непредвиденная ошибка")}</h1>
            <Button className={styles.btn} theme={ButtonTheme.CLEAR} onClick={onReload}>{t("Перезагрузить страницу")}</Button>
        </div>
    );
};