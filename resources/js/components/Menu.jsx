import React from "react";
import { ActionIcons } from "./ActionIcons";

export const Menu = ({ menu, menu_type }) => {
    const options = { type: "menu", item: menu };
    return (
        <div className="menuitem-editable">
            <ActionIcons options={options} />
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
            {menu.title2 && (
                <div className="menu-subtitle pt-1">
                    <h3>
                        Menu Title 2:
                        <span>{menu.title2}</span>
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
              {menu.subtitle2 && (
                <div className="menu-subtitle pt-1">
                    <h3>
                        Menu Subtitle2:
                        <span>{menu.subtitle2}</span>
                    </h3>
                </div>
            )}
            {/* {menu_type.name && (
                <div className="menu-type-name pt-1">
                    <h3>
                        Menu Type:
                        <span>{menu_type.name}</span>
                    </h3>
                </div>
            )} */}
        </div>
    );
};
