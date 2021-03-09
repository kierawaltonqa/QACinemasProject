import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{
  color: 'white',
  background: 'grey',
  padding: '15px 10px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}}>{text}</div>

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 53.47570171371317,
      lng: -2.2414087147234394
    },
    zoom: 16
  };

  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBrxyovMrBmI_cc42sVzkDdwHn6Pd8d7Uw',
            language: 'en'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={53.47570171371317}
            lng={-2.2414087147234394}
            text={"We are here"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;