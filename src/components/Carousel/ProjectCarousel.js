import React from 'react';
import '../Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const FigmaCarousel = ({ title, description, images }) => {
  return (
    <div className="swiper-container">
      <div className='title-swiper'>
        <h1 className='title-project-figma'>{title}</h1>
        <p className='descripcion'>{description}</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="cardProjectsFigma">
              <img src={img.src} alt={title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FigmaCarousel;