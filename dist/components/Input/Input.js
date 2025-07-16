import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Input.css";
export function Input({ label, value, type = "text", onChange, variant = "solid", leadingIcon, actionIcon, onActionClick, ...rest }) {
    return (_jsxs("div", { className: `input-wrapper input-${variant}`, children: [leadingIcon && _jsx("div", { className: "input-icon leading", children: leadingIcon }), _jsx("input", { ...rest, type: type, className: "input-field", value: value, onChange: onChange }), actionIcon && (_jsx("button", { type: "button", className: "input-icon action", onClick: onActionClick, children: actionIcon }))] }));
}
