import { jsx as _jsx } from "react/jsx-runtime";
import { Icon } from "../Icon/Icon";
import "./NumberPad.css";
const keys = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["del", "0", "ok"],
];
export const NumberPad = ({ onInput, onDelete, onEnter, disabled = false, style, }) => {
    const handleClick = (key) => {
        if (disabled)
            return;
        if (key === "del") {
            onDelete && onDelete();
        }
        else if (key === "ok") {
            onEnter && onEnter();
        }
        else {
            onInput(key);
        }
    };
    return (_jsx("div", { className: "number-pad", style: style, children: keys.map((row, i) => (_jsx("div", { className: "number-pad-row", children: row.map((key) => (_jsx("button", { className: `number-pad-key${key === "del" ? " del" : ""}${key === "ok" ? " ok" : ""}`, onClick: () => handleClick(key), disabled: disabled, type: "button", children: key === "del" ? (_jsx(Icon, { name: "backspace", size: 20, color: "inherit" })) : key === "ok" ? (_jsx(Icon, { name: "check", size: 20, color: "inherit" })) : (key) }, key))) }, i))) }));
};
