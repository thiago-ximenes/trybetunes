import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Badge, Row, Col, Card } from 'react-bootstrap';
import getMusics from '../services/musicsAPI';
import { addSong } from '../services/favoriteSongsAPI';
import MusicCard from './MusicCard';
import Loading from './Loading';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      albumMusics: [],
      artistName: '',
      albumName: '',
      img: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getAlbumMusics();
  }

  addSongToFavorite = async (trackSong) => {
    this.setState({ isLoading: true });
    await addSong(trackSong);
    this.setState({ isLoading: false });
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
    const { albumMusics, artistName, albumName, img, isLoading } = this.state;
    const { addSongToFavorite } = this;
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
                isLoading && <Loading />
              }
              {albumMusics.map((music, index) => index !== 0
              && (
                <div style={ { display: isLoading ? 'none' : 'block' } }>
                  <MusicCard
                    favorite={ () => addSongToFavorite(albumMusics[index]) }
                    previewUrl={ music.previewUrl }
                    key={ music.trackName }
                    trackName={ music.trackName }
                    trackId={ music.trackId }
                  />
                </div>
              ))}
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
