import React from 'react';
import { useGetBoardsQuery } from '../store/auth/authApiSlice';
import { useAppSelector } from '../types/reduxTypes/reduxTypes';

function Boards() {
  const token = useAppSelector((state) => state.auth.token);
  const { data } = useGetBoardsQuery(token);

  console.log(token);

  return <div>Boards</div>;
}

export default Boards;
