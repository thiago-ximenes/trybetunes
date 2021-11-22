import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Badge, Row, Col, Card } from 'react-bootstrap';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      albumMusics: [],
      artistName: '',
      albumName: '',
      img: '',
    };
  }

  componentDidMount() {
    this.getAlbumMusics();
  }

  getAlbumMusics = async () => {
    const { match } = this.props;
    const response = await getMusics(match.params.id);
    return this.setState({
      albumMusics: response,
      artistName: response[0].artistName,
      albumName: response[0].collectionName,
      img: response[0].artworkUrl100,
    });
  }

  render() {
    const { albumMusics, artistName, albumName, img } = this.state;
    return (
      <Container data-testid="page-album">
        <Row className="justify-content-center">
          <Col md="auto">
            <h1>
              <Badge data-testid="artist-name">
                { artistName }
              </Badge>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto">
            <h2>
              <Badge data-testid="album-name">
                { albumName }
              </Badge>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto">
            <Card style={ { width: '18rem' } }>
              <Card.Img src={ img } />
            </Card>
          </Col>
          <Col md="auto">
            <Card style={ { width: '18rem' } }>
              {
                albumMusics.map((music, index) => index !== 0
                     && (
                       <MusicCard
                         previewUrl={ music.previewUrl }
                         key={ music.trackName }
                         trackName={ music.trackName }
                       />))
              }
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default Album;
