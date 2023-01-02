import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const FinalPage = () => {
    const menu = useSelector((state) => state.menus.menu);
    const sections = useSelector((state) => state.menusections.sections);
    const menuItemsAll = useSelector((state) => state.menuitems.menuitems);

    return (
        <div className="container">
            <p>Final page</p>
            <div className="btn">
                Download PDF
            </div>
            <h1>Generated PDF</h1>
            <p>As you can see you can scroll without issues and select text.</p>
        </div>
    );
};

export default FinalPage;
