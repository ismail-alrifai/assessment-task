import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "success";
  onClose: () => void;
}

const Alert = ({ children, color = "primary", onClose }: Props) => {
  return (
    <div className={"alert alert-" + color + " alert-dismissible"}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
