import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence, spring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../Data';
import './Skills.css';
import shapeOne from '../../assets/shape-1.png';

const Skills = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { type:"spring", duration: 1.25 } },
  };


  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type:"spring", duration: 2.2,delay: 1,} },
  };

  const containerVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 2, delay}}
  })

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="skills section"
      id="skills"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      ref={ref}
    >
      <motion.h2 className="section__title text-cs">Профессиональные навыки</motion.h2>
      <motion.p className='section__subtitle'>
        Мои <span>Скиллы</span>
      </motion.p>

      <AnimatePresence>
        {inView && (
          <motion.div
            key="text"
            className="skills__text"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
          </motion.div>
        )}
      </AnimatePresence>

      <div className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => (
          <motion.div
            className="skills__item"
            key={index}
            variants={containerVariants((index+1)*0.3)}
            initial="hidden"
            animate={controls}
          >
            <div className="skills__titles">
              <motion.h3
                className="skills__name"
                variants={textVariants}
              >
                {name}
              </motion.h3>
              <motion.span
                className="skills__number"
                variants={textVariants}
              >
                {percentage} <span>%</span>
              </motion.span>
            </div>

            <motion.p
              className="skills__description"
              variants={textVariants}
            >
              {description}
            </motion.p>

            <div className="skills__bar">
              <motion.span
                className="skills__percentage"
                style={{ width: `${percentage}%` }}
              >
                <span></span>
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Skills</span>
      </div>
    </motion.section>
  );
};

export default Skills;
