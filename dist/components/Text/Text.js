import { jsx as _jsx } from "react/jsx-runtime";
import "./Text.css";
export function Text({ children, size = "md", weight = "normal", align = "left", color, style, className = "", ...rest }) {
    return (_jsx("span", { className: `text text-${size} text-${weight} text-align-${align} ${className}`, style: { color, ...style }, ...rest, children: children }));
}
