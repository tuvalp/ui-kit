import React from "react";
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: number;
    gap?: number;
    wrap?: boolean;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export declare function Grid({ columns, gap, wrap, children, style, ...rest }: GridProps): import("react/jsx-runtime").JSX.Element;
export {};
