import { ChangeEventHandler } from "react"
interface LevelInputProps {
    max: number,
    onChange: ChangeEventHandler<HTMLInputElement>
}
export const LevelInput = ({ max, onChange }: LevelInputProps) => {
    const handleValue: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (Number(e.target.value) > max) {
            e.target.value = String(max)
        }
        onChange(e)
    }
    return <input type="number" max={max} onChange={handleValue} placeholder={`Max Lvl.${max}`} />
}