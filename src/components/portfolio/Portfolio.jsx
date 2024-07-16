import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import { projects } from '../../Data';
import './Portfolio.css';
import { AnimatePresence } from 'framer-motion';
import shapeOne from '../../assets/shape-1.png';
import {motion} from 'framer-motion'


const allNavList = ['Все', ...new Set(projects.map((project) => project.category)),];

const Portfolio = () => {

      const containerVariants = (delay = 0) => ({
    "offscreen": { opacity: 0, y: 30 },
    "onscreen": { opacity: 1, y: 0, transition: { type: "spring", duration: 2, delay}}
  })
    const [projectItems, setMenuItems] = useState(projects);
    const [navList, setCategories] = useState(allNavList);

    const filterItems = (category) => {
        if(category === 'Все') {
            setMenuItems(projects);
            return;
        }
        const newProjectItems = projects.filter((item) => item.category === category);

        setMenuItems(newProjectItems);
    }

  return (
      <motion.section initial="offscreen" whileInView={"onscreen"} variants={containerVariants(0.6)} className="portfolio section" id="work">
      <motion.h2 initial="offscreen" whileInView={"onscreen"} variants={containerVariants(0.5)} className="section__title text-cs">Портфолио</motion.h2>
        <motion.p initial="offscreen" whileInView={"onscreen"} variant={containerVariants(0.7)} className='section__subtitle'>
            Мои <span>Работы</span>
        </motion.p>

        <List list={navList} filterItems={filterItems}/>

        <motion.div initial="offscreen" whileInView={"onscreen"} variant={containerVariants(2)} className="portfolio__container container grid">
            <AnimatePresence initial={false}>
                <Items projectItems={projectItems} />
            </AnimatePresence>
        </motion.div>

        <div className="section__deco deco__right">
            <img src={shapeOne} alt='' className="shape" />
        </div>

        <div className="section__bg-wrapper">
          <span className="bg__title">Portfolio</span>
        </div>
      </motion.section>
  )
}

export default Portfolio
