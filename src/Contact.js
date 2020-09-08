import React from 'react';
import MapGoogle from './MapGoogle.js'

const Contact = () => {
    return(
        <>
            <section className="sectionHeader">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Get in Touch with us</p>
                </div>
            </section>

<MapGoogle />

            <section class="contact-section">
                <div class="container py-5">
                    <div className="row">
                    <div className="col-md-8">
                    <form id="contact-form">
						<h3>Send us a message</h3>
                        <div class="form-group">
						<div class="row">
							<div class="col-md-4">
								<input class="form-control" name="name" type="text" placeholder="Name" />
							</div>
							<div class="col-md-4">
								<input class="form-control" name="mail" type="text" placeholder="Email" />
							</div>
							<div class="col-md-4">
								<input class="form-control" name="tel-number" type="text" placeholder="Phone" />
							</div>
						</div>
                        </div>
                        <div class="form-group">
						<textarea class="form-control" name="comment"placeholder="Message"></textarea>
                        </div>
						<input type="submit" class="btn btn-warning" value="Send Message" />
						<div id="msg" class="message"></div>
					</form>
                    </div>
                    <div className="col-md-4">
                    <div class="contact-info">
						<h3>Contact Info</h3>
						<p>You can contact or visit us in our office from Monday to Friday from 8:00 - 17:00</p>
						<ul class="information-list">
							<li><i class="fa fa-map-marker"></i><span>907 N Randolph street, Arlington County, Virginia, United States</span></li>
							<li><i class="fa fa-phone"></i><span>+1 703-697-1776</span><span>+1 605-315-8544</span></li>
							<li><i class="fa fa-envelope-o"></i><span>nunforest@gmail.com</span><span>shtepia@gmail.com</span></li>
						</ul>						
					</div>
                    </div>
                    </div>
                </div>
		    </section>



        </>
    )
}

export default Contact;