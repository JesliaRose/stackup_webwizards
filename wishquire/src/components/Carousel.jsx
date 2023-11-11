import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[680px] bg-white">
      <Swiper loop={true} spaceBetween={0} navigation={true} modules={[Navigation, Autoplay]}
      autoplay={{
        delay:4000,
        disableOnInteraction: false,
      }}
      className="h-[60%]">


        <SwiperSlide>
          <img src={"../images/carousel_12.png"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_13.png"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_14.png"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_15.png"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_16.png"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_17.png"} alt="Carousel POR" />
        </SwiperSlide>
      </Swiper>

      <div className="-mt-14 h-[280%] bg-gradient-to-b from-wishquire-lightblue to-wishquire-blue" />
    </div>
  );
};

export default Carousel;
