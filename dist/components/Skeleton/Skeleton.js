import { jsx as _jsx } from "react/jsx-runtime";
import "./Skeleton.css";
export default function Skeleton({ width = "100%", height = "16px", variant = "rect", animated = true, style, className = "", ...rest }) {
    const borderRadius = variant === "circle" ? "50%" : variant === "text" ? "4px" : "8px";
    return (_jsx("div", { className: `skeleton ${animated ? "skeleton-animated" : ""} ${className}`, style: {
            width,
            height,
            borderRadius,
            ...style,
        }, ...rest }));
}
