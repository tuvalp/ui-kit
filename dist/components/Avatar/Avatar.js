import { jsx as _jsx } from "react/jsx-runtime";
import "./Avatar.css";
import { Icon } from "../Icon/Icon";
export function Avatar({ src, alt = "avatar", label, icon, color, size = "md", round = true, onClick, style, ...rest }) {
    return (_jsx("div", { ...rest, className: `avatar avatar-${size} ${round ? "avatar-round" : "avatar-square"}`, onClick: onClick, style: { ...style, background: color || "#ccc" }, children: icon ? (_jsx(Icon, { name: icon, size: size === "sm" ? 12 : 16 })) : src ? (_jsx("img", { src: src, alt: alt, className: "avatar-image" })) : label ? (_jsx("span", { className: "avatar-label", children: label })) : (_jsx("span", { className: "avatar-label", children: "?" })) }));
}
