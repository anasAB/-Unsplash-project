import React from 'react'

const Photo = (props) => {
    
    const {pic} = props

    return (
        <div className="card">
            <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
                loading="lazy"
            ></img>
            <p>Location: {pic.user.location ? pic.user.location : 'No Location Provided'}</p>
            <p>Taken By: {pic.user.instagram_username ? pic.user.instagram_username : pic.user.name}</p>
        </div>
    )
}

export default Photo