import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames("" , {}, [className])}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
