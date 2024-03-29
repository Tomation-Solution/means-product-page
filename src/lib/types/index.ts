export type AppError = {
  error: string | null;
};

export type ResultWithData<T> = Promise<AppError | T | null>;
