import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import "./ListItem.css";
export function ListItem({ children, alignItem, justifyItem, padding = "8px 16px", gap = 8, style, ...rest }) {
    return (_jsx("div", { className: "list-item", style: {
            alignItems: alignItem,
            justifyContent: justifyItem,
            padding,
            gap: `${gap}px`,
            ...style,
        }, ...rest, children: React.Children.toArray(children) }));
}
