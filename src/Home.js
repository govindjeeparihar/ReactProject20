import React, { useState, useEffect } from 'react';
import HomeSlider from './HomeSlider';
import Testimonial from './Testimonial';

const Home = () => {


    const [ser, setSer] = useState([]);

    useEffect(() => {

        fetch('https://reqres.in/api/users?page=2')
            .then((resp) => {
                resp.json().then((result) => {
                    setSer(
                        result.data
                    )
                })
            })

    },[])

    return (
        <>
            <HomeSlider />


            <section className="services-section">
                <div className="container py-5">
                    <div className="title-section">
                        <h2>Our Services</h2>
                        <p>What we do &amp; what we offer to customers</p>
                    </div>



                    <div className="services-box">
                        <div className="row">
                            {
                                ser.map(item =>
                                    <div className="col-sm-6 col-md-4" key={item.id}>
                                        <div className="services-post">
                                            <div className="services-gal">
                                                <img className="w-100" src={item.avatar} alt="" />
                                            </div>
                                            <div className="content-post">
                                                <h3><a href="#">{item.first_name} {item.last_name}</a></h3>
                                                <h6>{item.email}</h6>
                                                <p>Phasellus hendrerit pellentesque aliquet nibh nec urna in nisi neque, aliquet vel, dapibus id, mattis vel, nisi...</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>



            <section className="statistic-section">
                <div className="container">
                    <div className="statistic-box">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="statistic-post">
                                    <i className="fa fa-building-o"></i>
                                    <p className="timer-elem"><span className="timer" data-from="0" data-to="326">326</span></p>
                                    <h2>Completed Projects</h2>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="statistic-post">
                                    <i className="fa fa-trophy"></i>
                                    <p className="timer-elem"><span className="timer" data-from="0" data-to="18">18</span></p>
                                    <h2>Award Winings</h2>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="statistic-post">
                                    <i className="fa fa-users"></i>
                                    <p className="timer-elem"><span className="timer" data-from="0" data-to="120">120</span></p>
                                    <h2>Our Staff</h2>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="statistic-post">
                                    <i className="fa fa-smile-o"></i>
                                    <p className="timer-elem"><span className="timer" data-from="0" data-to="880">880</span></p>
                                    <h2>Happy Clients</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <Testimonial />
        </>
    )
}

export default Home;