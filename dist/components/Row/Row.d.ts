import React from "react";
interface RowProps {
    children: React.ReactNode;
    alignItem?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    justifyItem?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    gap?: number;
    style?: React.CSSProperties;
}
export declare function Row({ children, style, alignItem, justifyItem, gap, ...rest }: RowProps): import("react/jsx-runtime").JSX.Element;
export {};
