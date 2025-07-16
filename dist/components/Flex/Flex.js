import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export function Flex({ children, style, alignItem, justifyItem, flex = 1, ...rest }) {
    return (_jsx("div", { ...rest, style: {
            display: "flex",
            flex: flex,
            alignItems: alignItem,
            justifyContent: justifyItem,
            flexDirection: "column",
            ...style,
        }, children: React.Children.toArray(children) }));
}
