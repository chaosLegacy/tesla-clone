export type MetaProps = {
    title: string;
    keywords: string;
    description: string;
}

export type sectionsType = {
    id: number;
    title: string;
    description: string;
    image: string,
    primaryBtnText: string;
    secondaryBtnText: string;
    range?: string;
    time?: string;
    topSpeed?: string;
    peakPower?: string;
}

export type carsType = {
    id: number;
    title: string;
    description: string;
    image: string,
    range?: string,
    time?: string,
    topSpeed?: string,
    peakPower?: string,
}