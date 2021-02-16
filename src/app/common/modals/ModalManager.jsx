import React from 'react';
import { useSelector } from 'react-redux';

import LoginInForm from '../../../features/auth/LoginInForm';
import RegisterForm from '../../../features/auth/RegisterForm';

const ModalManager = () => {
  const modalLookup = {
    LoginInForm,
    RegisterForm,
  };
  const currentModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

export default ModalManager;
