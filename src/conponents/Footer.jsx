import React from 'react'
import { IoHome, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube, IoLogoGithub } from 'react-icons/io5';
import { FaEnvelope, FaPrint, FaFacebookF } from 'react-icons/fa';
import { AiTwotonePhone } from 'react-icons/ai';
import '../stylesheets/footer.css'


function Footer() {
    return (
        <footer id="Footer" style={{ backgroundColor: '#b3b3cc' }} className="page-footer font-small stylish-color-dark pt-4">
            <div style={{ backgroundColor: '#b3b3cc' }} className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <h5 className="text-uppercase font-weight-bold mt-3 mb-4">About our Company</h5>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none" />
                    <div id="link10" className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Products</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
                        <p>
                            <a href="#!">Travelling</a>
                        </p>
                        <p>
                            <a href="#!">About</a>
                        </p>
                        <p>
                            <a href="#!">BrandFlow</a>
                        </p>
                        <p>
                            <a href="#!">Services</a>
                        </p>
                    </div>
                    <hr className="clearfix w-100 d-md-none" />
                    <div id="link10" className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
                        <p>
                            <a href="#!">Your Account</a>
                        </p>
                        <p>
                            <a href="#!">Become an Affiliate</a>
                        </p>
                        <p>
                            <a href="#!">Shipping Rates</a>
                        </p>
                        <p>
                            <a href="#!">Help</a>
                        </p>
                    </div>
                    <hr className="clearfix w-100 d-md-none" />
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        <p>
                            <IoHome /> Mumbai, Maharashtra
                        </p>
                        <p>
                            <FaEnvelope /> collab@codewithfaraz.com
                        </p>
                        <p>
                            <AiTwotonePhone /> + 91 80254 52xxx
                        </p>
                        <p>
                            <FaPrint /> + 91 80254 55xxx
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <ul style={{ backgroundColor: '#b3b3cc' }} className="list-unstyled list-inline text-center py-2">
                <li className="list-inline-item">
                    <h5 className="mb-1">Register for free</h5>
                </li>
                <li className="list-inline-item">
                    <a href="#Contact" className="btn btn-outline-danger btn-rounded">Sign up!</a>
                </li>
            </ul>
            <hr />
            <div className="hover-effect1">
                <ul style={{ backgroundColor: '#b3b3cc' }} className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com/codewithfaraz" title="Facebook"><FaFacebookF /></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.twitter.com/codewithfaraz" title="Twitter"><IoLogoTwitter /></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.instagram.com/codewithfaraz" title="Instagram"><IoLogoInstagram /></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.youtube.com/@codewithfaraz" title="Youtube"><IoLogoYoutube /></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#." title="Github"><IoLogoGithub /></a>
                    </li>
                </ul>
            </div>
            <div style={{ backgroundColor: '#b3b3cc' }} className="footer-copyright text-center py-3">
                Copyright© 2023: Design and Develop by Faraz
            </div>
        </footer>

    )
}

export default Footer