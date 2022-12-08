import React from "react";
import { ActionIcons } from "./ActionIcons";

export const MenuItem = ({ menuItem, fieldOrder }) => {
    const options = { type: "menuitem", item: menuItem };
    // console.log(menuItem);
    return (
        <div className="menuitem-editable">
                <ActionIcons options={options}/>

            <div className="pt-1">
                <div className="menuitem__title">
                    <p>{menuItem.title}</p>
                </div>
                <div className="menuitem__subtitle">
                    <p>{menuItem.subtitle}</p>
                </div>
                <div className="menuitem__price">
                    <p>{menuItem.price}</p>
                </div>
                <div className="menuitem__modifier">
                    <p>{menuItem.modifier}</p>
                </div>
                <div className="menuitem__mod_text">
                    <p>{menuItem.mod_text}</p>
                </div>
                <div className="menuitem__notice">
                    <p>{menuItem.notice}</p>
                </div>
            </div>
        </div>
    );
};
