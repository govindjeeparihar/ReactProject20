import React from 'react';






const HeaderTop = () => {
    return (
        <>
            <div className="HeaderTop">
                <div className="container">
                    <div className="inner-top-line">
                        <div className="row">
                            <div className="col-sm-8">
                                <ul className="info-list">
                                        <li>
                                        <i className="fa fa-envelope"></i>
                                        <span>Email :</span> shtepia@mail.com
										</li>
                                        
                                        <li>
                                        <i className="fa fa-phone"></i>
                                        <span>Phone :</span> +0(123) 456-78-90
										</li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a className="dribble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HeaderTop;
