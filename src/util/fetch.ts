import { NextResponse } from 'next/server';

export async function fetchWrapper(input: RequestInfo, init?: RequestInit) {
  const defaultInit: RequestInit = {
    cache: 'no-store',
    ...init,
  };

  return fetch(
    `http://localhost:5174/api/${input}`,
    defaultInit,
  ) as Promise<NextResponse>;
}
