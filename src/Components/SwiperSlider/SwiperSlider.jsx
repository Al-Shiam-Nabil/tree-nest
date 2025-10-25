// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SwiperSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 6000, reverseDirection: false }}
      loop={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img
          src={slider1}
          alt="toy banner image"
          className="w-full h-[500px] object-cover object-bottom rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider2}
          alt="toy banner image"
          className="w-full h-[500px] object-cover rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider3}
          alt="toy banner image"
          className="w-full h-[500px] object-cover rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
