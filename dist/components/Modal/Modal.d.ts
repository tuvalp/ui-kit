import React from "react";
import "./Modal.css";
interface ModalProps {
    show: boolean;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    onClose: () => void;
    width?: string | number;
    height?: string | number;
}
export declare function Modal({ show, title, footer, children, onClose, width, height, }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
export {};
