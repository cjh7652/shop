'use client'
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const MovieSwiper = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{delay:2500, disableOnInteraction: false}}
        navigation
        pagination={{clickable: true}}
        Scrollbar={{draggable: true}}
        >
        <SwiperSlide><img src="/img/slide01.jpeg" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="/img/slide02.jpeg" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="/img/slide03.jpeg" alt="slide" /></SwiperSlide>
        </Swiper>
    );
};

export default MovieSwiper;