/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 53.4241609,
      lng: -113.6481033,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly

    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBGY1snXgYJTLq2DonvMNgxKTRu-ShDzrk' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    </GoogleMapReact>
  );
}
