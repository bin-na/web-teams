import type { NextApiRequest, NextApiResponse } from 'next';
import { Response } from '../../interfaces/response';

type Data = {
  id: string;
  name: string;
  role: string;
  old: number;
  description: string;
  meme: string,
  phone: string
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Response<Data[]>>) {
  try {
    const data: Data[] = [
      {
        id: 'binh_na',
        name: 'Nguyễn An Bình',
        role: 'Frontend Developer',
        description: 'Bình thích màu hồng và pê tê',
        old: 25,
        meme: "meme/meme2.png",
        phone: '0984707504'
      },
      {
        id: 'binh_na',
        name: 'Nguyễn Ngọc Long',
        role: 'Frontend Internship',
        description: 'Bình thích màu hồng nhưng hem pê tê',
        old: 25,
        meme: "meme/meme1.png",
        phone: '0984707504'
      },
      
      {
        id: 'binh_na',
        name: 'Trương Thị Phương',
        role: 'Frontend Internship',
        description: 'Bình thích màu hồng nhưng hem pê tê',
        old: 25,
        meme: "meme/meme3.png",
        phone: '0984707504'
      },
      {
        id: 'binh_na',
        name: 'Hoàng Trung Nam',
        role: 'Frontend Internship',
        description: 'Bình thích màu hồng nhưng hem pê tê',
        old: 25,
        meme: "meme/meme4.png",
        phone: '0984707504'
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
