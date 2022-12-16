import React, { useState, useEffect }from "react";
import { MenuBar } from "../components/MenuBar";
import { useParams } from "react-router-dom";
import { getComponent } from "../factories/components";
import { ActionBar } from "../components/ActionBar";
const activeMenuBarItem = "preview";

const Preview = () => {

const [TemplateComponent, setTemplateComponent] = useState();
let { menu_type_template } = useParams();

useEffect(() => {
    setTemplateComponent(getComponent(menu_type_template, false));
}, []);

    return (
        <div className="text-center">
            <MenuBar activeMenuBarItem={activeMenuBarItem} />
            {TemplateComponent}
            <ActionBar button={activeMenuBarItem}/>
        </div>

    );
};

export default Preview;