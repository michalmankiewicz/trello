import { apiSlice } from '../../api/apiSlice';
import { EditColumnPayload, NewColumnPayload } from '../../types/columns';

export const columnApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addColumn: builder.mutation({
      query: (data: { boardId: string; body: NewColumnPayload }) => ({
        url: `/boards/${data.boardId}/columns`,
        method: 'POST',
        body: data.body,
      }),
      invalidatesTags: ['Columns'],
    }),
    deleteColumn: builder.mutation({
      query: (data: { boardId: string; columnId: string }) => ({
        url: `boards/${data.boardId}/columns/${data.columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Columns'],
    }),
    editColumn: builder.mutation({
      query: (data: { body: EditColumnPayload; boardId: string; columnId: string }) => ({
        url: `boards/${data.boardId}/columns/${data.columnId}`,
        method: 'PUT',
        body: {
          title: data.body.title,
          order: data.body.order,
        },
      }),
      invalidatesTags: ['Columns'],
    }),
  }),
});

export const { useAddColumnMutation, useEditColumnMutation, useDeleteColumnMutation } =
  columnApiSlice;
