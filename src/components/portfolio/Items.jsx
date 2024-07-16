import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import shapeTwo from "../../assets/shape-2.png";
import { motion } from 'framer-motion';

const Items = ({projectItems}) => {

    const containerVariants = (delay = 0) => ({
        "offscreen": { opacity: 0, y: 30 },
        "onscreen": { opacity: 1, y: 0, transition: { type: "spring", duration: 2, delay}}
      })

  return (
      <>
      {projectItems.map((projectItem) => {
        const {id, img, category, title, description} = projectItem;
        return(
            <motion.div 
            layout 
            initial="offscreen" whileInView={"onscreen"} variant={containerVariants(0.6)}
            className="portfolio__items card card-two" 
            key={id}>
                <div className="portfolio__img-wrapper">
                    <img src={img} alt="" className="portfolio__img" />
                </div>

                <span className="portfolio__category text-cs">
                    {category}
                </span>
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">{description}</p>

                <a href="#pricing" className="link">
                    Узнать цену
                    <FaArrowRight className="link__icon"></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </motion.div>
        )
      })}
      </>
  )
}

export default Items
