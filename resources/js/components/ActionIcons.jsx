import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../components/Modals/Modal";
import { SectionEditForm } from "../components/Forms/SectionEditForm";
import { MenuItemEditForm } from "../components/Forms/MenuItemEditForm";

export const ActionIcons = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

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

            {(options.type === 'section') ? (
                <Modal
                    modalClasses="section-modal"
                    handleClose={handleClose}
                    isOpen={isOpen}
                    content={
                        <SectionEditForm
                            section={options.item}
                            handleClose={handleClose}
                        />
                    }
                />
            ) : (
                <Modal
                    modalClasses="menuitem-modal"
                    handleClose={handleClose}
                    isOpen={isOpen}
                    content={
                        <MenuItemEditForm
                            item={options.item}
                            handleClose={handleClose}
                        />
                    }
                />
            )}
        </div>
    );
};
