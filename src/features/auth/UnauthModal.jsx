import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider, Modal } from 'semantic-ui-react';
import { openModal } from '../store/reducers/modalReducer';

const UnauthModal = ({ history, setModalOpen }) => {
  const [open, setOpen] = useState(true);
  const { prevLocation } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClose = () => {
    if (!history) {
      setOpen(false);
      setModalOpen(false);
      return;
    }
    if (history && prevLocation) {
      history.push(prevLocation.pathname);
    } else {
      history.push('/events');
    }
    setOpen(false);
  };

  const handleOpenLoginModal = (modalType) => {
    dispatch(openModal({ modalType }));
    setOpen(false);
    setModalOpen(false);
  };

  return (
    <Modal open={open} size="mini" onClose={handleClose}>
      <Modal.Header content="You need to be signed in to do that" />
      <Modal.Content>
        <p>Please either login or register to see this content</p>
        <Button.Group widths={4}>
          <Button
            fluid
            color="teal"
            content="Login"
            onClick={() => openModal(handleOpenLoginModal('LoginInForm'))}
          />
          <Button.Or />
          <Button
            fluid
            color="green"
            content="Register"
            onClick={() => openModal(handleOpenLoginModal('RegisterForm'))}
          />
        </Button.Group>
        <Divider />
        <div style={{ textAlign: 'center' }}>
          <p>Or click cancel to continue as a guest</p>
          <Button content="Cancel" onClick={handleClose} />
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default UnauthModal;
