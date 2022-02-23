import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { Color, get_color_string, NavBarBackgroundDefault, TextDefaultColor, TextHoverDefaultColor } from "../models/Colors";
import { Links } from "../models/Links";


interface NavBarProps {
    title: string,
    links: Links[],
    background?: Color,
    textColor?: Color,
    textHoverColor?: Color
}

const NavBar: FC<NavBarProps> = ({ title, links, background, textColor, textHoverColor }) => {
    if (background === undefined) background = NavBarBackgroundDefault;
    if (textColor === undefined) textColor = TextDefaultColor;
    if (textHoverColor === undefined) textHoverColor = TextHoverDefaultColor;

    const [isMenuShowing, setIsMenuShowing] = useState<boolean>(false);
    const router = useRouter();

    return (
        <nav className={`
                ${get_color_string(background)}
                ${get_color_string(textColor)}
                py-6 px-5 rounded-lg w-full flex md:items-center md:justify-between
                hover:shadow-xl shadow-md transition duration-500
                flex-col md:flex-row space-y-8 md:space-y-0
                container mx-auto my-5
        `}>
            <div className={`flex space-x-5 text-2xl items-center cursor-pointer hover:${get_color_string(textHoverColor)}`}>
                <button className="md:hidden" onClick={() => setIsMenuShowing(!isMenuShowing)}>
                    <i className="bi bi-menu-button-wide"></i>
                </button>
                <button>
                    <span className="font-bold uppercase tracking-widest hover:drop-shadow-lg">{title}</span>
                </button>
            </div>

            <div className={`pr-5 flex md:flex md:space-x-5 space-y-2 md:space-y-0 flex-col md:flex-row items-start ${(!isMenuShowing) && 'hidden'}`}>
                {
                    Array.from(links).map((link, key) => (
                        <Link href={link.link} key={key}>
                            <a className="hover:underline decoration-2 underline-offset-4 cursor-pointer text-bold tracking-wide uppercase">{link.value}</a>
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default NavBar;
