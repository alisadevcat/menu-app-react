import React, { useMemo } from "react";
import { ActionIcons } from "./ActionIcons";
import PropTypes from "prop-types";

export const Menu = ({ menu, showForms }) => {
    const options = useMemo(() => ({ type: "menu", item: menu }), [menu]);
    
    return (
        <div className="menuitem-editable">
            {showForms && <ActionIcons options={options} />}
            {menu.name && (
                <div className="menu-headline pt-1">
                    <h4>
                        <span>{menu.name}</span>
                    </h4>
                </div>
            )}
            {menu.title && (
                <div className="menu-subtitle pt-1">
                    <h4>
                        <span>{menu.title}</span>
                    </h4>
                </div>
            )}
            {menu.title2 && (
                <div className="menu-subtitle pt-1">
                    <h4>
                        <span>{menu.title2}</span>
                    </h4>
                </div>
            )}
            {menu.subtitle && (
                <div className="menu-subtitle pt-1">
                    <h4>
                        <span>{menu.subtitle}</span>
                    </h4>
                </div>
            )}
            {menu.subtitle2 && (
                <div className="menu-subtitle pt-1">
                    <h4>
                        <span>{menu.subtitle2}</span>
                    </h4>
                </div>
            )}
        </div>
    );
};

Menu.propTypes = {
    showForms: PropTypes.bool,
    menu: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        title2: PropTypes.string,
        subtitle: PropTypes.string,
        subtitle2: PropTypes.string,
    }),
};
