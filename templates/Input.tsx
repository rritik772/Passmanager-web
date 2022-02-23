import { ChangeEvent, FC } from 'react';
import { get_color_string } from '../models/Colors';
import { Color } from '../models/Colors';

interface InputProps {
    Type: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    shadow?: Color,
    border?: Color,
}

const Input: FC<InputProps> = ({ Type, value, onChange, placeholder, shadow, border }) => {
    return (
        <input
            className={`
                        ${(shadow) && get_color_string(shadow)}
                        ${(border) && get_color_string(border)}
                        px-3 py-2 border-2 border-gray-400 rounded-lg focus:outline-none shadow-md hover:shadow-lg focus:shadow-xl transition duration-300
            `}
            type={`${Type}`}
            name=""
            value={value}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
        />
    )
}

export default Input;
