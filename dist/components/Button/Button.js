import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import "./Button.css";
import { Icon } from "../Icon/Icon";
export function Button({ label, children, variant = "secondary", size = "medium", className = "", active = false, loading = false, icon, iconColor, style, ...rest }) {
    return (_jsxs("button", { className: `btn btn-${variant} btn-${size} ${active ? "btn-active" : ""} ${className}`, style: style, ...rest, children: [loading ? (_jsx(Icon, { name: "circle-notch", spin: true })) : (label ?? React.Children.toArray(children)), icon && _jsx(Icon, { name: icon, size: size === "small" ? 12 :
                    size === "medium" ? 16 :
                        size === "large" ? 20 : 16, color: iconColor })] }));
}
