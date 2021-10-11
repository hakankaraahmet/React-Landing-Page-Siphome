import React from 'react'

const CarouselCard = ({image,title}) => {
    return (
        <div className="services-card w-100 col-md-3 d-flex justify-content-center">
            <img src={image}/>
            <p className="services-card-title ms-4 mt-2">{title}</p>
        </div>
    )
}

export default CarouselCard
