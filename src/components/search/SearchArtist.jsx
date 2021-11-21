import React, { Component } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';

class SearchArtist extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      isDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ isDisabled: true });
    const TWO = 2;
    const { value } = target;
    this.setState({ input: value });
    if (value.length >= TWO) this.setState({ isDisabled: false });
  }

  render() {
    const { handleChange } = this;
    const { input, isDisabled } = this.state;
    return (
      <Container>
        <Form>
          <Row className="align-items-center">
            <Col>
              <Form.Control
                value={ input }
                onChange={ handleChange }
                data-testid="search-artist-input"
                placeholder="nome do artista"
              />
            </Col>
            <Col xs="auto">
              <Button
                disabled={ isDisabled }
                data-testid="search-artist-button"
              >
                Pesquisar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default SearchArtist;
