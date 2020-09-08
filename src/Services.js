import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial';

const Services = () => {

    const [project, setProjects] = useState([])

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then((resp) => {
                resp.json().then((result) => {
                    setProjects(
                        result.slice(0,12)
                    )
                })
            })
    }, [])

    return (
        <>
            <section className="sectionHeader">
                <div className="container">
                    <h2>Our Services</h2>
                    <p>Competitive Avantage.</p>
                </div>
            </section>

            <div className="services-box py-5">
            <div className="container">
                <div className="row">
                    {
                        project.map(item =>
                            <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                                <div className="services-post">
                                    <div className="services-gal">
                                        <img className="w-100" src={item.download_url} alt="" />
                                    </div>
                                    <div className="content-post py-3">
                                        <h5>{item.author}</h5>
                                        <p>Phasellus hendrerit pellentesque aliquet nibh nec urna in nisi neque, aliquet vel, dapibus id, mattis vel, nisi...</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
                </div>

            </div>





            <Testimonial />
        </>
    )
}

export default Services;