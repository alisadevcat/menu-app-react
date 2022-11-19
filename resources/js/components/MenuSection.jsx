import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem } from "./MenuItem";
import { fetchItems } from "../store/reducers/menuitemsSlice";
import parse from "html-react-parser";

function getItemsById(arr, id) {
    return arr.reduce((acc, item, index) => {
        if (item[index].section_id == id) {
            acc = [...acc, ...item]
        }
        return acc;
    }, []);
}

export const MenuSection = ({ section }) => {
    const menuItems = useSelector((state) => state.menuitems.menuitems);
    const menuitems = getItemsById(menuItems, section.id);
    const sections = useSelector((state) => state.menusections.sections);
    const dispatch = useDispatch();
    let ids = sections.map((item) => item.id).join("-");

    useEffect(() => {
        dispatch(fetchItems(ids));
    }, []);

    console.log(menuitems);

    return (
        <div className="section-editable">
            <div className="editable-buttons">
                <div className="menu-section__edit">
                    <span>
                        <FontAwesomeIcon
                            icon="edit"
                            onClick="showModal(section)"
                        />
                    </span>
                    <span>
                        <FontAwesomeIcon icon="copy" />
                    </span>
                    <span>
                        <FontAwesomeIcon icon="long-arrow-down" />
                    </span>
                    <span>
                        <FontAwesomeIcon icon="trash-alt" />
                    </span>
                </div>
            </div>
            <div className="menu-section mt-1">
                <div className="menu-section__data">
                    {parse(`<div><h3>${section.title}</h3></div>`)}
                    {parse(`<div><h4>${section.subtitle}</h4></div>`)}
                </div>

                {menuitems &&
                    menuitems.map((item) => (
                        <MenuItem
                            key={item.id}
                            menuItem={item}
                            fieldOrder={section.field_order}
                        />
                    ))}
            </div>
        </div>
    );
};
