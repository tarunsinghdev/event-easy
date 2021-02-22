import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Container, Grid, Menu } from 'semantic-ui-react';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

const NavBar = () => {
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item exact as={NavLink} to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Event Easy
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        {authenticated && (
          <Grid>
            <Grid.Column only="tablet computer">
              <Menu.Item width={4} as={NavLink} to="/createEvent">
                <Button positive inverted content="Create Event" />
              </Menu.Item>
            </Grid.Column>
          </Grid>
        )}

        {authenticated ? <SignedIn /> : <SignedOut />}
      </Container>
    </Menu>
  );
};

export default NavBar;
