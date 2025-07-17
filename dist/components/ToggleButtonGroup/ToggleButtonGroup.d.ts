import "./ToggleButtonGroup.css";
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
    style?: React.CSSProperties;
    optionStyle?: React.CSSProperties;
}
export declare function ToggleButtonGroup({ options, value, vertical, onChange, multiple, style, optionStyle }: ToggleButtonGroupProps): import("react/jsx-runtime").JSX.Element;
export {};
