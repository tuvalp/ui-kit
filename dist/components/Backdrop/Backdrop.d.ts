import "./Backdrop.css";
interface BackdropProps {
    children: React.ReactNode;
    show?: boolean;
    onClick: () => void;
}
export default function Backdrop({ children, show, onClick }: BackdropProps): import("react/jsx-runtime").JSX.Element;
export {};
