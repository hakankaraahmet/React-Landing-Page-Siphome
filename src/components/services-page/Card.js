import React from 'react'

const Card = ({image,title}) => {
    return (
        <div className="services-card col-md-3 mx-5">
            <img src={image}/>
            <p className="services-card-title ms-4 mt-2 ">{title}</p>
        </div>
    )
}

export default Card
