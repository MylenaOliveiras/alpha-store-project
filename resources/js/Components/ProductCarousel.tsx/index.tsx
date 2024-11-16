import React from "react";
import Slider from "react-slick";

interface ProductCarouselProps {
    children: React.ReactNode[];
}

function ProductCarousel({ children }: ProductCarouselProps) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>{children}</Slider>
        </div>
    );
}

export default ProductCarousel;
