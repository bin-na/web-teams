import { Response } from 'interfaces/response';

export const get = async <T>(url: string, param?: any): Promise<Response<T>> => {
  try {
    const res = await fetch(url, param);

    if (res.ok) {
      const data = (await res.json()) as Response<T>;
      return data;
    }

    return {
      success: false,
      data: null,
      message: 'server error!',
    };
  } catch (err: any) {
    return {
      success: false,
      data: null,
      message: err.message,
    };
  }
};
