export interface Response<T> {
  success: boolean;
  data: T | null;
  message: string;
}
