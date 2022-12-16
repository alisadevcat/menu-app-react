import React from "react";
import { ActionIcons } from "./ActionIcons";

export const MenuItem = ({ menuItem, fieldOrder, showForms }) => {
    const options = { type: "menuitem", item: menuItem };
    return (
        <div className="menuitem-editable">
            {showForms && (<ActionIcons options={options}/>)}

            <div className="pt-1">
                <div className="item-title">
                    <p>{menuItem.title}</p>
                </div>
                <div className="item-subtitle">
                    <p>{menuItem.subtitle}</p>
                </div>
                <div className="item-price">
                    <p>{menuItem.price}</p>
                </div>
                <div className="item-modifier">
                    <p>{menuItem.modifier}</p>
                </div>
                <div className="item-mod_text">
                    <p>{menuItem.mod_text}</p>
                </div>
                <div className="item-notice">
                    <p>{menuItem.notice}</p>
                </div>
            </div>
        </div>
    );
};
