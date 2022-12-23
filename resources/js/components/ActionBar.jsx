import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ApiFetchData from "../utils/ApiFetchData";
import { updateMenu } from "../store/reducers/menusSlice";
import { addMenuSections } from "../store/reducers/menusectionsSlice";
// import { addMenuItems } from "../store/reducers/menuitemsSlice";

const updateSectionIdsinItems = (sections, items) => {
    let result = [];
    sections.forEach((s, i, arr1) => {
        result = items.map((j, index, arr) =>
            arr[i].map((item) => ({ ...item, section_id: arr1[i].id }))
        );
    });

    return result;
};

export const ActionBar = ({ button }) => {
    const navigate = useNavigate();
    const menu = useSelector((state) => state.menus.menu);
    const branch = useSelector((state) => state.branches.branch.slug);
    const sections = useSelector((state) => state.menusections.sections);
    const menuItemsAll = useSelector((state) => state.menuitems.menuitems);
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

                return {
                    menu: response.menu,
                    sections: menuSections,
                };
            })
            .then((menuObject) => {
                ApiFetchData.menusections("addMenuSections", {
                    sections: menuObject.sections,
                })
                    .then((response) => {
                        addMenuSections(response.sections);

                        const items = updateSectionIdsinItems(
                            response.sections,
                            menuItemsAll
                        );

                        return {
                            ...menuObject,
                            sections: response.sections,
                            sectionitems: items,
                        };
                    })
                    .then((menuObject) => {
                        console.log(menuObject, "menuObject");
                    })
                    .then(() => {
                        setTimeout(navigate("/menus/pdf"), 10000);
                    });
            });
    };

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
