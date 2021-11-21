import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
  render() {
    return (
      <div>
        <ReactLoading type="spokes" color="blue" height="20%" width="20%" />
        <p>Carregando...</p>
      </div>
    );
  }
}

export default Loading;
