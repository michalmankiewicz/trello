import { Spinner } from 'phosphor-react';
import React, { useState } from 'react';
import {
  useAddBoardMutation,
  useDeleteBoardMutation,
  useEditBoardMutation,
} from '../../../store/boards/boardsApiSlice';
import { Board, NewBoard, updateTypes, UPDATE_TYPES } from '../../../types/boards';
import Modal from '../../UI/modal/Modal';
import AddNewBoard from '../addNewBoard/AddNewBoard';
import DeleteBoard from '../deleteBoard/DeleteBoard';
import EditBoard from '../editBoard/EditBoard';
import { LoadingOverlay } from './BoardsModal.styled';
import { handleErrorMessage } from '../../../utils/errorUtils';
import ServerError from '../../UI/serverError/ServerError';

type Props = {
  type: updateTypes | undefined;
  boardData: Board | undefined;
  closeModal: () => void;
};

function BoardsModal(props: Props) {
  const [addBoard, { isLoading: isAddBoardLoading, isError: isAddError }] = useAddBoardMutation();
  const [deleteBoard, { isLoading: isDeleteBoardLoading, isError: isDeleteError }] =
    useDeleteBoardMutation();
  const [editBoard, { isLoading: isEditBoardLoading, isError: isEditError }] =
    useEditBoardMutation();

  const isAnyLoading = isAddBoardLoading || isDeleteBoardLoading || isEditBoardLoading;
  const isAnyError = isAddError || isDeleteError || isEditError;
  const [errorMessage, setErrorMessage] = useState('Something went wrong');

  const addNewBoardHandler = async (data: NewBoard) => {
    try {
      await addBoard(data).unwrap();
      props.closeModal();
    } catch (err) {
      console.error(err);
      setErrorMessage(handleErrorMessage(err));
    }
  };

  const deleteBoardHandler = async (id: string) => {
    try {
      await deleteBoard(id).unwrap();
      props.closeModal();
    } catch (err) {
      console.error(err);
      setErrorMessage(handleErrorMessage(err));
    }
  };

  const editBoardHandler = async (data: Board) => {
    try {
      await editBoard(data).unwrap();
      props.closeModal();
    } catch (err) {
      console.error(err);
      setErrorMessage(handleErrorMessage(err));
    }
  };

  let content: JSX.Element = <></>;

  if (props.type === UPDATE_TYPES.add)
    content = <AddNewBoard onSubmitHandler={addNewBoardHandler} />;
  else if (props.type === UPDATE_TYPES.delete && props.boardData && props.boardData.id)
    content = (
      <DeleteBoard
        closeModal={props.closeModal}
        deleteBoard={deleteBoardHandler}
        id={props.boardData.id}
      />
    );
  else if (props.type === UPDATE_TYPES.edit && props.boardData)
    content = <EditBoard onSubmitHandler={editBoardHandler} boardData={props.boardData} />;

  return (
    <Modal hideModal={isAnyLoading ? () => {} : props.closeModal}>
      {isAnyError && errorMessage && <ServerError errorMessage={errorMessage} />}
      {content}
      {isAnyLoading && (
        <LoadingOverlay>
          <Spinner />
        </LoadingOverlay>
      )}
    </Modal>
  );
}

export default BoardsModal;
