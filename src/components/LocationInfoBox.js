const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Pothole</h2>
            <ul>
    <li>Id: <strong>{ info.id }</strong></li>
    <li>email: <strong>{ info.email }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
