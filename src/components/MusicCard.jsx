import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import propTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <Row>
        <Col>
          <Card>
            <Card.Title variant="top">
              { trackName }
            </Card.Title>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
            </audio>

          </Card>
        </Col>
      </Row>
    );
  }
}

MusicCard.propTypes = {
  trackName: propTypes.string.isRequired,
  previewUrl: propTypes.string.isRequired,
};

export default MusicCard;
