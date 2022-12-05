import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MenuItem } from "./MenuItem";
import { fetchItems } from "../store/reducers/menuitemsSlice";
import { ActionIcons } from "./ActionIcons";
import parse from "html-react-parser";

function getItemsById(arr, id) {
    return arr.reduce((acc, item) => {
        if (item[0].section_id === id) {
            acc = [...acc, ...item];
        }
        return acc;
    }, []);
}

export const MenuSection = ({ section }) => {
    const [menuitems, setMenuItems] = useState([]);
    const sections = useSelector((state) => state.menusections.sections);
    const menuItemsAll = useSelector((state) => state.menuitems.menuitems);
    const dispatch = useDispatch();
    const ids = sections.map((item) => item.id).join("-");
   
    const options = { type: "section", item: section };

    useEffect(() => {
        dispatch(fetchItems(ids));
    }, [sections]);

    useEffect(() => {
        if (menuItemsAll.length > 0) {
            setMenuItems(getItemsById(menuItemsAll, section.id));
        }
    }, [menuItemsAll]);


    return (
        <div className="section-editable">
              <ActionIcons options={options}/>

            <div className="menu-section mt-1">
                <div className="menu-section__data">
                    {parse(`<div><h3>${section.title}</h3></div>`)}
                    {parse(`<div><h4>${section.subtitle}</h4></div>`)}
                    {parse(`<div><h4>${section.price}</h4></div>`)}
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
