import React, { useState } from 'react';
import { motion } from 'framer-motion';

const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.5, delay: 0.5 } }, 
  };

  return (
    <div className="portfolio__list">
      {list.map((category, index) => (
        <motion.button
          className={`${active === index ? 'active-work' : ''} portfolio__list-item text-cs`}
          key={index}
          onClick={() => {
            setActive(index);
            filterItems(category);
          }}
          variants={buttonVariants}
          whileHover="hover"
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default List;

