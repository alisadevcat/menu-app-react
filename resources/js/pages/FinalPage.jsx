import React from "react";
import { useEffect, useSelector } from "react-redux";
import Pdf from 'react-to-pdf';

const FinalPage = () => {
    const menu = useSelector((state) => state.menus.menu);
    const sections = useSelector((state) => state.menusections.sections);
    const menuItemsAll = useSelector((state) => state.menuitems.menuitems);

    return (
        <div className="container">
            <p>Final page</p>
            <button className="btn">
                Download PDF
            </button>
            <h1>Generated PDF</h1>
            <p>As you can see you can scroll without issues and select text.</p>
        </div>
    );
};

export default FinalPage;
