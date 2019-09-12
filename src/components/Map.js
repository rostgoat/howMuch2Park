import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.42, lng: -75.69 }} />;
}

const WrappedMap = withScriptjs(withGoogleMap(map));
class Map extends Component {
  render() {
    return (
      <div className="map">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBlh-6hh0jO_I2c7FWR-vNzFsDqebeaL9I`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
