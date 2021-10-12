import React from 'react'

const CarouselCard = ({image,title}) => {
    return (
        <div className="services-card w-100 col-md-3 d-flex justify-content-center">
            <img className="carousel-image" src={image}/>
        </div>
    )
}

export default CarouselCard
