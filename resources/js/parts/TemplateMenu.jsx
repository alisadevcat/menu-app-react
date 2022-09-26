import React from "react";

const TemplateMenu = (props) => {
    const { title, shortname } = props.templateData;
    const img_path = `/storage/images/MenuThumbnails/${shortname}.png`;

    return (
        <>
            <section id ="selected-template" className="container">
                <div className="text-center">
                    <h2>TEMPLATE MENU</h2>
                    <h4>{title}</h4>
                    <img src={img_path} alt={shortname} />
                </div>
            </section>
        </>
    );
};

export default TemplateMenu;
