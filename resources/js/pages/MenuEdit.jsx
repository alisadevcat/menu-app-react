import { React, useEffect, useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ActionBar } from "../components/ActionBar";
import { useSelector } from "react-redux";
import AZULINDAHALF from "../menus/AZULINDAHALF";

const MenuEdit = () => {
    const menuTemplate = localStorage.getItem("menu_template_name");
    const menuObject = useSelector((state) => state.menus.menu);
    const [TemplateComponent, setTemplateComponent] = useState();

    const getComponentName = (template, menu) => {
        switch (template) {
            case "azulindaHalf":
                return <AZULINDAHALF menu={menu}/>;
            default:
                return <div></div>;
        }
    };

    useEffect(() => {
        setTemplateComponent(getComponentName(menuTemplate, menuObject));
    }, []);


    return (
        <>
            <Breadcrumbs />
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
