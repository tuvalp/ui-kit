import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export function Column({ children, style, alignItem, justifyItem, gap = 0, ...rest }) {
    return (_jsx("div", { ...rest, style: {
            display: "flex",
            alignItems: alignItem,
            justifyContent: justifyItem,
            flexDirection: "column",
            gap: `${gap}px`,
            ...style,
        }, children: React.Children.toArray(children) }));
}
