import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';
import { Phone, Gauge, Fuel, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UserInfoDialog } from '../../pages/Category/modals/user-info';

import bg_image from '../../assets/bg-home.png';

const carSlides = [
    {
        id: 1,
        brand: 'CHEVROLET',
        model: 'Chevrolet Onix',
        description:
            'CHEVROLET ONIX - ЭТО ВСЕ О НЕМ! Новая модель сочетает в себе яркий дизайн, современный интерьер и все необходимые опции для комфорта и безопасности...',
        image: 'https://chevrolet.uz/assets/images/onix/colors/01/1.png',
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
        image: 'https://platform.cstatic-images.com/large/in/v2/stock_photos/5e4a17e4-014d-46e5-8b90-1d04e9c1bb10/17226ccf-e2e2-4acc-8b6a-50d7a52ae9e3.png',
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
        image: 'https://di-uploads-pod2.dealerinspire.com/greggyoungchevyomaha/uploads/2021/10/22Chevy-Equinox-Jellybean-MosaicBlackMetallic-Premier.png',
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
        image: 'https://pngimg.com/uploads/chevrolet/%D1%81hevrolet_PNG56.png',
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
        <div
            className="min-h-screen h-full flex items-center justify-center relative"
            style={{
                backgroundImage: `url(${bg_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full mx-auto">
                <Card className="relative overflow-hidden border-none shadow-none bg-transparent">

                    {/* Right side thumbnail navigation */}
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

                    {/* Mobile Thumbnails */}
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

                    <Swiper
                        modules={[Autoplay, EffectFade, Keyboard]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
                        keyboard={{ enabled: true }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="w-full"
                    >
                        {carSlides.map((car) => (
                            <SwiperSlide key={car.id}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-12">
                                    <div className="order-1 lg:order-2 flex justify-center">
                                        <img
                                            src={car.image}
                                            alt={car.model}
                                            loading="lazy"
                                            style={{ mixBlendMode: 'multiply' }}
                                            className="w-full max-w-[900px] h-auto object-cover rounded-lg transition-all duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="order-2 lg:order-1 space-y-6 flex flex-col justify-center">
                                        <motion.div
                                            key={activeIndex}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="space-y-4"
                                        >
                                            <span className="text-sm font-semibold text-gray-500 tracking-widest">
                                                — {car.brand}
                                            </span>
                                            <motion.h1
                                                initial={{ x: -80, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.8 }}
                                                className="text-4xl lg:text-5xl font-bold text-gray-900"
                                            >
                                                {car.model}
                                            </motion.h1>
                                            <motion.p
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="text-gray-600 text-lg leading-relaxed"
                                            >
                                                {car.description}
                                            </motion.p>
                                        </motion.div>
                                        <div className="border-t px-4 md:px-12 py-8">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                <Spec icon={<Gauge className="h-6 w-6 text-[#E83630]" />} value={car.specs.acceleration} label="Время разгона до 100км/ч" />
                                                <Spec icon={<Fuel className="h-6 w-6 text-[#E83630]" />} value={car.specs.engine} label="Объем двигателя (куб.см)" />
                                                <Spec icon={<Package className="h-6 w-6 text-[#E83630]" />} value={car.specs.trunk} label="Объем багажника (литров)" />
                                            </div>
                                        </div>
                                        <Button className="bg-[#E83630] hover:bg-[#E83630]/90 text-white px-6 py-4 md:px-8 md:py-6 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full md:w-fit">
                                            ЦЕНЫ И СПЕЦИФИКАЦИИ
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="fixed bottom-8 right-8 z-50 group">
                        <span className="absolute inset-0 rounded-full animate-ping bg-[#E83630]/30 group-hover:scale-110 transition-transform duration-300" />
                        <Button
                            onClick={() => setOpen(true)}
                            size="icon"
                            className="relative bg-[#E83630] hover:bg-[#E83630]/90 text-white w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                            <Phone className="h-6 w-6" />
                        </Button>
                    </div>

                </Card>
            </div>

            {open && <UserInfoDialog open={open} close={() => setOpen(false)} />}
        </div>
    );
}

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
