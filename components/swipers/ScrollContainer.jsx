"use client"

import {
  Swiper,
  SwiperSlide
} from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/scrollbar"

import {
  FreeMode,
  Scrollbar,
  Mousewheel,
} from "swiper/modules"

function ScrollContainer({ children }) {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={"auto"}
      freeMode={true}
      scrollbar={true}
      mousewheel={true}
      grabCursor={false}
      speed={300}
      modules={[
        FreeMode,
        Scrollbar,
        Mousewheel
      ]}
    >
      <SwiperSlide>
        {children}
      </SwiperSlide>
    </Swiper>
  )
}

export default ScrollContainer
