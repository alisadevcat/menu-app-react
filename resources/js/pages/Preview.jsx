import React, { useState, useEffect }from "react";
import { MenuBar } from "../components/MenuBar";
import { useNavigate, useParams } from "react-router-dom";
import { getComponent } from "../factories/components";
const activeMenuBarItem = "preview";

const Preview = () => {
const navigate = useNavigate();
const [TemplateComponent, setTemplateComponent] = useState();
let { menu_type_template } = useParams();

useEffect(() => {
    setTemplateComponent(getComponent(menu_type_template, false));
}, []);

const dispatchThenRoute = () => {
    navigate("/print/");
};
    return (
        <div className="text-center">
            <MenuBar activeMenuBarItem={activeMenuBarItem} />
            <div>Preview</div>
            {TemplateComponent}
            <button onClick={dispatchThenRoute}> Save and Print</button>
        </div>
    );
};

export default Preview;