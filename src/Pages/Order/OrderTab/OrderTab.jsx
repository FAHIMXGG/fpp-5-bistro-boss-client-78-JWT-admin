import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10 justify-items-center'>
                        {
                            items.slice(0, 6).map(item => <FoodCard
                                key={item._id}
                                item={item}

                            ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10 justify-items-center'>
                        {
                            items.slice(7, 12).map(item => <FoodCard
                                key={item._id}
                                item={item}

                            ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default OrderTab;