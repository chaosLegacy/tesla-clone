// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { carsType } from '../cars';
import sectionsList from '../sectionData.json';


export default function handler(
    { query: { id } }: { query: { id: string } },
    res: NextApiResponse<carsType | object>
) {
    const carData = sectionsList.filter(section => section.id.toString() === id);
    if (carData.length > 0) {
        res.status(200).json(carData[0]);
    } else {
        res.status(404).json({});
    }

}
