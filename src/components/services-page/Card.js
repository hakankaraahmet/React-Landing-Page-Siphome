import React from 'react'

const Card = ({image}) => {
    return (
        <div className="services-card col-md-4 mx-5 ">
            <img className="card-image" src={image}/>
        </div>
    )
}

export default Card
