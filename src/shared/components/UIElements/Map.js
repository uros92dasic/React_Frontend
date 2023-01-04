import React from 'react';
// import { useRef, useEffect } from 'react';
 
import './Map.css';
 
const Map = props => {
//   const mapRef = useRef();
  
//   const { center, zoom } = props;
 
//   useEffect(() => {
//     new window.ol.Map({
//       target: mapRef.current.id,
//       layers: [
//         new window.ol.layer.Tile({
//           source: new window.ol.source.OSM()
//         })
//       ],
//       view: new window.ol.View({
//         center: window.ol.proj.fromLonLat([center.lng, center.lat]),
//         zoom: zoom
//       })
//     });
//   }, [center, zoom]);
 
//   return (
//     <div
//       ref={mapRef}
//       className={`map ${props.className}`}
//       style={props.style}
//       id="map"
//     ></div>
//   );

//https://console.cloud.google.com/freetrial/signup/tos - GoogleMapIDE

    return (
        <>
        <h2>This is the "RED MAP"</h2>
        <div className='red'></div>
        </>
    );
};
 
export default Map;