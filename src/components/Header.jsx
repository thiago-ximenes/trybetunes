import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header data-testid="header-component">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="primary"
          variant="dark"
          className="justify-content-center mb-1"
        >
          <Nav justify variant="pills">
            <Nav.Item>
              <Nav.Link
                data-testid="link-to-search"
                as={ Link }
                to={ {
                  pathname: '/search',
                } }
              >
                Pesquisa
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                data-testid="link-to-favorites"
                as={ Link }
                to={ {
                  pathname: '/favorites',
                } }
              >
                Favoritos
              </Nav.Link>
            </Nav.Item>
            <Nav.Link
              as={ Link }
              data-testid="link-to-profile"
              to={ {
                pathname: '/profile',
              } }
            >
              Perfil
            </Nav.Link>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
