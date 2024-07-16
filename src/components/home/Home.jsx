import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile-imgggg.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';
import CV from '../../assets/Migunov_Ilya_Web.pdf';
import './Home.css';

const Home = () => {

    const containerVariants = (delay = 0) => ({
        "offscreen": { opacity: 0, y: 30 },
        "onscreen": { opacity: 1, y: 0, transition: { type: "spring", duration: 2, delay}}
      })

  return (
    <motion.section
      className="home"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="home__wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="home__container container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.p initial="offscreen" whileInView={"onscreen"} variants={containerVariants(0.4)} className="home__subtitle text-cs">
            Привет, <span>Меня Зовут</span>
          </motion.p>

          <motion.h1 initial="offscreen" whileInView={"onscreen"} variants={containerVariants(0.5)} className="home__title text-cs">
            <span>ИЛЬЯ</span> МИГУНОВ
          </motion.h1>

          <motion.p initial="offscreen" whileInView={"onscreen"} variants={containerVariants(0.7)} className="home__job">
            <span className="text-cs">I am</span> <b>Web Developer</b>
          </motion.p>

          <motion.div
            className="home__img-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="home__banner">
              <motion.img
                src={profileImg}
                alt=""
                className="home__profile"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
            </div>


            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </motion.div>

          <motion.p initial="offscreen" whileInView={"onscreen"} variants={containerVariants(0.9)} className="home__text">
            Веб-разработчик из Москвы. Опыт в создании современных и отзывчивых веб-приложений с использованием React. Готов воплотить ваши идеи в креативные веб-приложения.
          </motion.p>

          <motion.div initial="offscreen" whileInView={"onscreen"} variants={containerVariants(1)} className="home__socials">
            <a href="https://t.me/m1gunoff" target="_blank" rel="noopener noreferrer" className="home__social-link">
              <FaTelegramPlane />
            </a>

            <a href="mailto:migunoff21@mail.ru" className="home__social-link">
              <SiMaildotru />
            </a>
          </motion.div>

          <motion.div initial="offscreen" whileInView={"onscreen"} variants={containerVariants(1.1)} className="home__btns">
            <a download='' href={CV} className="btn text-cs">Download CV</a>

            <a href="#skills" className="hero__link text-cs">My Skills</a>
          </motion.div>
        </motion.div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>

        <div className="section__bg-wrapper">
          <span className="bg__title">Web Developer</span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
