import { jsx as _jsx } from "react/jsx-runtime";
import "./Divider.css";
export function Divider({ vertical = false, dashed = false, color = "var(--color-border)", thickness = "1px", length = "100%", spacing = "12px 0", }) {
    const style = vertical
        ? {
            width: thickness,
            height: length,
            margin: `0 ${spacing}`,
            borderLeft: dashed ? `1px dashed ${color}` : `1px solid ${color}`,
        }
        : {
            height: thickness,
            width: length,
            margin: spacing,
            borderBottom: dashed ? `1px dashed ${color}` : `1px solid ${color}`,
        };
    return _jsx("div", { className: "divider", style: style });
}
