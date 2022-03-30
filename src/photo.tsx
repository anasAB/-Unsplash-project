import React from 'react'

const Photo = (props: { imageUrl: string, imagealt: string }) => {
    const { imageUrl, imagealt } = props

    return (
        <div className="card">
            <img
                className="card-image"
                alt={imagealt}
                src={imageUrl}
                width="50%"
                height="50%"
                loading="lazy"
            ></img>
        </div>
    )
}

export default Photo
