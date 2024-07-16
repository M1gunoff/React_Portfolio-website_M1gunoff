import React, { useState, useEffect } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import shapeOne from '../../assets/shape-1.png';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      'https://sheet.best/api/sheets/eb932a05-f095-498e-9aae-c42787267ae2',
      form
    ).then((response) => {
      console.log(response);

      setForm({ name: '', email: '', subject: '', message: '' });
    });
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={pricingVariants}
    >
      <section className="contact section" id="contact">
      <motion.h2 variants={containerVariants(0.6)} className='section__title text-cs'>Свяжитесь со мной</motion.h2>
        <motion.p variants={containerVariants(0.9)} className='section__subtitle'>
            Давайте<span>Поговорим об идеях</span>
        </motion.p>

        <motion.div variants={containerVariants(1.1)} className="contact__container container grid">
            <div className="contact__content">
                <div className="contact__card">
                    <motion.span variants={containerVariants(0.6)} className="contact__card-icon">
                        <FaRegMap />
                    </motion.span>

                    <motion.h3 variants={containerVariants(0.6)} className="contact__card-title">Адрес</motion.h3>
                    <motion.p variants={containerVariants(0.6)} className="contact__card-data">Россия, Москва</motion.p>
                </div>

                <div className="contact__card">
                    <motion.span variants={containerVariants(0.8)} className="contact__card-icon">
                        <FaRegUser />
                    </motion.span>

                    <motion.h3 variants={containerVariants(0.8)} className="contact__card-title">Freelance</motion.h3>
                    <motion.p variants={containerVariants(0.8)} className="contact__card-data">Ответ в течение 1 рабочего дня</motion.p>
                </div>

                <div className="contact__card">
                    <motion.span variants={containerVariants(1)} className="contact__card-icon">
                        <FaRegEnvelope />
                    </motion.span>

                    <motion.h3 variants={containerVariants(1)} className="contact__card-title">Email</motion.h3>
                    <motion.p variants={containerVariants(1)} className="contact__card-data">migunoff21@mail.ru</motion.p>
                </div>

                <div className="contact__card">
                    <motion.span variants={containerVariants(1.2)} className="contact__card-icon">
                        <FaRegAddressBook />
                    </motion.span>

                    <motion.h3 variants={containerVariants(1.2)} className="contact__card-title">Telegram</motion.h3>
                    <motion.p variants={containerVariants(1.2)} className="contact__card-data">@m1gunoff </motion.p>
                </div>
            </div>

            <form className='contact__form' onSubmit={handleSubmit}>
                <div className="contact__form-group grid">
                    <motion.div variants={containerVariants(0.6)} className="contact__form-div">
                        <label className="contact__form-tag text-cs">Ваше полное имя <b>*</b></label>
                        <input type="text" 
                                name='name' 
                                onChange={handleChange} 
                                value={form.name} className="contact__form-input" />
                    </motion.div>

                    <motion.div variants={containerVariants(0.6)} className="contact__form-div">
                        <label className="contact__form-tag text-cs">Ваш Email <b>*</b></label>
                        <input type="email" 
                                name='email' 
                                onChange={handleChange} 
                                value={form.email} 
                        className="contact__form-input" />
                    </motion.div>
                </div>

                <motion.div variants={containerVariants(0.8)} className="contact__form-div">
                        <label className="contact__form-tag text-cs">Ваша тема <b>*</b></label>
                        <input type="text"
                                name='subject' 
                                onChange={handleChange} 
                                value={form.subject} 
                        className="contact__form-input" />
                </motion.div>

                <motion.div variants={containerVariants(1)} className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">Ваше сообщение <b>*</b></label>
                        <textarea 
                        name='message' 
                        onChange={handleChange} 
                        value={form.message} 
                        className='contact__form-input'></textarea>
                </motion.div>

                <motion.div className="contact__submit">
                    <motion.p variants={containerVariants(2)}>* Ваши данные остаются конфиденциальными</motion.p>
                    <motion.button variants={containerVariants(2.2)} type='submit' className='btn text-cs'>
                        Отправить
                    </motion.button>
                </motion.div>
            </form>
        </motion.div>

        <div className='section__deco deco__left'>
            <img src={shapeOne} alt='' className="shape" />
        </div>

        <div className="section__bg-wrapper">
          <span className="bg__title">Contact Me</span>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
