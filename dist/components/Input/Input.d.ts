import React from "react";
import "./Input.css";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    variant?: "solid" | "outline" | "pinBox";
    leadingIcon?: React.ReactNode;
    actionIcon?: React.ReactNode;
    onActionClick?: () => void;
}
export declare function Input({ label, value, type, onChange, variant, leadingIcon, actionIcon, onActionClick, ...rest }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
