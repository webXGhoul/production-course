import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";

import styles from "./Modal.module.scss";
import { useTheme } from "app/providers/ThemeProvider";

interface ModalProps {
    className?: string;
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, onClose, isOpen = false } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);

            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const { theme } = useTheme();

    return (
        <Portal>
            <div data-testid="modal" className={classNames(styles.Modal, { [styles.Modal_isOpen]: isOpen, [styles.Modal_isClosing]: isClosing }, [className, theme, "app_modal"])}>
                <div onClick={closeHandler}
                    className={classNames(styles.Modal__overlay,
                    )}>
                    <div onClick={(e) => e.stopPropagation()} className={styles.Modal__content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};