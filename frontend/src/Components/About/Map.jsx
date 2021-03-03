import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;