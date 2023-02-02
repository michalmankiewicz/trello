import { Trash } from 'phosphor-react';
import React, { Dispatch, useRef } from 'react';
import { selectUserId } from '../../../store/auth/authSelectors';
import { setError } from '../../../store/status/statusSlice';
import { useEditTaskMutation } from '../../../store/tasks/tasksApiSlice';
import { useAppDispatch, useAppSelector } from '../../../types/redux';
import { handleErrorMessage } from '../../../utils/errorUtils';

import { TaskContainer, Title, ActionButton, Input } from './TaskItem.styled';

type Props = {
  title: string;
  id: string;
  order: number;
  onDeleteTask: () => void;
  isEditing: string;
  setIsEditing: Dispatch<string>;
  boardId: string;
  columnId: string;
};

function TaskItem(props: Props) {
  const [editTask] = useEditTaskMutation();
  const userId = useAppSelector(selectUserId);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const editHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (!value || value.trim() === '' || value.trim().length > 10) return;

    const body = {
      title: value,
      description: 'DUMMY DESCRIPTION',
      order: props.order,
      userId: userId,
    };

    try {
      await editTask({
        body,
        boardId: props.boardId,
        columnId: props.columnId,
        taskId: props.id,
      }).unwrap();
    } catch (err) {
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.setIsEditing('');
  };

  return (
    <TaskContainer>
      {props.isEditing === props.id ? (
        <form onSubmit={editHandler}>
          <Input
            type="text"
            autoFocus={true}
            ref={inputRef}
            defaultValue={props.title}
            onBlur={() => props.setIsEditing('')}
          />
        </form>
      ) : (
        <Title
          onClick={() => {
            props.setIsEditing(props.id);
          }}
        >
          {props.title}, {props.order}
        </Title>
      )}
      <ActionButton onClick={props.onDeleteTask}>
        <Trash />
      </ActionButton>
    </TaskContainer>
  );
}

export default TaskItem;
