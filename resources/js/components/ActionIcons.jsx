import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../components/Modals/Modal";
import { SectionEditForm }from "../components/Forms/SectionEditForm";

export const ActionIcons = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [content,setContent ] = useState();
    // const [footer, setfooter] = useState();

    // useEffect(()=>{
    //     if (options.type == 'section') {
    //         setContent
    //     }
    // }, []);

    return (
        <div className="editable-buttons">
            <span className="editable-button" onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon icon="edit" />
            </span>
            <span className="editable-button">
                <FontAwesomeIcon icon="copy" />
            </span>
            <span className="editable-button">
                <FontAwesomeIcon icon="long-arrow-down" />
            </span>
            <span className="editable-button">
                <FontAwesomeIcon icon="trash-alt" />
            </span>
            <Modal modalClasses="section-modal" handleClose={() => setIsOpen(false)} isOpen={isOpen} content={<SectionEditForm section={options.item} handleClose={() => setIsOpen(false)}/>}/>
        </div>
    );
};
