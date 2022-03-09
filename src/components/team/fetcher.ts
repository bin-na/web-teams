import { User } from './interface';
import { get } from 'fetcher';

export const getUsers = async (): Promise<User[] | null> => {
  const res = await get<User[]>('api/users');

  if (!res.success) {
    console.log(res.message);
  }

  return res.data;
};
