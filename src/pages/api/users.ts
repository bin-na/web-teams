import type { NextApiRequest, NextApiResponse } from 'next';
import { Response } from '../../interfaces/response';

type Data = {
  name: string;
  img: string;
  icon: string;
  date_of_birth: string;
  gender: string;
  address: string;
  role: string;
  description: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Response<Data[]>>) {
  try {
    const data: Data[] = [
      {
        name: 'Trương Thị Phương',
        img: '/img/phuong.jpg',
        icon: '/img/icon2.png',
        date_of_birth: '11/07/2000',
        gender: 'Female',
        address: '137 Trần Đình Xu',
        role: 'Frontend Intern',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrysstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
      },
      {
        name: 'Hoàng Trung Nam',
        img: '/img/nam.jpg',
        icon: '/img/icon1.png',
        date_of_birth: '02/01/2000',
        gender: 'Male',
        address: '137 Trần Đình Xu',
        role: 'Frontend Intern',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ',
      },
      {
        name: 'Nguyễn Ngọc Long',
        img: '/img/long.jpg',
        icon: '/img/icon3.png',
        date_of_birth: '11/07/2000',
        gender: 'Male',
        address: '137 Trần Đình Xu',
        role: 'Frontend Intern',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ',
      },
      {
        name: 'Nguyễn An Bình',
        img: '/img/binh.jfif',
        icon: '/img/icon4.png',
        date_of_birth: '11/07/2000',
        gender: 'Male',
        address: '137 Trần Đình Xu',
        role: 'Frontend Intern',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ',
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
