import { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import { db } from '../config/firebase'
import { RepoContext } from '../contexts/RepoContexts'
import React, { useContext } from 'react';
import LocationInfoBox from './LocationInfoBox';
import DelButt from './DelButt';

const Map = ({ center,zoom }) => {

    const { reports } = useContext(RepoContext);
    const [locationInfo, setLocationInfo] = useState(null);

    


    const setCli = () => {
        setLocationInfo(null);
        db.collection('reports').doc(locationInfo.id).update({work:true})
        console.log(locationInfo.id)



    }











    const markers = reports.map(report => {
        if(report.work==false){
        return(
            <LocationMarker lat={report['position'].geopoint.latitude}
            lng={report['position'].geopoint.longitude} onClick={() => setLocationInfo({id: report.id, imageurl: report.imageurl, username: report.username, comment: report.comment, address: report.address, landmark: report.landmark, department: report.department})}/>
        )
        }
    })


    


        
   


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:
                    'AIzaSyBONMK4kmK2GVQ2QAdG9gqbz41m8hGmQoM' }}
                    defaultCenter={ center }
                    defaultZoom={ zoom }
            >
                
                {markers}
                
            </GoogleMapReact>
            
            {locationInfo && <LocationInfoBox info={locationInfo} />}

                {locationInfo && <DelButt onclick={setCli}/> }
            
            
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
