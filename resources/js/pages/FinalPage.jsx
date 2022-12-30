import React from "react";
import { useSelector } from "react-redux";

const FinalPage = () => {
    const menu = useSelector((state) => state.menus.menu);
    const sections = useSelector((state) => state.menusections.sections);
    const menuItemsAll = useSelector((state) => state.menuitems.menuitems);
    
    return (
        <div className="container">
            <p>{menu.name}{menu.id}</p>
            {sections && sections.map((item) => (<p key={item.id}>{item.id}</p>))}
            {menuItemsAll && menuItemsAll.map((item) => (<p key={item.id}>{item.id}</p>))}
        </div>
    );
};

export default FinalPage;
