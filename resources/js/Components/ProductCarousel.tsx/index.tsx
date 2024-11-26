import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef } from "react";
import Slider from "react-slick";

interface IProductCarouselProps {
    children: React.ReactNode[];
}

export default function ProductCarousel({ children }: IProductCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -400,
                behavior: "smooth",
            });
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400,
                behavior: "smooth",
            });
        }
    };

    return children.length >= 5 ? (
        <div className="relative">
            <button
                onClick={handleScrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 dark:bg-white bg-darkSurface/40 p-2 rounded-full shadow-md"
            >
                <ChevronLeft />
            </button>
            <div
                ref={scrollContainerRef}
                className="flex gap-10 scroll-smooth py-6 px-14 overflow-x-hidden items-center"
            >
                {children}
            </div>
            <button
                onClick={handleScrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 dark:bg-white bg-darkSurface/40 p-2 rounded-full shadow-md"
            >
                <ChevronRight />
            </button>
        </div>
    ) : (
        <div className="flex gap-10 scroll-smooth py-6 px-14 overflow-x-hidden items-center justify-center">
            {children}
        </div>
    );
}
