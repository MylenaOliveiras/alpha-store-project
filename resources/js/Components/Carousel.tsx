import { useState } from "react";
import Banner from "@/assets/images/ALPHA.png";
import Banner2 from "@/assets/images/ALPHA2.png";
import Banner3 from "@/assets/images/ALPHA3.png";
import Slider from "react-slick";

export default function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
    };

    const slides = [
        {
            id: 1,
            content: "Slide 1",
            image: Banner,
        },
        {
            id: 2,
            content: "Slide 2",
            image: Banner2,
        },
        {
            id: 3,
            content: "Slide 3",
            image: Banner3,
        },
    ];

    return (
        <div className="relative">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <img
                        key={slide.id}
                        src={slide.image}
                        alt={slide.content}
                        className="w-full object-cover object-center max-h-96 mt-14"
                    />
                ))}
            </Slider>
            <style>
                {`
                .slick-dots {
                    position: absolute;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                }
                .slick-dots li button:before {
                    font-size: 12px;
                    color: white;
                }
                .slick-dots li.slick-active button:before {
                    color: #34c9ff; /* Azul principal */
                }
                `}
            </style>
        </div>
    );
}
