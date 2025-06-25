'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { Phone, Gauge, Fuel, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UserInfoDialog } from '../../pages/Category/modals/user-info';

const carSlides = [
    {
        id: 1,
        brand: 'CHEVROLET',
        model: 'Chevrolet Onix',
        description:
            'CHEVROLET ONIX - ЭТО ВСЕ О НЕМ! Новая модель сочетает в себе яркий дизайн, современный интерьер и все необходимые опции для комфорта и безопасности...',
        image:
            'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            acceleration: '8,0s',
            engine: '1196',
            trunk: '469',
        },
    },
    {
        id: 2,
        brand: 'CHEVROLET',
        model: 'Chevrolet Cruze',
        description:
            'CHEVROLET CRUZE - стильный седан с превосходными характеристиками. Элегантный дизайн, просторный салон и передовые технологии делают каждую поездку комфортной и безопасной...',
        image:
            'https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            acceleration: '9,2s',
            engine: '1400',
            trunk: '510',
        },
    },
    {
        id: 3,
        brand: 'CHEVROLET',
        model: 'Chevrolet Equinox',
        description:
            'CHEVROLET EQUINOX - современный кроссовер для активной жизни. Просторный интерьер, высокая посадка и отличная проходимость...',
        image:
            'https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            acceleration: '8,7s',
            engine: '1500',
            trunk: '637',
        },
    },
    {
        id: 4,
        brand: 'CHEVROLET',
        model: 'Chevrolet Camaro',
        description:
            'CHEVROLET CAMARO - легендарный спортивный автомобиль. Мощный двигатель, агрессивный дизайн и непревзойденные динамические характеристики...',
        image:
            'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            acceleration: '5,2s',
            engine: '6200',
            trunk: '254',
        },
    },
];

export default function HomeShowCase() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen h-full flex items-center justify-center relative">
            <div className="w-full mx-auto">
                <Card className="relative overflow-hidden p-0 border-none shadow-none">

                    {/* Thumbnail Buttons - Visible on all screens now */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-50 flex-col space-y-3 lg:flex hidden">
                        {carSlides.map((car, index) => (
                            <button
                                key={car.id}
                                onClick={() => swiperRef.current?.slideToLoop(index)}
                                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeIndex === index
                                    ? 'border-[#E83630] shadow-lg scale-105'
                                    : 'border-gray-300 hover:border-gray-400 hover:scale-105'
                                    }`}
                            >
                                <img
                                    src={car.image}
                                    alt={car.model}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Mobile Thumbnails (Bottom row) */}
                    <div className="flex lg:hidden justify-center gap-3 mt-4 px-4">
                        {carSlides.map((car, index) => (
                            <button
                                key={car.id}
                                onClick={() => swiperRef.current?.slideToLoop(index)}
                                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeIndex === index
                                    ? 'border-blue-500 shadow-md scale-105'
                                    : 'border-gray-300 hover:border-gray-400 hover:scale-105'
                                    }`}
                            >
                                <img
                                    src={car.image}
                                    alt={car.model}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Swiper */}
                    <Swiper
                        modules={[Autoplay, EffectFade, Keyboard]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        keyboard={{ enabled: true }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="w-full"
                    >
                        {carSlides.map((car) => (
                            <SwiperSlide key={car.id}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-12">

                                    {/* Image */}
                                    <div className="order-1 lg:order-2 flex justify-center">
                                        <img
                                            src={car.image}
                                            alt={car.model}
                                            loading="lazy"
                                            className="w-full max-w-[800px] h-auto object-cover rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="order-2 lg:order-1 space-y-6 flex flex-col justify-center">
                                        <div className="space-y-4">
                                            <span className="text-sm font-semibold text-gray-500 tracking-widest">
                                                — {car.brand}
                                            </span>
                                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                                {car.model}
                                            </h1>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                {car.description}
                                            </p>
                                        </div>
                                        <div className="border-t px-4 md:px-12 py-8">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                <Spec
                                                    icon={<Gauge className="h-6 w-6 text-[#E83630]" />}
                                                    value={car.specs.acceleration}
                                                    label="Время разгона до 100км/ч"
                                                />
                                                <Spec
                                                    icon={<Fuel className="h-6 w-6 text-[#E83630]" />}
                                                    value={car.specs.engine}
                                                    label="Объем двигателя (куб.см)"
                                                />
                                                <Spec
                                                    icon={<Package className="h-6 w-6 text-[#E83630]" />}
                                                    value={car.specs.trunk}
                                                    label="Объем багажника (литров)"
                                                />
                                            </div>
                                        </div>
                                        <Button className="bg-[#E83630] hover:bg-[#E83630/90] cursor-pointer text-white px-6 py-4 md:px-8 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full md:w-fit">
                                            ЦЕНЫ И СПЕЦИФИКАЦИИ
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Floating Phone Button */}
                    <Button
                        onClick={() => setOpen(true)}
                        size="icon"
                        className="fixed bottom-8 right-8 bg-[#E83630] hover:bg-[#E83630/90] text-white w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer duration-300 hover:scale-110 z-50"
                    >
                        <Phone className="h-6 w-6" />
                    </Button>
                </Card>
            </div>

            {/* Modal */}
            {open && <UserInfoDialog open={open} close={() => setOpen(false)} />}
        </div>
    );
}

// Spec Component
function Spec({ icon, value, label }) {
    return (
        <div className="flex items-center space-x-4 group">
            <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                {icon}
            </div>
            <div>
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
            </div>
        </div>
    );
}
