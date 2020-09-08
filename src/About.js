import React, { useEffect, useState } from 'react';
import MissionImg from './images/ab2.jpg';
import HistoryImg from './images/ab3.jpg';
import HolderImg from "./images/ab1.jpg";

import axios from 'axios';

const About = () => {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then((resp) => {
                setTeam(
                    resp.data.data.slice(0, 4)
                )
            })
    },[])


    return (
        <>
            <section className="sectionHeader">
                <div className="container">
                    <h2>About Us</h2>
                    <p>What you should know about us</p>
                </div>
            </section>

            <section className="about">
                <div className="container py-5">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-post">
                                <img className="img-fluid mb-4" src={MissionImg} alt="" />
                                <h2>Vision, Mission &amp; Values</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.</p>

                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-post">
                                <img className="img-fluid mb-4" src={HistoryImg} alt="" />
                                <h2>History</h2>
                                <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>

                                <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <section className="team-section py-5">
                <div className="container">
                    <div className="title-section">
                        <h2>Meet Our Team.</h2>
                        <p>Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede <br /> semper est, vitae luctus metus libero eu augue. </p>
                    </div>
                    <div className="team-box">
                        <div className="row">

                            {
                                team.map(item =>
                                    <div className="col-md-3 col-sm-6" key={item.id} >
                                        <div className="team-post">
                                            <img className="w-100" src={item.avatar} alt="" />
                                            <h5>{item.first_name} {item.first_name}</h5>
                                            <span>{item.email}</span>
                                            <ul className="social-list">
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                )
                            }


                        </div>
                    </div>
                </div>
            </section>



            <section className="about-section">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img className="img-fluid" src={HolderImg} />
                        </div>
                        <div className="col-md-6">
                            <div className="about-box px-5">
                                <div className="inner-box px-5">
                                    <div className="title-section">
                                        <h1>About Shtepia</h1>
                                        <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="about-us-post">
                                                <a href="#"><i className="fa fa-building-o"></i></a>
                                                <h5>Construction</h5>
                                            </div>
                                            <div className="about-us-post">
                                                <a href="#"><i className="fa fa-cogs"></i></a>
                                                <h5>Maintanance</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-us-post">
                                                <a href="#"><i className="fa fa-desktop"></i></a>
                                                <h5>Good Planning</h5>
                                            </div>
                                            <div className="about-us-post">
                                                <a href="#"><i className="fa fa-users"></i></a>
                                                <h5>Awesome Stuff</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default About;