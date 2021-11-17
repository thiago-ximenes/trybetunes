import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isDisabled: true,
      input: '',
      isLoading: false,
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ isDisabled: true });
    const THREE = 3;
    const { value } = target;
    this.setState({ input: value });
    if (value.length >= THREE) this.setState({ isDisabled: false });
  }

  handleClickLogin = async (event) => {
    this.setState({ isLoading: true });
    event.preventDefault();
    const { input } = this.state;
    await createUser({ name: input });
    this.setState({ redirect: true });
  }

  render() {
    const { isDisabled, input, isLoading, redirect } = this.state;
    const { handleChange, handleClickLogin } = this;
    return (
      <div data-testid="page-login">
        <Container>
          {
            redirect && <Redirect
              to={ { pathname: '/search',
              } }
            />
          }
          {
            !isLoading
              ? (
                <Form>
                  <Form.Group>
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control
                      value={ input }
                      onChange={ handleChange }
                      data-testid="login-name-input"
                      placeholder="Nome de Usuário"
                    />
                    <Button
                      type="submit"
                      onClick={ handleClickLogin }
                      disabled={ isDisabled }
                      data-testid="login-submit-button"
                    >
                      Entrar
                    </Button>
                  </Form.Group>
                </Form>
              )
              : (
                <>
                  <ReactLoading type="spokes" color="blue" height="20%" width="20%" />
                  <p>Carregando...</p>
                </>
              )
          }
        </Container>
      </div>
    );
  }
}

export default Login;
