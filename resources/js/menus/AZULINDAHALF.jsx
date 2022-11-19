import React from "react";
import { useSelector} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuSection } from "../components/MenuSection";


const AzulindaHalf = () => {
    const menu_type = useSelector((state) => state.menutypes.menutype);
    const menu = useSelector((state) => state.menus.menu);
    const sections = useSelector((state) => state.menusections.sections);

    const leftsections = sections.reduce((acc, item) => {
        if (item.side === "left") {
            acc.push(item);
        }
        return acc;
    }, []);

    const rightsections = sections.reduce((acc, item) => {
        if (item.side === "right") {
            acc.push(item);
        }
        return acc;
    }, []);

   

   // console.log(sections);

    return (
        <>
            <div className="container text-center">
                <div className="container-fluid">
                    <div className="print-box">
                        <div className="print-outter">
                            <div className="print-lines">
                                <div className="print-inner">
                                    {menu.name && (
                                        <div className="menu-headline pt-1">
                                            <h3>
                                                Menu Title:
                                                <span>{menu.name}</span>
                                            </h3>
                                        </div>
                                    )}
                                    {menu.title && (
                                        <div className="menu-subtitle pt-1">
                                            <h3>
                                                Menu Title:
                                                <span>{menu.title}</span>
                                            </h3>
                                        </div>
                                    )}
                                    {menu.subtitle && (
                                        <div className="menu-subtitle pt-1">
                                            <h3>
                                                Menu Subtitle:
                                                <span>{menu.subtitle}</span>
                                            </h3>
                                        </div>
                                    )}
                                    {menu_type.name && (
                                        <div className="menu-type-name pt-1">
                                            <h3>
                                                Menu Type:
                                                <span>{menu_type.name}</span>
                                            </h3>
                                        </div>
                                    )}
                                    <div className="row">
                                        <div className="sections_col">
                                            {leftsections &&
                                                leftsections.map((section) => (
                                                    <MenuSection
                                                        section={section}
                                                        key={section.id}
                                                    />
                                                ))}
                                        </div>
                                        <div className="sections_col">
                                            {rightsections &&
                                                rightsections.map((section) => (
                                                    <MenuSection
                                                        section={section}
                                                        key={section.id}
                                                    />
                                                ))}
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
        </>
    );
};

export default AzulindaHalf;
