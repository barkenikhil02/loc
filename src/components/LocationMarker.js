import { Icon } from '@iconify/react'
import LocationIcon from '@iconify/icons-mdi/alert-circle'

const LocationMarker = ({ lat,lng}) => {
    return (
        <div className="location-marker">
            <Icon icon={LocationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker
