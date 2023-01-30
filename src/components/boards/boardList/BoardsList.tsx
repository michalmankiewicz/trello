import React, { memo } from 'react';
import BoardItem from '../boardItem/BoardItem';
import './BoardsList.styled';
import { BoardsContainer, Title, List, NewBoard } from './BoardsList.styled';
import { Plus } from 'phosphor-react';
import { Board, updateTypes, UPDATE_TYPES } from '../../../types/boards';
import LoadingSpinner from '../../UI/loadingSpinner/LoadingSpinner';
import ServerError from '../../UI/serverError/ServerError';
import { useTranslation } from 'react-i18next';

type Props = {
  onUpdateBoards: (type: updateTypes, board?: Board) => void;
  boards: Board[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

function BoardsList(props: Props) {
  const { t } = useTranslation();

  return (
    <BoardsContainer>
      <Title>{t('boards.title')}</Title>
      {props.isLoading && <LoadingSpinner />}
      {props.boards && (
        <List>
          {props?.boards?.map((board) => (
            <BoardItem
              onDeleteBoard={() => props.onUpdateBoards(UPDATE_TYPES.delete, board)}
              onEditBoard={() => props.onUpdateBoards(UPDATE_TYPES.edit, board)}
              title={board.title}
              description={board.description}
              id={board.id}
              key={board.id}
            />
          ))}
          <NewBoard onClick={() => props.onUpdateBoards(UPDATE_TYPES.add)}>
            <Plus weight="bold" />
          </NewBoard>
        </List>
      )}
      {props.isError && <ServerError errorMessage="serverError.default" />}
    </BoardsContainer>
  );
}

export default memo(BoardsList);
