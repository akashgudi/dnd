import { ChangeEventHandler } from "react";
import "./index.scss";

interface LevelInputProps {
  max: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const LevelInput = ({ max, onChange }: LevelInputProps) => {
  const handleValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (Number(e.target.value) > max) {
      e.target.value = String(max); // event being hijacked, may not be the best way to handle this
    }
    onChange(e);
  };
  return (
    <input
      type="number"
      max={max}
      defaultValue={1}
      onChange={handleValue}
      placeholder={`Max Lvl.${max}`}
      className="level-input"
    />
  );
};
