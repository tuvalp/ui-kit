import React from "react";
interface FlexProps {
    children?: React.ReactNode;
    alignItem?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    flex?: number;
    justifyItem?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    style?: React.CSSProperties;
}
export declare function Flex({ children, style, alignItem, justifyItem, flex, ...rest }: FlexProps): import("react/jsx-runtime").JSX.Element;
export {};
