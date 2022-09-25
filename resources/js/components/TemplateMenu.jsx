import React from "react";

export const TemplateMenu = (props) => {
    const { template } = props.template;
    console.log(template);
    const img_path = `storage/images/MenuThumbnails/${template}`;

    return (
        <>
            <h2>TEMPLATE MENU</h2>
            <p>{template}</p>
            <img src={img_path} alt={template} />
        </>
    );
};

