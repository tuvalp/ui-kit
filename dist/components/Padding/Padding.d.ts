import React from "react";
interface PaddingProps {
    children: React.ReactNode;
    padding?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    style?: React.CSSProperties;
}
export declare function Padding({ children, padding, paddingTop, paddingBottom, paddingLeft, paddingRight, style, }: PaddingProps): import("react/jsx-runtime").JSX.Element;
export {};
