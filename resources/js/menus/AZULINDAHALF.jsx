import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AzulindaHalf = ({ menu }) => {
    const menu_type = useSelector((state) => state.menutypes.menutype);

    console.log(menu);
    return (
        <>
            <div className="container text-center">
                <div className="container-fluid">
                    <form id="loader">
                        <div className="print-box">
                            <div className="print-outter">
                                <div className="print-lines">
                                    <div className="print-inner">
                                        <div className="menu-headline">
                                            Menu Title:{menu.name}
                                        </div>
                                        <div className="menu-subtitle">
                                            Menu Title 2:{menu.title}
                                        </div>
                                        <div className="menu-bg">
                                            Menu Type:{menu_type.name}
                                        </div>
                                        <div className="row">
                                            <div className="col-6-md col-6-xl col-6-sm">
                                                {/* left section */}
                                            </div>
                                            <div className="col-6-md col-6-xl col-6-sm">
                                                {/* //right section */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="col-sm-6 col-sm-push-6 container">
                <div className="footer-inner">
                    <ul className="footer-icons">
                        <li>
                            <span className="bullet veg"></span>
                          <FontAwesomeIcon icon="apple-alt" /> 
                            VEGETARIAN *
                        </li>
                        <li>
                            <span className="bullet gf"></span>
                            <FontAwesomeIcon icon="bread-slice" /> Gluten-free
                        </li>
                    </ul>
                    <div className="menu_notice_wrap outter-edit rel style1">
                        <div className="menu_footer_notice"></div>
                        {menu.footer_notice}
                        <span className="inner-edit"></span>
                    </div>

                    <div className="menu_notice_wrap2 outter-edit rel style1">
                        <div className="menu_footer_notice2">
                            {menu.footer_notice2}
                            <span className="inner-edit"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AzulindaHalf;
