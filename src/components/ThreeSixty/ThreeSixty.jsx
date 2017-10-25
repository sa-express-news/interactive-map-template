import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';

class ThreeSixty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pano: null,
      node: null,
    };
    this._panoNode = null;
    this.getCustomPanoramaTileUrl = this.getCustomPanoramaTileUrl.bind(this);
    this.setPano = this.setPano.bind(this);
  }

  componentDidMount() {
    this.init(this._panoNode);
  }

  componentWillUnmount() {
    if (window.google) GoogleMapsLoader.release();
  }

  componentDidUpdate(prevProps, prevState) {
    prevProps.content.media !== this.props.content.media && this.init(this.state.id);
  }

  getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
    return this.props.content.media;
  }

  setPano(google, pano, zoom, tileX, tileY) {
    if (pano === 'custom') {
      return {
        location: {
          pano: 'custom',
          description: this.props.content.title
        },
        tiles: {
          tileSize: new google.maps.Size( 5376 ,  2688 ),
          worldSize: new google.maps.Size( 5376 ,  2688 ),
          getTileUrl: this.getCustomPanoramaTileUrl,
        }
      };
    }
  }

  getPano(node, google, panoProvider) {
    const panoOptions = {
      pano: 'custom',
      visible: true,
      panoProvider: panoProvider
    };
    return new google.maps.StreetViewPanorama(node, panoOptions);
  }

  loadMap(node) {
    GoogleMapsLoader.KEY = 'AIzaSyBtqwjA6__oej1DSJ8SpxccResQRP3Gjcg';
    GoogleMapsLoader.load(google => {
      let pano = this.getPano(node, google, this.setPano.bind(this, google));
      this.setState({ node, pano });
    });
  }

  init(node) {
    window.google ? GoogleMapsLoader.release(this.loadMap.bind(this, this.state.node)) : this.loadMap(node);
  }

  render() {
    return (
      <div ref={(node) => this._panoNode = node} id="pano" style={{ height: 300 }} />
    );
  }
}

export default ThreeSixty;