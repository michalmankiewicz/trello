import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Column } from '../../../types/columns';
import ColumnItem from '../columnItem/ColumnItem';
import { ColumnsContainer, Header, Title, BackLink, List, NewColumn } from './ColumnList.styled';
import { CaretLeft, Plus } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import { useGetBoardWithDetailsQuery } from '../../../store/boards/boardsApiSlice';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { updateTypes } from '../../../types/boards';
import useModal from '../../../hooks/useModal';
import UpdateColumnModal from '../updateColumnModal/UpdateColumnModal';
import { useAppDispatch } from '../../../types/redux';
import { setError } from '../../../store/status/statusSlice';

function ColumnList() {
  const { boardId } = useParams();

  const { data, isError } = useGetBoardWithDetailsQuery(boardId ?? skipToken);

  const [isColumnEditing, setIsColumnEditing] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(setError('Something went wrong'));
    }
  }, [dispatch, isError]);

  // Modal logic
  const { isShowing: isModalOpen, openModal, closeModal } = useModal();

  const [modalStatus, setModalStatus] = useState<updateTypes | undefined>();
  const [columnId, setColumnId] = useState<string | undefined>();

  const updateColumn = useCallback(
    (type: updateTypes | undefined, id?: string) => {
      setModalStatus(type);
      setColumnId(id);
      openModal();
    },
    [openModal]
  );

  const sortedColumns = useMemo(() => {
    if (!data) return;

    const newArray = [...data.columns];

    return newArray.sort((a: Column, b: Column) => a.order - b.order);
  }, [data]);

  return (
    <>
      <ColumnsContainer>
        <Header>
          <Title>{data?.title}</Title>
          <BackLink to="/boards">
            <CaretLeft />
            <span>Back</span>
          </BackLink>
        </Header>

        <List>
          {sortedColumns?.map((col: Column) => (
            <ColumnItem
              key={col.id}
              title={col.title}
              tasks={col.tasks}
              boardId={boardId ?? ''}
              id={col.id}
              order={col.order}
              onDeleteColumn={() => {
                updateColumn('delete', col.id);
              }}
              isColumnEditing={isColumnEditing}
              setIsColumnEditing={setIsColumnEditing}
            />
          ))}
          <NewColumn onClick={() => updateColumn('add')}>
            <Plus weight="bold" />
          </NewColumn>
        </List>
      </ColumnsContainer>
      {isModalOpen && (
        <UpdateColumnModal
          type={modalStatus}
          boardId={boardId ?? ''}
          columnId={columnId}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default memo(ColumnList);
