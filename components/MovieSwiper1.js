'use client'
import React from 'react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const MovieSwiper1 = () => {
    return (
        <Swiper
        modules={[Navigation,  Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        navigation
        Scrollbar={{draggable: true}}
        >
        <SwiperSlide><img src="/img/banner01.jpg" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner02.jpg" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner03.jpg" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner04.jpg" alt="slide" /></SwiperSlide>
        </Swiper>
    );
};

export default MovieSwiper1;