import React from "react";
interface ColumnProps {
    children: React.ReactNode;
    alignItem?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    justifyItem?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    gap?: number;
    style?: React.CSSProperties;
}
export declare function Column({ children, style, alignItem, justifyItem, gap, ...rest }: ColumnProps): import("react/jsx-runtime").JSX.Element;
export {};
