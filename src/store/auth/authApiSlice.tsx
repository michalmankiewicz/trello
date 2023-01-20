import { apiSlice } from '../../api/apiSlice';

type CreateNewAccountType = {
  name: string;
  login: string;
  password: string;
};
type getTokenType = {
  login: string;
  password: string;
};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNewAccount: builder.mutation({
      query: (data: CreateNewAccountType) => ({
        url: '/signup',
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    getToken: builder.mutation({
      query: (data: getTokenType) => ({
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
