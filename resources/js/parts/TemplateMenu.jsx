import React from "react";
import { useSelector } from "react-redux";

const TemplateMenu = () => {
    const menutype = useSelector((state) => state.menutypes.menutype);

    const imgPath = `../../../storage/app/public/images/MenuThumbnails/${menutype.shortname}.png`;

    return (
        <>
            <section id="selected-template" className="container">
                <div className="text-center">
                    <h2>TEMPLATE MENU</h2>
                    {menutype.name && (<h4>{menutype.name}</h4>)}
                    {imgPath && (<img src={imgPath} alt={menutype.shortname} />)}
                </div>
            </section>
        </>
    );
};

export default TemplateMenu;
