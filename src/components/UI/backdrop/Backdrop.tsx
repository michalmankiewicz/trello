import React from 'react';
import { BackdropContainer } from './Backdrop.styled';

type BackDropProp = {
  onClick?: () => void;
  // children?: React.ReactNode;
};

const Backdrop = (props: BackDropProp) => {
  return <BackdropContainer onClick={props.onClick}></BackdropContainer>;
};

export default Backdrop;
