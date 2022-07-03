import React from 'react';
import './Footer.css'
import logo from '../../../images/logo.png'
const Footer = () => {
    return (
        <div className="footer-dark bg-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h4 className='text-light'>Upcoming</h4>
                            <ul className='text-secondary'>
                                <li><a href="#">Import  New China</a></li>
                                <li><a href="#">Imprt form Denmark</a></li>

                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h4 className='text-light'>About</h4>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Teams</a></li>
                                <li><a href="#">Branch</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h4 className='text-light'>Terms & Conditions</h4>
                            <p>Terms of service are the legal agreements between a service provider and a person who wants to use that service. </p>
                        </div>

                        <p class="copyright"><img src={logo} width="125px" alt="" />  © 2022</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;