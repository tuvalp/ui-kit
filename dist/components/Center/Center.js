import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export function Center({ children, style, ...rest }) {
    return (_jsx("div", { ...rest, style: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            ...style,
        }, children: React.Children.toArray(children) }));
}
