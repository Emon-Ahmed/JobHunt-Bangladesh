import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const JobBox = () => {
  return (
    <div>
      <Swiper watchSlidesProgress={true} slidesPerView={5} className="mySwiper">
        <SwiperSlide>
          <div class="item-logo">
            <div class="image-left">
              <img alt="jobHunt" src="media/imgs/security.svg" />
            </div>
            <div class="text-info-right">
              <h4>Marketing &amp; Sale</h4>
              <p class="h6">
                1526<span> Jobs Available</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default JobBox;
