import { apiSlice } from '../../api/apiSlice';
import { Board, NewBoard } from '../../types/boards';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBoards: builder.query({
      query: () => '/boards',
      providesTags: ['Boards'],
    }),
    addBoard: builder.mutation({
      query: (data: NewBoard) => ({
        url: 'boards',
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Boards'],
    }),
    deleteBoard: builder.mutation({
      query: (id: string) => ({
        url: `boards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Boards'],
    }),
    editBoard: builder.mutation({
      query: (data: Board) => ({
        url: `boards/${data.id}`,
        method: 'PUT',
        body: {
          title: data.title,
          description: data.description,
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Boards'],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useAddBoardMutation,
  useDeleteBoardMutation,
  useEditBoardMutation,
} = authApiSlice;
