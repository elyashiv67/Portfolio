import React from 'react';
import './images.modules.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

function Images({ width = "100%", height = "600px" }) {
    const images = [
        'src/assets/images/elyashiv1.JPG',
        'src/assets/images/elyashiv2.JPG',
        'src/assets/images/elyashiv3.JPG'
    ];

    return (
        <div className="images-container">
            <h1 className="gallery-title gradient-text">Gallery</h1>
            <div className="swiper-container" style={{ width: width, height: height }}> {/* Fixed size for cards effect to look good */}
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[Mousewheel, EffectCards]}
                    className="mySwiper"
                    mousewheel={{
                        thresholdDelta: 40,
                        sensitivity: 1,
                    }}
                    speed={800}
                    loop={true}
                >
                    {images.map((src, idx) => (
                        <SwiperSlide key={idx} className="swiper-slide-card">
                            <img
                                src={src}
                                alt={`slide-${idx}`}
                                className="swiper-image"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Images;