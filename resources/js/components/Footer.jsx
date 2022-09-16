import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="page-footer bg-light-gray">
                <ul>
                    <li>
                        <Link to="/">
                            <img
                                src="storage/images/HiltonLogo.png"
                                alt="hilton"
                            />
                        </Link>
                        <address className="page-footer__address">
                            <p>
                                <strong>Hilton Hotel</strong> <br />
                                Cancun-Tulum Km 248-868 <br />
                                Carr Federal Libre 307 <br />
                                Boston, MA 02199 <br />
                                888-424-1903 <br />
                                <a href="mailto:info@gordonbrothers.com">
                                    info@hilton.com
                                </a>
                            </p>
                        </address>
                    </li>
                </ul>
            </footer>
        </>
    );
};
export default Footer;
