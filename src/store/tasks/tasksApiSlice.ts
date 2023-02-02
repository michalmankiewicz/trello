import { apiSlice } from '../../api/apiSlice';
import { EditTaskPayload, NewTaskPayload } from '../../types/tasks';

export const tasksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTask: builder.mutation({
      query: (data: { boardId: string; columnId: string; body: NewTaskPayload }) => ({
        url: `/boards/${data.boardId}/columns/${data.columnId}/tasks`,
        method: 'POST',
        body: data.body,
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation({
      query: (data: { boardId: string; columnId: string; taskId: string }) => ({
        url: `/boards/${data.boardId}/columns/${data.columnId}/tasks/${data.taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
    editTask: builder.mutation({
      query: (data: {
        body: EditTaskPayload;
        boardId: string;
        columnId: string;
        taskId: string;
      }) => ({
        url: `/boards/${data.boardId}/columns/${data.columnId}/tasks/${data.taskId}`,
        method: 'PUT',
        body: {
          ...data.body,
          boardId: data.boardId,
          columnId: data.columnId,
        },
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const { useAddTaskMutation, useEditTaskMutation, useDeleteTaskMutation } = tasksApiSlice;
