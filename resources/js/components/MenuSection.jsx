import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MenuItem } from "./MenuItem";
import { fetchItems } from "../store/reducers/menuitemsSlice";
import { ActionIcons } from "./ActionIcons";
import PropTypes from "prop-types";
import parse from "html-react-parser";

function getItemsById(arr, id) {
    return arr.reduce((acc, item) => {
        if (item[0].section_id === id) {
            acc = [...acc, ...item];
        }
        return acc;
    }, []);
}

export const MenuSection = ({ section, showForms }) => {
    const [menuitems, setMenuItems] = useState([]);
    const sections = useSelector((state) => state.menusections.sections);
    const menuItemsAll = useSelector((state) => state.menuitems.menuitems);
    const dispatch = useDispatch();
    const ids = sections.map((item) => item.id).join("-");
    const sectionClass = showForms ?  "menu-section menu-section_edit mt-1" : "menu-section_edit mt-1";

    const options = { type: "section", item: section };

    useEffect(() => {
        dispatch(fetchItems(ids));
    }, [dispatch]);

    useEffect(() => {
        if (menuItemsAll.length > 0) {
            setMenuItems(getItemsById(menuItemsAll, section.id));
        }
    }, [menuItemsAll]);

    return (
        <div className="section-editable">
            {showForms && <ActionIcons options={options} />}

            <div className={sectionClass}>
                <div className="section-title">
                    {parse(`<h3>${section.title}</h3>`)}
                </div>
                <div className="section-subtitle,">
                    {parse(`<h3>${section.subtitle}</h3>`)}
                </div>
                <div className="section-price">
                    {parse(`<h3>${section.price}</h3>`)}
                </div>

                {menuitems &&
                    menuitems.map((item) => (
                        <MenuItem
                            key={item.id}
                            menuItem={item}
                            fieldOrder={section.field_order}
                            showForms={showForms}
                        />
                    ))}
            </div>
        </div>
    );
};

MenuSection.propTypes = {
    section: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        price: PropTypes.string,
        field_order: PropTypes.string
    }),
    showForms: PropTypes.bool
};
