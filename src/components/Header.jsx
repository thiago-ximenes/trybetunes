import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header data-testid="header-component">
        <Link
          data-testid="link-to-search"
          to={ {
            pathname: '/search',
          } }
        >
          Pesquisa
        </Link>
        <Link
          data-testid="link-to-favorites"
          to={ {
            pathname: '/favorites',
          } }
        >
          Favoritos
        </Link>
        <Link
          data-testid="link-to-profile"
          to={ {
            pathname: '/profile',
          } }
        >
          Perfil
        </Link>
      </header>
    );
  }
}

export default Header;
