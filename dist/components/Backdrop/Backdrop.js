import { jsx as _jsx } from "react/jsx-runtime";
import "./Backdrop.css";
export default function Backdrop({ children, show = false, onClick }) {
    return (_jsx("div", { className: `backdrop${show ? " show" : ""}`, onClick: onClick, children: children }));
}
