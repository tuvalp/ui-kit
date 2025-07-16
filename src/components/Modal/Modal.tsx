import React, { useEffect } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { Card } from "../Card/Card";
import "./Modal.css";

interface ModalProps {
  show: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
  width?: string | number;
  height?: string | number;
}

export  function Modal({
  show,
  title,
  footer,
  children,
  onClose,
  width = 400,
  height = "auto",
}: ModalProps) {
  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (show) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <Backdrop show={show} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ width, height }}>
        <Card
          style={{ padding: 0, overflow: "hidden", width: "100%", height: "100%" }}
          elevted
        >
          {title && (
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              <button className="modal-close" onClick={onClose}>
                &times;
              </button>
            </div>
          )}
          <div className="modal-body">{children}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </Card>
      </div>
    </Backdrop>
  );
}
