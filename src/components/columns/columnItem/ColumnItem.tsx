import { Trash } from 'phosphor-react';
import React, { Dispatch, useRef } from 'react';
import { useEditColumnMutation } from '../../../store/columns/columnsApiSlice';
import { setError } from '../../../store/status/statusSlice';
import { useAppDispatch } from '../../../types/redux';
import { Task } from '../../../types/tasks';
import { handleErrorMessage } from '../../../utils/errorUtils';
import TaskList from '../../tasks/taskList/TaskList';
import { ColumnContainer, Actions, Title, ActionButton, Input } from './ColumnItem.styled';

type Props = {
  title: string;
  boardId: string;
  id: string;
  order: number;
  tasks: Task[];
  onDeleteColumn: () => void;
  isColumnEditing: string;
  setIsColumnEditing: Dispatch<string>;
};

function ColumnItem(props: Props) {
  const dispatch = useAppDispatch();
  const [editColumn] = useEditColumnMutation();

  const inputRef = useRef<HTMLInputElement>(null);

  const editHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (!value || value.trim() === '' || value.trim().length > 10) return;

    const body = {
      title: value,
      order: props.order,
    };

    try {
      await editColumn({
        body,
        boardId: props.boardId,
        columnId: props.id,
      }).unwrap();
    } catch (err) {
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.setIsColumnEditing('');
  };

  return (
    <ColumnContainer>
      <Actions>
        {props.isColumnEditing === props.id ? (
          <form onSubmit={editHandler}>
            <Input
              type="text"
              autoFocus={true}
              ref={inputRef}
              defaultValue={props.title}
              onBlur={() => props.setIsColumnEditing('')}
            />
          </form>
        ) : (
          <Title
            onClick={() => {
              props.setIsColumnEditing(props.id);
            }}
          >
            {props.title}, {props.order}
          </Title>
        )}
        <ActionButton onClick={props.onDeleteColumn}>
          <Trash />
        </ActionButton>
      </Actions>
      <TaskList boardId={props.boardId} columnId={props.id} tasks={props.tasks} />
    </ColumnContainer>
  );
}

export default ColumnItem;
