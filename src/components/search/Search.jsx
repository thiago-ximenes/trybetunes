import React, { Component } from 'react';
import { getUser } from '../../services/userAPI';
import SearchArtist from './SearchArtist';
import Loading from '../Loading';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getUserName();
  }

  getUserName = async () => {
    this.setState({ isLoading: true });
    const response = await getUser();
    this.setState({ isLoading: false });
    return this.setState({ userName: response.name });
  }

  render() {
    const { userName, isLoading } = this.state;
    return (
      <div data-testid="page-search">
        {
          isLoading ? (
            <Loading />
          )
            : <h2 data-testid="header-user-name">{ userName }</h2>

        }
        <SearchArtist />
      </div>
    );
  }
}

export default Search;
