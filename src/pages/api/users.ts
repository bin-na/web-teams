import type { NextApiRequest, NextApiResponse } from 'next';
import { Response } from '../../interfaces/response';

type Data = {
  id: string;
  name: string;
  old: number;
  description: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Response<Data[]>>) {
  try {
    const data: Data[] = [
      {
        id: 'binh_na',
        name: 'Binh NA',
        description: 'Bình thích màu hồng nhưng hem pê tê',
        old: 25,
      },
      {
        id: 'binh_na',
        name: 'Binh NA',
        description: 'Bình thích màu hồng nhưng hem pê tê',
        old: 25,
      },
      {
        id: 'binh_na',
        name: 'Binh NA',
        description: 'Bình thích màu hồng nhưng hem pê tê',
        old: 25,
      },
      {
        id: 'binh_na',
        name: 'Binh NA',
        description: 'Bình thích màu hồng nhưng hem pê tê',
        old: 25,
      },
    ];
    res.status(200).json({
      success: true,
      message: 'successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Server error!',
      data: null,
    });
  }
}
