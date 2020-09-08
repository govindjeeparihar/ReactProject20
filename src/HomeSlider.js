import React from 'react';
import './css/HomeSlider.css';
import Slider from 'react-slick';

import SlideImg1 from './images/slide1.jpg';
import SlideImg2 from './images/slide2.jpg';
import SlideImg3 from './images/slide3.jpg';

const HomeSlider = () => {

    const setting = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

    }

    return (
        <>

            <Slider {...setting}>
                <div className="item">
                    <div className="itemBG" style={{ backgroundImage: `url(${SlideImg1})` }}>
                        <div className="container px-5">
                            <h2>Construction &amp; <br /> Building Template</h2>
                            <p>We appreciate you visiting our website</p>
                            <a className="button-two" href="/">Our Projects</a><a className="button-one" href="/">Contact Us</a>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemBG" style={{ backgroundImage: `url(${SlideImg2})` }}>
                        <div className="container px-5">
                            <h2>We make <br /> your dreams live</h2>
                            <p>We appreciate you visiting our website</p>
                            <a className="button-one" href="/">Contact Us</a>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemBG" style={{ backgroundImage: `url(${SlideImg3})` }}>
                        <div className="container px-5">
                            <h2>Flexible &amp; <br /> Easy Customizable</h2>
                            <p>We appreciate you visiting our website</p>
                            <a className="button-one" href="/">Our Projects</a>
                        </div>
                    </div>
                </div>


            </Slider>

        </>
    )
}


export default HomeSlider;