import React from "react"

const Footer = () => <footer className="bg-dark page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-white text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase"><span><i class="bi bi-headset"></i></span>SkullCandy.com</h5>
                <hr />
                <address >
                    No:12, Abc Street <br />
                    California <br />
                    United States Of America
                </address>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li className="mt-2"><a href="#!" className="text-white"><i class="bi bi-facebook"></i><cite> Facebook</cite></a></li>
                    <li  className="mt-2"><a href="#!" className="text-white"><i class="bi bi-twitter"></i> Twitter</a></li>
                    <li className="mt-2"><a href="#!"  className="text-white" ><i class="bi bi-twitter-x"></i> Twitter-X</a></li>
                    <li className="mt-2"><a href="#!"  className="text-white"><i class="bi bi-threads-fill"></i> Threads</a></li>
                    <li className="mt-2"><a href="#!"  className="text-white"><i class="bi bi-youtube"></i> Youtube</a></li>
                </ul>
            </div>

        </div>
    </div>

    <div className="footer-copyright text-center text-white py-3">© 2023 Copyright:
        <a href="#"><i class="bi bi-headset"></i>SkullCandy.com</a>
    </div>

</footer>

export default Footer
