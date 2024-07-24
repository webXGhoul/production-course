import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui";
import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};