import React from "react";

const TemplateMenu = (props) => {
    const { title, shortname } = props.templateData;
    const img_path = `storage/images/MenuThumbnails/${shortname}.png`;

    return (
        <>
            <h2>TEMPLATE MENU</h2>
            <p>{title}</p>
            <img src={img_path} alt={shortname} />
        </>
    );
};

export default TemplateMenu;
