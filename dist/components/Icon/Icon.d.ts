import React from "react";
interface IconProps extends React.HTMLAttributes<HTMLElement> {
    name: string;
    fullName?: boolean;
    size?: number;
    color?: string;
    type?: "solid" | "regular" | "light";
    spin?: boolean;
}
export declare function Icon({ name, fullName, size, color, type, spin, style, ...rest }: IconProps): import("react/jsx-runtime").JSX.Element;
export {};
