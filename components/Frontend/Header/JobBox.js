import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SkillSetDB from "./../../../db/skillSet.json";

const JobBox = () => {
  return (
    <>
      <div className="my-5 mx-4">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={1}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {SkillSetDB.map((item) => (
            <SwiperSlide key={item.id} className="mx-2 JobListSlide">
              <div className="item-logo d-flex flex-column">
                <div className="image-left">
                  <img alt="jobHunt" src={item.icon} />
                </div>
                <div className="text-info-right">
                  <div className="fs-6 my-1 fw-bold d-blocks">{item.name}</div>
                  <div className="fontSize13">
                    {item.jobsAvailable}
                    <span> Jobs Available</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default JobBox;
