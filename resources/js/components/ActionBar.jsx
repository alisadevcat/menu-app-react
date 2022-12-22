import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ApiFetchData from "../utils/ApiFetchData";
import { updateMenu } from "../store/reducers/menusSlice";
import { addMenuSections } from "../store/reducers/menusectionsSlice";
// import { addMenuItems } from "../store/reducers/menuitemsSlice";

export const ActionBar = ({ button }) => {
    const navigate = useNavigate();
    const branch = useSelector((state) => state.branches.branch.slug);
    const [menu, setMenu] = useState(useSelector((state) => state.menus.menu));
    const sections = useSelector((state) => state.menusections.sections);
    // const menuItemsAll = useSelector((state) => state.menuitems.menuitems);
    const menuTypeTemplate = useSelector(
        (state) => state.menutypes.menutype.template
    );

    const review_url = `/menus/${branch}/${menuTypeTemplate}/preview`;
    const print_url = "/";

    const dispatchThenRoute = () => {
        ApiFetchData.menus("addMenu", { menu: menu })
            .then((response) => {
                updateMenu(response.menu);
                const menuSections = [...sections].map((item) => {
                    return { ...item, menu_id: response.menu.id };
                });
                const menuObject = {
                    menu: response.menu,
                    sections: menuSections,
                };
                return menuObject;
            })
            .then((menuObject) => {
                ApiFetchData.menusections("addMenuSections", {
                    sections: menuObject.sections,
                }).then((response) => {
                    addMenuSections(response.sections);
                    return { ...menuObject, sections: response.sections };
                });
            });

        setTimeout(navigate("/menus/pdf"), 10000);
    };

    // () => {
    //     addNewMenu.then((response) => {console.log(response.menu);});
    //     setTimeout(navigate("/menus/pdf"), 5000);
    // };
    //console.log(menu, "menu");

    return (
        <div className="actionbar mt-2">
            <ul className="actionbar__list">
                <li>
                    <div
                        className="btn btn-action"
                        onClick={() => navigate(-1)}
                    >
                        <span className="fa fa-arrow-circle-o-left"></span>
                        &nbsp;&nbsp;&nbsp;Back
                    </div>
                </li>
                {button == "editor" && (
                    <li>
                        <Link to={review_url} className="btn btn-action">
                            Preview&nbsp;&nbsp;&nbsp;
                            <span className="fa fa-arrow-circle-o-right"></span>
                        </Link>
                    </li>
                )}
                {button == "preview" && (
                    <li>
                        <div
                            to={print_url}
                            className="btn btn-action"
                            onClick={dispatchThenRoute}
                        >
                            Save and Print&nbsp;&nbsp;&nbsp;
                            <span className="fa fa-arrow-circle-o-right"></span>
                        </div>
                    </li>
                )}
                {button == "start" && (
                    <li>
                        <div className="btn btn-action">
                            Start&nbsp;&nbsp;&nbsp;
                            <span className="fa fa-arrow-circle-o-right"></span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

ActionBar.propTypes = {
    button: PropTypes.string,
};
