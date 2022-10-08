import React from "react";

const TemplateMenu = (props) => {
    const { title, shortname } = props.templateData;
    const imgPath = `/storage/images/MenuThumbnails/${shortname}.png`;

    return (
        <>
            <section id="selected-template" className="container">
                <div className="text-center">
                    <h2>TEMPLATE MENU</h2>
                    {title && <h4>{title}</h4>}
                    {imgPath && <img src={imgPath} alt={shortname} />}
                </div>
            </section>
        </>
    );
};

export default TemplateMenu;
