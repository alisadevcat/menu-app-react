import React from "react";
import { useSelector } from "react-redux";

const FinalPage = () => {
    const menu = useSelector((state) => state.menus.menu);
    const sections = useSelector((state) => state.menusections.sections);
    
    return (
        <div>
            <p>FinalPage {menu.id}</p>
            {sections.map((item) => {
                <p key={item.id}>{item.id}</p>;
            })}
        </div>
    );
};

export default FinalPage;
