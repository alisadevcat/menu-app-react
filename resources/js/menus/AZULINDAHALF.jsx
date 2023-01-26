import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuSection } from "../components/MenuSection";
import { Menu } from "../components/Menu";
import PropTypes from "prop-types";

const AzulindaHalf = ({ showForms }) => {
    const menu = useSelector((state) => state.menus.menu);
    const sections = useSelector((state) => state.menusections.sections);
    return (
        <>
            <div className="container text-center azulinda_half">
                <div className="container-fluid">
                    <div className="print-box">
                        <Menu menu={menu} showForms={showForms} />

                        <div className="print-outter">
                            <div className="print-lines">
                                <div className="print-inner">
                                    <div className="menu-logo"></div>

                                    {showForms ? (
                                        <div>
                                            {sections &&
                                                sections.map((section) => (
                                                    <MenuSection
                                                        section={section}
                                                        key={section.id}
                                                        showForms={showForms}
                                                    />
                                                ))}{" "}
                                        </div>
                                    ) : (
                                        <div className="row">
                                            <div className="sections_2col">
                                                {sections &&
                                                    sections.map((section) => (
                                                        <MenuSection
                                                            section={section}
                                                            key={section.id}
                                                            showForms={
                                                                showForms
                                                            }
                                                        />
                                                    ))}
                                            </div>
                                            <div className="sections_2col">
                                                {sections &&
                                                    sections.map((section) => (
                                                        <MenuSection
                                                            section={section}
                                                            key={section.id}
                                                            showForms={
                                                                showForms
                                                            }
                                                        />
                                                    ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="container footer-notices mt-1">
                                <div className="footer-inner">
                                    <div className="footer-inner__icons">
                                        <ul className="footer-icons">
                                            <li>
                                                <FontAwesomeIcon icon="apple-alt" />
                                                VEGETARIAN *
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon="bread-slice" />
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
AzulindaHalf.propTypes = {
    showForms : PropTypes.bool
  };
  
export default AzulindaHalf;
