import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export function Row({ children, style, alignItem, justifyItem, gap = 0, ...rest }) {
    return (_jsx("div", { ...rest, style: {
            display: "flex",
            flex: 1,
            alignItems: alignItem,
            justifyContent: justifyItem,
            flexDirection: "row",
            gap: `${gap}px`,
            ...style,
        }, children: React.Children.toArray(children) }));
}
