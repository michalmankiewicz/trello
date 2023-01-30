import React, { useCallback, useState } from 'react';
import BoardsList from '../components/boards/boardList/BoardsList';
import BoardsModal from '../components/boards/boardsModal/BoardsModal';
import useModal from '../hooks/useModal';
import { useGetBoardsQuery } from '../store/boards/boardsApiSlice';
import { Board, updateTypes } from '../types/boards';
import { useAppSelector } from '../types/redux';

function Boards() {
  const token = useAppSelector((state) => state.auth.token);
  const { data, isLoading, isError } = useGetBoardsQuery(token);

  const { isShowing: isModalOpen, openModal, closeModal } = useModal();
  const [modalStatus, setModalStatus] = useState<updateTypes | undefined>();
  const [chosenBoardData, setChosenBoardData] = useState<Board | undefined>();

  const updateBoards = useCallback(
    (type: updateTypes | undefined, boardData?: Board) => {
      setModalStatus(type);
      setChosenBoardData(boardData);
      openModal();
    },
    [openModal]
  );

  return (
    <>
      <BoardsList
        onUpdateBoards={updateBoards}
        boards={data}
        isLoading={isLoading}
        isError={isError}
      />
      {isModalOpen && (
        <BoardsModal closeModal={closeModal} type={modalStatus} boardData={chosenBoardData} />
      )}
    </>
  );
}

export default Boards;
