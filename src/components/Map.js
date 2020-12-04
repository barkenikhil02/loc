import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import { db } from '../config/firebase'
import { Component } from 'react'
import { RepoContext } from '../contexts/RepoContexts'
import React, { useContext } from 'react';







const Map = ({ center,zoom }) => {

    const { reports } = useContext(RepoContext);

    
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:
                    'AIzaSyBONMK4kmK2GVQ2QAdG9gqbz41m8hGmQoM' }}
                    defaultCenter={ center }
                    defaultZoom={ zoom }
            >
                {reports.map(report => {
                    return(
                        <LocationMarker lat={report['position'].geopoint.latitude}
                        lng={report['position'].geopoint.longitude} />
                    )
                })}
            </GoogleMapReact>
            {/* {reports.map(report => {
                    return(
                    <p>{report['position'].geopoint.latitude}</p> 
                    )
                })} */}
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat: 19.8563182,
        lng: 73.9775592
    },
    zoom: 18
}
export default Map
