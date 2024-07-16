import React from 'react'
import './Services.css';
import {services} from '../../Data';
import {FaArrowRight} from 'react-icons/fa';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import './Services.css';

const Services = () => {
  const containerVariants = (delay = 0) => ({
    "offscreen": { opacity: 0, y: 30 },
    "onscreen": { opacity: 1, y: 0, transition: { type: "spring", duration: 2, delay}}
  })

  return (
    <motion.section initial="offscreen" whileInView={"onscreen"} variants={containerVariants(0.5)} className="services section" id="services">
        <motion.h2 initial="offscreen" whileInView={"onscreen"} variants={containerVariants(0.7)} className="section__title text-cs">Что я делаю?</motion.h2>
        <motion.p initial="offscreen" whileInView={"onscreen"} variants={containerVariants(0.8)} className="section__subtitle">
            Мои <span>Услуги</span>
        </motion.p>

        <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="services__container container mySwiper">
            {services.map(({name, title, description}, index) => {
                return (
                    <SwiperSlide className="services__item card card-one" key={index}>
                        <span className="services__subtitle text-cs">{name}</span>

                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>

                        <a href="#pricing" className="link">
                            Узнать цену
                            <FaArrowRight className='link__icon'></FaArrowRight>
                        </a>

                        <img src={shapeTwo} alt="" className="shape c__shape" />
                    </SwiperSlide>
                );
            })}
        </Swiper>

        <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className="shape" />
        </div>
        
        <div className="section__bg-wrapper">
          <span className="bg__title">Services</span>
        </div>
    </motion.section>
  )
}

export default Services
