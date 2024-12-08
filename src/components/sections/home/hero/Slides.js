import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from '../../../../assets/360_F_1025001990_palmBlATie7p5MCLqed78q84bMipXwJ9.jpg'
import image2 from '../../../../assets/4523148-women-outdoors-face-women-model-alessandro-di-cicco-cold-winter-snow.jpg'
import image3 from '../../../../assets/depositphotos_52888345-stock-photo-girl-making-a-winter-view.jpg'
import image4 from '../../../../assets/trendy-male-fashion-model-in-sand-zip-up-jacket-casual-lifestyle-shot-comfortable-males-fashion-with-a-stylish-and-relaxed-look-free-photo.jpg'
import image5 from '../../../../assets/photo-1485199692108-c3b5069de6a0.jpg'

export default function Slides() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className="h-screen">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="w-full h-full"
            >
                <SwiperSlide className="flex justify-center items-center text-xl bg-white">
                    <img className="w-screen h-[275px] md:h-full" src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-xl bg-white">
                    <img className="w-screen h-[275px] md:h-full" src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-xl bg-white">
                    <img className="w-screen h-[275px] md:h-full" src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-xl bg-white">
                    <img className="w-screen h-[275px] md:h-full" src={image4} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-xl bg-white">
                    <img className="w-screen h-[275px] md:h-full" src={image5} alt="" />
                </SwiperSlide>

                <div
                    className="absolute right-4 bottom-4 z-10 flex items-center justify-center w-12 h-12 font-bold text-current"
                    slot="container-end"
                >
                    <svg
                        viewBox="0 0 48 48"
                        className="absolute w-full h-full transform -rotate-90 stroke-current"
                        ref={progressCircle}
                    >
                        <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="none"
                            strokeWidth="4"
                            strokeDasharray="125.6"
                            className="[--progress:0] [stroke-dashoffset:calc(125.6px*(1-var(--progress)))]"
                        ></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}
