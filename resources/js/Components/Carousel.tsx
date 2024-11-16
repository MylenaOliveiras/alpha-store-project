import { useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import Banner from "@/assets/images/banner1.jpg";
import Banner2 from "@/assets/images/banner2.jpg";
import Banner3 from "@/assets/images/banner3.jpg";

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(1);

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

    const actualImage = slides.find((slide) => slide.id === currentSlide);

    function nextSlide() {
        if (currentSlide === slides.length) {
            setCurrentSlide(1);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide === 1) {
            setCurrentSlide(slides.length);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    return (
        <div className="relative mt-60 max-h-40 flex items-center">
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
                <ArrowForwardIos className="rotate-180" />
            </button>
            <img
                src={actualImage?.image}
                alt={actualImage?.content}
                className="w-full object-cover object-center max-h-96"
            />
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
                <ArrowForwardIos />
            </button>
        </div>
    );
}
