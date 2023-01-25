import { apiSlice } from '../../api/apiSlice';
import { FormData } from '../../types/auth';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNewAccount: builder.mutation({
      query: (data: FormData) => ({
        url: '/signup',
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    getToken: builder.mutation({
      query: (data: Omit<FormData, 'name'>) => ({
        url: '/signin',
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    getBoards: builder.query({
      query: () => '/boards',
    }),
  }),
});

export const { useCreateNewAccountMutation, useGetTokenMutation, useGetBoardsQuery } = authApiSlice;
