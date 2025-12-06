import React from 'react';
import './images.modules.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel} from 'swiper/modules';
import 'swiper/css';
import {useNavigate} from "react-router-dom";
const images = [
    'src/assets/images/elyashiv1.JPG',
    'src/assets/images/elyashiv2.JPG',
    'src/assets/images/elyashiv3.JPG'
]


function Images({width, height}) {
    const navigate = useNavigate();
    return (
        <>
        <div style={{width:width,height:height, overflow:'hidden'}}>
            <Swiper
                style={{ width: '100%', height: '100%'}}
                modules={[Mousewheel]}

                // 1. Show only one at a time
                slidesPerView={1}

                // 2. Mousewheel Settings
                mousewheel={{
                    thresholdDelta: 40, // Higher number = harder scroll to switch
                    sensitivity: 1,
                }}

                // 3. Animation Speed (Smoothness)
                speed={800} // Time in ms for the slide to settle

                // Optional: Loop them so you never hit a wall
                loop={true}
            >
                {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        {/* 4. Ensure image fills the slide */}
                        <img
                            src={src}
                            alt={`slide-${idx}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',// Ensures no whitespace
                                objectPosition: 'center',
                                margin: 0,
                                padding: 0
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
            <button onClick={()=>navigate("/")}>go back</button>
        </>
    );
}

export default Images;