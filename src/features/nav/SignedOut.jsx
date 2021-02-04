import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';
import { openModal } from '../store/reducers/modalReducer';

const SignedOut = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  return (
    <Menu.Item position="right">
      <Button
        onClick={() => dispatch(openModal({ modalType: 'LoginInForm' }))}
        basic
        inverted
        content="Login"
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  );
};

export default SignedOut;
