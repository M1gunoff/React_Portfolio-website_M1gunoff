import React, { useEffect, useState } from 'react'
import './Header.css'
import { links } from '../../Data'; 
import { FaTelegramPlane } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { BsSun, BsMoon} from 'react-icons/bs';
import './Header.css'
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import shapeOne from '../../assets/shape-1.png'
 
const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
}

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [theme, setTheme] = useState(getStorageTheme()); 

    const scrollTop = () => {
        animateScroll.scrollToTop();
    }

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    } 

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } 
        else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    },[theme])

  return (
    <header className={`${scrollNav ? 'scroll-header' : ''} header`}> 
        <nav className="nav">
            <Link to='./' onClick={scrollTop} className="nav__logo text-cs">
                Migunoff
            </Link>

            <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                <div className="nav__data">
                    <ul className="nav__list">
                        {links.map(({name, path}, index) => {
                            return (
                            <li className="nav__item" key={index}>
                                <Link   
                                    className="nav__link"
                                    to={path}
                                    spy={true}
                                    hashSpy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                    onClick={() => setShowMenu(!showMenu)}
                                >
                                    {name}
                                </Link>
                            </li>
                            );
                        })}
                    </ul>

                    <div className="header__socials">
                    <a href="https://t.me/m1gunoff" target="_blank" rel="noopener noreferrer" className="home__social-link">
                    <FaTelegramPlane />
                        </a>

                        <a href="mailto:migunoff21@mail.ru" className="home__social-link">
                            <SiMaildotru />
                        </a>
                     </div>
            
                </div>

                <div className='section__deco deco__left header__deco'>
                    <img src={shapeOne} alt='' className='shape' />
                </div>
            </div>

            <div className="nav__btns">
                <div className="theme__toggle" onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>

                <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>

  )
}

export default Header
