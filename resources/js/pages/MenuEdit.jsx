import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ActionBar from "../components/ActionBar";

const MenuEdit = () => {
const menu_template = localStorage.getItem('menu_template_name');
const ComponentName = menu_template.toUpperCase();
console.log( ComponentName );

    return (
        <>
            <Breadcrumbs />
            <div className="editBlock container">
                <h4>EDIT MENU</h4>
                <p>
                    Click to edit the menu title and edit sections, use the
                    icons to edit, move items, and delete.
                    <br />
                    To edit the header or footer, hover over the item for
                    options.
                </p>
            </div>

            <ActionBar />
        </>
    );
};

export default MenuEdit;
