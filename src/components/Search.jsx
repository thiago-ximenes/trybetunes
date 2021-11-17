import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { getUser } from '../services/userAPI';

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
            <>
              <ReactLoading type="spokes" color="blue" height="20%" width="20%" />
              <p>Carregando...</p>
            </>
          )
            : <h2 data-testid="header-user-name">{ userName }</h2>

        }
      </div>
    );
  }
}

export default Search;
