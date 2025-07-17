import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./ToggleButtonGroup.css";
import { Icon } from "../Icon/Icon";
export function ToggleButtonGroup({ options, value, vertical = false, onChange, multiple = false, style, optionStyle }) {
    const [internalValue, setInternalValue] = useState(value ?? (multiple ? [] : ""));
    const isSelected = (val) => {
        return multiple
            ? Array.isArray(internalValue) && internalValue.includes(val)
            : internalValue === val;
    };
    const handleClick = (val) => {
        let newValue;
        if (multiple && Array.isArray(internalValue)) {
            newValue = internalValue.includes(val)
                ? internalValue.filter((v) => v !== val)
                : [...internalValue, val];
        }
        else {
            newValue = val;
        }
        setInternalValue(newValue);
        onChange?.(newValue);
    };
    return (_jsx("div", { children: _jsx("div", { className: `toggle-button-group ${vertical ? "vertical" : ""} ${options[0].icon ? "icon" : ""}`, style: style, children: options.map((opt) => (_jsxs("button", { style: optionStyle, className: isSelected(opt.value) ? "active" : "", onClick: () => handleClick(opt.value), children: [opt.label && opt.label, opt.icon && _jsx(Icon, { name: opt.icon, color: "inherit" })] }, opt.value))) }) }));
}
