import React from "react";
import { MenuBar } from "../components/MenuBar";
const activeMenuBarItem = "preview";

const Preview = () => {
    return (
        <div className="text-center">
            <MenuBar activeMenuBarItem={activeMenuBarItem} />
            <div>Preview</div>
            <button> Save and Print</button>
        </div>
    );
};

export default Preview;