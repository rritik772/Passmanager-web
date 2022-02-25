import { FC } from 'react';
import { Color, get_color_string } from "../models/Colors";

interface MessageProps {
    message: string,
    textColor?: Color,
}

const Message: FC<MessageProps> = ({ textColor, message }) => {
    if (textColor === undefined) {
        textColor = {
            where: "text",
            color: "red",
            intensity: 500
        }
    }

    return (
        <span className={`${get_color_string(textColor)} font-bold`}>{message}</span>
    )
}

export default Message;