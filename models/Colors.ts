export interface Color {
    where: string,
    color: string,
    intensity: number,
    alpha?: number,
}

export const ColorDefault: Color = {
    where: "bg",
    color: "blue",
    intensity: 500,
};

export const NavBarBackgroundDefault: Color = {
    where: "bg",
    color: "blue",
    intensity: 500,
};

export const TextDefaultColor: Color = {
    where: "text",
    color: "gray",
    intensity: 50
}

export const TextHoverDefaultColor: Color = {
    where: "text",
    color: "cyan",
    intensity: 200
}


export const get_color_string = (color: Color): string => {
    let alpha = ""
    if (color.alpha) alpha = `/${color.alpha}`;

    return `${color.where}-${color.color}-${color.intensity}${alpha}`;
}
