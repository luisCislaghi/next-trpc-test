export type ErrorResponse = { message?: string };

export type ListResponse<T> = ErrorResponse & {
  data?: T[];
};
export type ItemResponse<T> = ErrorResponse & {
  data?: T;
};

export type Entity = { id?: number };
