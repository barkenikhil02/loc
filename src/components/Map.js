import { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import { db } from '../config/firebase'
import { Component } from 'react'
import { RepoContext } from '../contexts/RepoContexts'
import React, { useContext } from 'react';
import LocationInfoBox from './LocationInfoBox';










const Map = ({ center,zoom }) => {

    const { reports } = useContext(RepoContext);
    const [locationInfo, setLocationInfo] = useState(null)


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
                        lng={report['position'].geopoint.longitude} onClick={() => setLocationInfo({id: report.id, email: report.email})}/>
                    )
                })}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
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
