import { ChangeEvent, FC } from 'react';
import { get_color_string } from '../models/Colors';
import { Color } from '../models/Colors';

interface InputProps {
    Type: string,
    value: string,
    htmlFor: stirng,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    shadow?: Color,
    border?: Color,
}

const Input: FC<InputProps> = ({ Type, value, htmlFor, onChange, placeholder, shadow, border }) => {
    return (
        <section className='flex flex-col gap-3'>
            <label 
                htmlFor={htmlFor}
                className="tracking-wider text-xl"
            >{htmlFor}</label>
            <input
                className={`
                        ${(shadow) && get_color_string(shadow)}
                        ${(border) && get_color_string(border)}
                        px-5 py-3 border-4 hover:border-blue-200 focus:border-blue-400
                        rounded-lg text-xl focus:outline-none shadow-md hover:shadow-lg 
                        focus:shadow-xl transition duration-300
            `}
                type={`${Type}`}
                id={htmlFor}
                value={value}
                onChange={(e) => onChange(e)}
                placeholder={placeholder}
            />
        </section>
    )
}

export default Input;
