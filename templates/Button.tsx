import { FC } from 'react';
import { Color, ColorDefault, get_color_darker, get_color_string } from '../models/Colors';

interface ButtonProps {
    value: string,
    onclick: () => void,
    color?: Color
}


const Button: FC<ButtonProps> = ({ value, onclick, color }) => {
    if (color === undefined) color = ColorDefault;

    return (
        <button
            onClick={onclick}
            className={`
                    ${get_color_string(color)} 
                    hover:${get_color_darker(color, 100)}
                    px-5 py-3 uppercase tracking-wider 
                    shadow-md hover:shadow-xl rounded-lg 
                    transition duration-300 text-white font-bold
                `}
        >{value}</button>
    )
}

export default Button;
