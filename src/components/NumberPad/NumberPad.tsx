import {Icon} from "../Icon/Icon";
import "./NumberPad.css";

export interface NumberPadProps {
  onInput: (value: string) => void;
  onDelete?: () => void;
  onEnter?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const keys = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["del", "0", "ok"],
];

export const NumberPad: React.FC<NumberPadProps> = ({
  onInput,
  onDelete,
  onEnter,
  disabled = false,
  style,
}) => {
  const handleClick = (key: string) => {
    if (disabled) return;
    if (key === "del") {
      onDelete && onDelete();
    } else if (key === "ok") {
      onEnter && onEnter();
    } else {
      onInput(key);
    }
  };

  return (
    <div className="number-pad" style={style}>
      {keys.map((row, i) => (
        <div className="number-pad-row" key={i}>
          {row.map((key) => (
            <button
              key={key}
              className={`number-pad-key${key === "del" ? " del" : ""}${
                key === "ok" ? " ok" : ""
              }`}
              onClick={() => handleClick(key)}
              disabled={disabled}
              type="button"
            >
              {key === "del" ? (
                <Icon name="backspace" size={20} color={"inherit"} />
              ) : key === "ok" ? (
                <Icon name="check" size={20} color={"inherit"} />
              ) : (
                key
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
