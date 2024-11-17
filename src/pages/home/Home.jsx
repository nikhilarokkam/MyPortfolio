import React from 'react';
import Profile from "../../assets/nikhila.jpeg";
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import "./home.css";

const Home = () => {
    return (
        <section className='home section grid'>
            <img src={Profile} alt="" className='home__img' />

            <div className='home__content'>
                <div className='home__data'>
                    <h1 className='home__title'>
                        <span>I'm Rokkam Nikhila</span>{'\n'}<h4>Full Stack PHP Developer</h4>
                    </h1>

                    <p className='home__description'>
                    I like to code things from scratch, and enjoy bringing ideas to life in the browser. Take a peek around, and let's embark on a web journey together! 🚀💻  
                    </p>

                    <Link to='/about' className='button'>
                        More About Me{' '}
                        <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className='color__block'></div>
        </section>
    )
}

export default Home
