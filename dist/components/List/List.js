import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import "./list.css";
export function List({ children, flex = 1, gap = 0, scrollable = false, style, ...rest }) {
    return (_jsx("div", { className: "list", ...rest, style: {
            flex,
            gap: `${gap}px`,
            overflowY: scrollable ? "auto" : "unset",
            ...style,
        }, children: React.Children.toArray(children) }));
}
