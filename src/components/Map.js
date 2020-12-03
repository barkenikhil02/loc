import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ center,zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:
                    'AIzaSyBONMK4kmK2GVQ2QAdG9gqbz41m8hGmQoM' }}
                    defaultCenter={ center }
                    defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat: 19.075601,
        lng: 72.883154
    },
    zoom: 18
}
export default Map
