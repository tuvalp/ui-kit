import { jsx as _jsx } from "react/jsx-runtime";
export default function Box({ children, position = "unset", wihth, height, background = "var(--color-surface)", elvated = false, padding, margin, top, left, right, bottom, style, ...rest }) {
    return (_jsx("div", { ...rest, style: {
            position: "absolute",
            display: "flex",
            boxShadow: elvated ? "var(--shadow-md)" : "none",
            width: wihth,
            height,
            background,
            padding,
            margin,
            top,
            left,
            right,
            bottom,
            ...style,
        }, children: children }));
}
