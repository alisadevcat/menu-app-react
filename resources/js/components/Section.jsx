import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../store/reducers/menuitemsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem } from "../components/MenuItem";
import parse from "html-react-parser";

export const Section = ({ section }) => {
    const menuItems = useSelector((state) => state.menuitems.menuitems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItems(section.id));
    }, []);

    return (
        <div>
            <div className="row justify-flex-end">
                <div>
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
                <div>
                    {parse(`<div><h3>${section.title}</h3></div>`)}
                    {parse(`<div><h4>${section.subtitle}</h4></div>`)}
                </div>

                {menuItems &&
                    menuItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            menuItem={item}
                            field_order={section.field_order}
                        />
                    ))}
            </div>
        </div>
    );
};
