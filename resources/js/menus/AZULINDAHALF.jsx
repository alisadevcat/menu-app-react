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
                        <div className="print-box">
                            <div className="print-outter">
                                <div className="print-lines">
                                    <div className="print-inner">
                                        <div className="menu-headline pt-1">
                                            <h3>
                                                Menu Title:
                                                <span>{menu.name}</span>
                                            </h3>
                                        </div>
                                        <div className="menu-subtitle pt-1">
                                            <h3>
                                                Menu Title 2:
                                                <span>{menu.title}</span>
                                            </h3>
                                        </div>
                                        <div className="menu-type-name pt-1">
                                            <h3>
                                                Menu Type:
                                                <span>{menu_type.name}</span>
                                            </h3>
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
                </div>
            </div>

            <div className="container footer-notices">
                <div className="footer-inner">
                    <div className="footer-inner__icons">
                        <ul className="footer-icons">
                            <li>
                                <FontAwesomeIcon icon="apple-alt" />
                                VEGETARIAN *
                            </li>
                            <li>
                                <FontAwesomeIcon icon="bread-slice" />{" "}
                                Gluten-free
                            </li>
                        </ul>
                    </div>
                    <div>
                        {menu.footer_notice && (
                            <div className="footer-inner__notice">
                                <div className="footer_notice">
                                    {menu.footer_notice}
                                </div>
                            </div>
                        )}

                        {menu.footer_notice2 && (
                            <div className="footer-inner__notice">
                                <div className="footer_notice2">
                                    {menu.footer_notice2}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AzulindaHalf;
