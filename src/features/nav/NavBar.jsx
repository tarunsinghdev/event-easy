import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

const NavBar = ({ setFormOpen }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push('/');
  };

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item exact as={NavLink} to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Event Easy
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button
              // onClick={() => setFormOpen(true)}
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
        )}

        {authenticated ? (
          <SignedIn signOut={handleSignOut} />
        ) : (
          <SignedOut setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
