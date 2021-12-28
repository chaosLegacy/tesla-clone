// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as sectionsList from '../sectionData.json';

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
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<sectionsType>>
) {
    res.status(200).json(sectionsList)
}
