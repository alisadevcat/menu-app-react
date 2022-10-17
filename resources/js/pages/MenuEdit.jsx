import { React, useEffect, useState } from "react";
import { MenuBar } from "../components/MenuBar";
import { ActionBar } from "../components/ActionBar";
import { useSelector } from "react-redux";
import { getComponent } from "../factories/components";
const activeMenuBarItem = "editor";

const MenuEdit = () => {
    const menuObject = useSelector((state) => state.menus.menu);
    const menutype = useSelector((state) => state.menutypes.menutype);
    const menuTemplate = menutype.template;
    const [TemplateComponent, setTemplateComponent] = useState();

    useEffect(() => {
        setTemplateComponent(getComponent(menuTemplate, menuObject));
    }, []);

    return (
        <>
            <MenuBar activeMenuBarItem={activeMenuBarItem} />
            <div className="editBlock container text-center">
                <h4>EDIT MENU</h4>
                <p>
                    Click to edit the menu title and edit sections, use the
                    icons to edit, move items, and delete.
                    <br />
                    To edit the header or footer, hover over the item for
                    options.
                </p>
            </div>

            {TemplateComponent}

            <ActionBar />
        </>
    );
};

export default MenuEdit;
