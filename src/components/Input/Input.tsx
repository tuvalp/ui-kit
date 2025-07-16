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

export function Input({
  label,
  value,
  type = "text",
  onChange,
  variant = "solid",
  leadingIcon,
  actionIcon,
  onActionClick,
  ...rest
}: InputProps) {
  return (
    <div className={`input-wrapper input-${variant}`}>
      {leadingIcon && <div className="input-icon leading">{leadingIcon}</div>}
      <input
        {...rest}
        type={type}
        className="input-field"
        value={value}
        onChange={onChange}
      />
      {actionIcon && (
        <button
          type="button"
          className="input-icon action"
          onClick={onActionClick}
        >
          {actionIcon}
        </button>
      )}
    </div>
  );
}
