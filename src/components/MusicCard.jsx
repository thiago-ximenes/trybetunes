import React, { Component } from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import propTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      isLoading: false,
    };
  }

  addSongToFavorite = async (trackSong) => {
    this.setState({ isLoading: true });
    await addSong(trackSong);
    this.setState({ isLoading: false });
  }

  handleChange = ({ target: { checked } }) => {
    console.log(checked);
    if (checked) {
      this.setState({ checked: true });
      return this.addSongToFavorite();
    }
  }

  render() {
    const { music } = this.props;
    const { checked, isLoading } = this.state;
    const { handleChange } = this;
    return (
      isLoading ? (<Loading />)
        : (<Card>
          <Row>
            <Card.Title variant="top">
              { music.trackName }
            </Card.Title>
            <audio data-testid="audio-component"
              src={ music.previewUrl }
              controls
            >
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
            </audio>
          </Row>
          <Row>
            <Form>
              <Col>
                <Form.Check
                  checked={ checked }
                  onChange={ handleChange }
                  type="checkbox"
                  label="Favorita"
                  data-testid={ `checkbox-music-${music.trackId}` }
                />
              </Col>
            </Form>
          </Row>
        </Card>)
    );
  }
}

MusicCard.propTypes = {
  trackName: propTypes.string.isRequired,
  previewUrl: propTypes.string.isRequired,
  trackId: propTypes.string.isRequired,
  favorite: propTypes.func.isRequired,
};

export default MusicCard;
