import { useEffect, useState } from "react";
import "./ToggleButtonGroup.css";
import { Icon } from "../Icon/Icon";
interface ToggleOption {
  label?: string;
  icon?: string;
  value: string | number;
}

interface ToggleButtonGroupProps {
  options: ToggleOption[];
  value?: string | number | (string | number)[];
  vertical?: boolean;
  onChange?: (value: string | number | (string | number)[]) => void;
  multiple?: boolean;
  style?: React.CSSProperties
  optionStyle?: React.CSSProperties
}

export  function ToggleButtonGroup({
  options,
  value,
  vertical = false,
  onChange,
  multiple = false,
  style,
  optionStyle
}: ToggleButtonGroupProps) {
  const [internalValue, setInternalValue] = useState<typeof value>(
    value ?? (multiple ? [] : "")
  );

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const isSelected = (val: string | number) => {
    return multiple
      ? Array.isArray(internalValue) && internalValue.includes(val)
      : internalValue === val;
  };

  const handleClick = (val: string | number) => {
    let newValue: typeof value;

    if (multiple && Array.isArray(internalValue)) {
      newValue = internalValue.includes(val)
        ? internalValue.filter((v) => v !== val)
        : [...internalValue, val];
    } else {
      newValue = val;
    }

    setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div>
      <div className={`toggle-button-group ${vertical ? "vertical" : ""} ${options[0].icon ? "icon" : ""}`} style={style}>
        {options.map((opt) => (
          <button
            key={opt.value}
            style={optionStyle}
            className={isSelected(opt.value) ? "active" : ""}
            onClick={() => handleClick(opt.value)}
          >
            {opt.label && opt.label}
            {opt.icon && <Icon name={opt.icon} color="inherit" />}
          </button>
        ))}
      </div>
    </div>
  );
}
