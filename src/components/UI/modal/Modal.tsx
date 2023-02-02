import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../backdrop/Backdrop';
import { ModalContainer } from './Modal.styled';

type ModalOverlayProps = {
  children?: React.ReactNode;
  hideModal: () => void;
};

const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <>
      <ModalContainer>{props.children}</ModalContainer>
      <Backdrop onClick={props.hideModal} />
    </>
  );
};

// TODO Should portal be in seperate files?

const portalElement: HTMLElement = document.getElementById('modal')!;

type ModalProps = {
  children?: React.ReactNode;
  hideModal: () => void;
};

const Modal = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <ModalOverlay hideModal={props.hideModal}>{props.children}</ModalOverlay>,
    portalElement
  );
};

export default Modal;
