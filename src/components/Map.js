// type "rafce" to get a React arrow function component snippet with the file's title
import { useState } from 'react';

import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

// *** put api key in .env ***

// pull out eventData from props we get back from fetchEvents
// map through eventData and check if event is a Wildfire id: 8

const Map = ({ eventData, center, zoom }) => {
  // create a piece of state for location info, null is default
  const [locationInfo, setLocationInfo] = useState(null);
  const close = () => {
    setLocationInfo(null);
    console.log('close clicked');
  };
  const markers = eventData.map(ev => {
    // if (ev.categories[0].id === 18) {
    return (
      <LocationMarker
        key={ev.id}
        lat={ev.geometries[0].coordinates[1]}
        lng={ev.geometries[0].coordinates[0]}
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title, ...ev })}
      />
    );
    // }
    // return null;
  });

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBK242zHuYIddnwNn6p-b4T2TbSI0D4yxI' }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={() => {
          setLocationInfo(null);
          console.log('map clicked');
        }}>
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} close={close} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 48.3265,
    lng: -115.8756,
  },
  zoom: 2,
};

export default Map;
