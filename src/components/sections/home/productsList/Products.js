import React, { useState, useEffect, useRef, useContext } from 'react';
import ProductsCard from './ProductsCard';
import { CartContext } from '../../../../context/CartContext';

const Products = () => {
    const [productsInfo, setProductsInfo] = useState([]);
    const [productsImg, setProductsImg] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const isDragging = useRef(false);  // To track dragging state
    const startPosition = useRef(0);  // To store the initial position when dragging starts
    const scrollPosition = useRef(0);  // To store the scroll position before drag

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setProductsInfo(data));
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((data) => setProductsImg(data));
    }, []);

    const handleNext = () => {
        if (currentIndex < productsInfo.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 0.5s ease';
            carouselRef.current.style.transform = `translateX(-${currentIndex * 366}px)`;
        }
    }, [currentIndex]);

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDragging.current = true;
        startPosition.current = e.clientX;
        scrollPosition.current = carouselRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;

        const moveDistance = e.clientX - startPosition.current;
        carouselRef.current.scrollLeft = scrollPosition.current - moveDistance;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    useEffect(() => {
        const carouselElement = carouselRef.current;

        carouselElement.addEventListener('mousedown', handleMouseDown);
        carouselElement.addEventListener('mousemove', handleMouseMove);
        carouselElement.addEventListener('mouseup', handleMouseUp);
        carouselElement.addEventListener('mouseleave', handleMouseUp);

        return () => {
            carouselElement.removeEventListener('mousedown', handleMouseDown);
            carouselElement.removeEventListener('mousemove', handleMouseMove);
            carouselElement.removeEventListener('mouseup', handleMouseUp);
            carouselElement.removeEventListener('mouseleave', handleMouseUp);
        };
    }, []);

    return (
        <div className="container mx-auto my-10 px-4 overflow-x-hidden">
            <h3 className="text-4xl font-bold mb-6 text-left">
                Shop All Winter Clothes From Here
            </h3>
            <div className="relative flex justify-center items-center h-[80vh] overflow-hidden">
                {/* Left Arrow */}
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className={`absolute left-4 z-10 bg-gray-800 text-white rounded-full p-4 hover:bg-gray-700 transition-all duration-300 shadow-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-8 w-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Carousel */}
                <div className="flex overflow-hidden w-full justify-center">
                    <div
                        ref={carouselRef}
                        className="flex cursor-grab user-select-none"
                        style={{ width: `${productsInfo.length * 350}px` }}
                    >
                        {productsInfo.map((productInfo, index) => {
                            const productImg = productsImg[index];
                            const imageUrl = productImg ? productImg.url : 'https://via.placeholder.com/150';
                            return (
                                <div
                                    key={productInfo.id}
                                    className="h-[500px] w-[350px] bg-gray-200 text-black font-sans text-sm uppercase rounded-md mx-4 p-4 shadow-md flex-shrink-0"
                                >
                                    <ProductsCard
                                        productInfo={productInfo}
                                        imageUrl={imageUrl}
                                        addToCart={addToCart}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    disabled={currentIndex === productsInfo.length - 1}
                    className={`absolute right-4 z-10 bg-gray-800 text-white rounded-full p-4 hover:bg-gray-700 transition-all duration-300 shadow-lg ${currentIndex === productsInfo.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-8 w-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Products;
