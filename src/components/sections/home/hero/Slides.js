import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../../assets/360_F_1025001990_palmBlATie7p5MCLqed78q84bMipXwJ9.jpg";
import image2 from "../../../../assets/4523148-women-outdoors-face-women-model-alessandro-di-cicco-cold-winter-snow.jpg";
import image3 from "../../../../assets/depositphotos_52888345-stock-photo-girl-making-a-winter-view.jpg";
import image4 from "../../../../assets/trendy-male-fashion-model-in-sand-zip-up-jacket-casual-lifestyle-shot-comfortable-males-fashion-with-a-stylish-and-relaxed-look-free-photo.jpg";
import image5 from "../../../../assets/photo-1485199692108-c3b5069de6a0.jpg";

const slidesData = [
    { id: 1, title: "Cozy Winter Knitwear", description: "Explore cozy elegance with our latest winter knitwear collection, perfect for chilly evenings.", image: image1 },
    { id: 2, title: "Stylish Women's Layers", description: "Discover stylish layers for women, blending comfort and fashion for a frosty day out.", image: image2 },
    { id: 3, title: "Tailored Winter Coats", description: "Embrace the beauty of winter with tailored coats designed for warmth and sophistication.", image: image3 },
    { id: 4, title: "Versatile Jackets", description: "Upgrade your winter wardrobe with our versatile jackets for a chic and relaxed look.", image: image4 },
    { id: 5, title: "Premium Winter Outfits", description: "Step into winter with premium accessories that complete your seasonal fashion ensemble.", image: image5 },
];

const Slides = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="w-screen">
            <Slider {...settings}>
                {slidesData.map((slide) => (
                    <div key={slide.id} className="relative">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-screen object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
                            <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 tracking-[0.2px] 
                                opacity-100 transform translate-x-0 
                                transition-all duration-800 ease-out 
                                hover:text-yellow-500 hover:scale-110 hover:translate-x-4">
                                {slide.title}
                            </h2>
                            <p className="text-white text-lg md:text-xl opacity-100 translate-x-0 
                                transition-all duration-1000 ease-out delay-150 
                                hover:text-green-400 hover:opacity-80 hover:scale-105 hover:translate-x-4
                                px-4 sm:px-6 w-full text-center">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slides;
