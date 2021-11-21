import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Form, Container, Button, Row, Col, Alert, Card } from 'react-bootstrap';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Loading from '../Loading';

class SearchArtist extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      artistName: '',
      isDisabled: true,
      artistAlbums: [],
      isRequisitionDone: true,
    };
  }

  // componentDidUpdate() {
  //   this.handleClick();
  // }

  handleClick = async (event) => {
    const { input } = this.state;
    event.preventDefault();
    this.setState({ isRequisitionDone: false });
    const response = await searchAlbumsAPI(input);
    this.setState({
      isDisabled: true,
      isRequisitionDone: true,
      artistAlbums: response,
      artistName: input,
      input: '' });
  }

    handleChange = ({ target }) => {
      this.setState({ isDisabled: true });
      const TWO = 2;
      const { value } = target;
      this.setState({ input: value });
      if (value.length >= TWO) this.setState({ isDisabled: false });
    }

    render() {
      const { handleChange, handleClick } = this;
      const {
        input, isDisabled, isRequisitionDone, artistAlbums, artistName } = this.state;
      return (
        <>
          { isRequisitionDone ? (
            <Container className="mb-3">
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
                      type="submit"
                      onClick={ handleClick }
                      disabled={ isDisabled }
                      data-testid="search-artist-button"
                    >
                      Pesquisar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          ) : (
            <Loading />
          )}
          <Container fluid="sm">
            {
              artistAlbums.length !== 0
                ? (
                  <div>
                    <Alert variant="success">
                      { `Resultado de álbuns de: ${artistName}` }
                    </Alert>
                    <Row>
                      {
                        artistAlbums.map((artist) => (
                          <Col key={ artist.collectionId }>
                            <Card style={ { width: '18rem' } }>
                              <Card.Img variant="top" src={ artist.artworkUrl100 } />
                              <Card.Body>
                                <Card.Title>{ artist.collectionName }</Card.Title>
                                <Card.Text>
                                  { artist.artistName }
                                </Card.Text>
                                <Button
                                  data-testid={ `link-to-album-${artist.collectionId}` }
                                  variant="primary"
                                  as={ Link }
                                  to={ {
                                    pathname: `/album/${artist.collectionId}`,
                                  } }
                                >
                                  Go somewhere
                                </Button>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))
                      }
                    </Row>
                  </div>
                )
                : <Alert variant="danger">Nenhum álbum foi encontrado</Alert>
            }
          </Container>
        </>
      );
    }
}

export default SearchArtist;
