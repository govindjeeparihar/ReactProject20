import React from 'react';
import './css/Testimonial.css';

import Slider from 'react-slick';




const Testimonial = () => {

    const setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

    }

    return (
        <div className="Testimonial">
            <div className="container">
                <Slider {...setting}>
                    <div className="item">
                        <div className="testimonial-post">
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                            <div className="test-content">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                                <h3>- Brenton Pace</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial-post">
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                            <div className="test-content">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                                <h3>- Samanta Jameson</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial-post">
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                            <div className="test-content">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                                <h3>- David Spencer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial-post">
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                            <div className="test-content">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                                <h3>- Paul King</h3>
                            </div>
                        </div>
                    </div>


                </Slider>
            </div>
        </div>
    )
}

export default Testimonial;