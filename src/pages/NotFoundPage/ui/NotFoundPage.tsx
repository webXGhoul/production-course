import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            <h1>{t("Страница не найдена")}</h1>
        </div>
    );
};