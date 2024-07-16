import React, { useEffect } from 'react';
import { useAnimation, motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cv } from '../../Data';
import Card from './Card';
import './Resume.css';
import shapeOne from '../../assets/shape-1.png';

const Resume = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { type: 'spring', duration: 1.25 } },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 2, delay: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 2.2, delay: 1 } },
  };

  return (
    <div>
      <motion.section
        className="resume section"
        id="resume"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        ref={ref}
      >
        <motion.h2 className="section__title text-cs" variants={textVariants}>
          Резюме
        </motion.h2>
        <motion.p className="section__subtitle" variants={textVariants}>
          Моя <span>История</span>
        </motion.p>

        <motion.div
          className="resume__container container grid"
          variants={containerVariants}
        >
          <motion.div className="resume__group" variants={containerVariants}>
            <h3 className="resume__heading">Education</h3>

            <div className="resume__items">
              {cv.map((val, id) => {
                if (val.category === 'education') {
                  return (
                    <Card
                      key={id}
                      title={val.title}
                      subtitle={val.subtitle}
                      date={val.date}
                      description={val.description}
                    />
                  );
                }
              })}
            </div>
          </motion.div>

          <motion.div className="resume__group" variants={containerVariants}>
            <h3 className="resume__heading">Experience</h3>

            <div className="resume__items">
              {cv.map((val, id) => {
                if (val.category === 'experience') {
                  return (
                    <Card
                      key={id}
                      title={val.title}
                      subtitle={val.subtitle}
                      date={val.date}
                      description={val.description}
                    />
                  );
                }
              })}
            </div>
          </motion.div>
        </motion.div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>

        <div className="section__bg-wrapper">
          <span className="bg__title">History</span>
        </div>
      </motion.section>
    </div>
  );
};

export default Resume;
