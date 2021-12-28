// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as carsList from '../carsData.json';

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

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<carsType>>
) {
    res.status(200).json(carsList)
}
