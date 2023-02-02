import { Plus } from 'phosphor-react';
import React, { memo, useCallback, useMemo, useState } from 'react';
import useModal from '../../../hooks/useModal';
import { updateTypes } from '../../../types/boards';
import { Task } from '../../../types/tasks';
import TaskItem from '../taskItem/TaskItem';
import UpdateTaskModal from '../updateTaskModal/UpdateTaskModal';
import { TaskListContainer, NewTask } from './TaskList.styled';

type Props = {
  tasks: Task[];
  boardId: string;
  columnId: string;
};

function TaskList(props: Props) {
  const [isEditing, setIsEditing] = useState('');

  // Modal logic
  const { isShowing: isModalOpen, openModal, closeModal } = useModal();

  const [modalStatus, setModalStatus] = useState<updateTypes | undefined>();
  const [taskId, setTaskId] = useState<string | undefined>();

  const updateTasks = useCallback(
    (type: updateTypes | undefined, id?: string) => {
      setModalStatus(type);
      setTaskId(id);
      openModal();
    },
    [openModal]
  );

  const sortedTasks = useMemo(() => {
    if (!props) return;

    const newArray = [...props.tasks];

    return newArray.sort((a: Task, b: Task) => a.order - b.order);
  }, [props]);

  return (
    <>
      <TaskListContainer>
        {sortedTasks?.map((task) => (
          <TaskItem
            onDeleteTask={() => {
              updateTasks('delete', task.id);
            }}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            key={task.id}
            title={task.title}
            id={task.id}
            order={task.order}
            boardId={props.boardId}
            columnId={props.columnId}
          />
        ))}
        <NewTask
          onClick={() => {
            updateTasks('add');
          }}
        >
          <Plus weight="bold" />
        </NewTask>
      </TaskListContainer>
      {isModalOpen && (
        <UpdateTaskModal
          type={modalStatus}
          closeModal={closeModal}
          boardId={props.boardId}
          columnId={props.columnId}
          taskId={taskId}
        />
      )}
    </>
  );
}

export default memo(TaskList);
