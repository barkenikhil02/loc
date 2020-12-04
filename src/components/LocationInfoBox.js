const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2><center>Pothole</center></h2>
            <ul>
                <li><img src={info.imageurl} height={210} width={400} alt="No Image ofund"/></li>
    <li>Upload By: <strong>{ info.username }</strong></li>
    <li>Description: <strong>{ info.comment }</strong></li>
    <li>Address: <strong>{ info.address }</strong></li>
    <li>Landmark: <strong>{ info.landmark }</strong></li>
    <li>Department: <strong>{ info.department }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
