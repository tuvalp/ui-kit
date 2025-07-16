import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { Card } from "../Card/Card";
import "./Modal.css";
export function Modal({ show, title, footer, children, onClose, width = 400, height = "auto", }) {
    // Close on ESC
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape")
                onClose();
        };
        if (show)
            document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [show, onClose]);
    if (!show)
        return null;
    return (_jsx(Backdrop, { show: show, onClick: onClose, children: _jsx("div", { className: "modal", onClick: (e) => e.stopPropagation(), style: { width, height }, children: _jsxs(Card, { style: { padding: 0, overflow: "hidden", width: "100%", height: "100%" }, elevted: true, children: [title && (_jsxs("div", { className: "modal-header", children: [_jsx("div", { className: "modal-title", children: title }), _jsx("button", { className: "modal-close", onClick: onClose, children: "\u00D7" })] })), _jsx("div", { className: "modal-body", children: children }), footer && _jsx("div", { className: "modal-footer", children: footer })] }) }) }));
}
