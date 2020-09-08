import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class SimpleMap extends Component {
  render() {
    return (
<div className="MapGoogle">
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '&callback=initMap'
})(SimpleMap);

