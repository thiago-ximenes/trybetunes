import React, { Component } from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import propTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { trackName, previewUrl, trackId, favorite } = this.props;
    return (
      <Card>
        <Row>
          <Card.Title variant="top">
            { trackName }
          </Card.Title>
          <audio data-testid="audio-component" src={ previewUrl } controls>
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
                onChange={ favorite }
                type="checkbox"
                label="Favorita"
                data-testid={ `checkbox-music-${trackId}` }
              />
            </Col>
          </Form>
        </Row>
      </Card>
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
