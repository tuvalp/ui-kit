import { jsx as _jsx } from "react/jsx-runtime";
export default function Box({ children, position = "unset", width, height, background = "var(--color-surface)", elvated = false, padding, margin, top, left, right, bottom, zIndex, style, ...rest }) {
    return (_jsx("div", { ...rest, style: {
            position: "absolute",
            display: "flex",
            boxShadow: elvated ? "var(--shadow-md)" : "none",
            width: width,
            height,
            background,
            padding,
            margin,
            top,
            left,
            right,
            bottom,
            zIndex,
            ...style,
        }, children: children }));
}
