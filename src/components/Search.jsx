import React, { Component } from 'react';
import { getUser } from '../services/userAPI';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <h2 data-testid="header-user-name">{ getUser.name }</h2>
      </div>
    );
  }
}

export default Search;
