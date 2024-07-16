import { useEffect } from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import './Pricing.css';

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  
  const pricingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        staggerChildren: 0.2,
        delay: 1,
        duration: 2.2,
      },
    },
  };

  const containerVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 2, delay}}
  })

  

  useEffect(() => {
    if (inView) {
      controls.start('visible'); 
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="pricing section"
      id="pricing"
      initial="hidden"
      animate={controls} 
      variants={pricingVariants}
      ref={ref} 
    >
      <h2 className="section__title text-cs">Цены</h2>
      <p className="section__subtitle">
        Мои <span>Предложения</span>
      </p>

      <motion.div className="pricing__container container grid">
        <motion.div
          className="pricing__item card card-one"
          variants={containerVariants(1)}
        >
          <span className="pricing__subtitle text-cs">Лендинг / Одностраничный сайт</span>
          <h3 className="pricing__price">
            от 5000 <span>₽</span>
          </h3>
          <p className="pricing__description">
            Одностраничный сайт, специально разработанный для эффективной продажи товара или услуги.
            За счет своего формата он помогает емко подать информацию и мотивировать посетителя к заказу здесь и сейчас. Легкий запуск, быстрое начало продаж.
          </p>
          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Домен сайта RU, РФ, SU, COM.RU</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Регистрация в поисковых системах</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Возможность изменения оформления</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Месяц поддержки и консультирования в подарок</span>
            </li>
          </ul>
          <a href="#contact" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon" />
          </a>
          <img src={shapeTwo} alt="" className="shape c__shape" />
        </motion.div>

        <motion.div
          className="pricing__item card card-one"
          variants={containerVariants(1.5)}
        >
           <span className="pricing__subtitle text-cs">Корпоративный сайт / Промо</span>
                <h3 className="pricing__price">
                    от 12000 <span>₽</span> 
                </h3>

                <p className="pricing__description">   
                    Лицо вашей компании в сети Многостраничный сайт, заточенный под поисковое продвижение. Разработка по вашему брифу. Получайте органический трафик без лишних затрат, оформляйте заказы, развивайте бизнес вместе с нами.
                </p>

                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Домен сайта RU, РФ, SU, COM.RU</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Заполнение до 10 страниц/товаров сайта материалами Заказчика</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Регистрация в поисковых системах</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Месяц поддержки и консультирования в подарок</span>
                    </li>
                </ul>

                <a href="#contact" className="btn pricing__btn text-cs">
                    Start Projct
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
        </motion.div>

        <motion.div
          className="pricing__item card card-one"
          variants={containerVariants(2)}
        >
          <span className="pricing__subtitle text-cs">Интернет-Магазин</span>
                <h3 className="pricing__price">
                    от 29000 <span>₽</span> <em></em>
                </h3>

                <p className="pricing__description">
                Полноценный интернет-магазин с каталогом до 5000 товаров, корзиной и подключением популярных платежных систем. Доступный инструмент для реализации ваших идей. Полностью упакуем сайт и подготовим к приему посетителей.
                </p>

                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Настройка цветового оформления</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Заполнение до 15 страниц/товаров сайта материалами Заказчика</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Поиск, сортировка и фильтрация товаров</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Полная комплектация сайта</span>
                    </li>
                </ul>

                <a href="#contact" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
        </motion.div>
      </motion.div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Pricing</span>
      </div>
    </motion.section>
  );
};

export default Pricing;
