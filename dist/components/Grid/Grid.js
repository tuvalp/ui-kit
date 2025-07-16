import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export function Grid({ columns = 2, gap = 12, wrap = false, children, style, ...rest }) {
    const baseStyle = wrap
        ? {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: `${gap}px`,
        }
        : {
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`,
        };
    return (_jsx("div", { className: "grid", style: { ...baseStyle, ...style }, ...rest, children: React.Children.toArray(children) }));
}
