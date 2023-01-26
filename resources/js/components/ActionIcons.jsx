import React, { useState } from "react";
import Modal from "../components/Modals/Modal";
import { SectionEditForm } from "../components/Forms/SectionEditForm";
import { MenuItemEditForm } from "../components/Forms/MenuItemEditForm";
import { MenuEditForm } from "../components/Forms/MenuEditForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeMenuItems } from "../store/reducers/menuitemsSlice";
import { removeSection } from "../store/reducers/menusectionsSlice";
import PropTypes from "prop-types";

export const ActionIcons = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    const deleteItem = () => {
        console.log(options.type);
        console.log(typeof(options.type));
        if (options.type === "section") {
            console.log("1");
            removeSection({ id: options.item.id });
        } else if (options.type === "menuitem") {
            console.log("2");
            removeMenuItems({ id: options.item.id });
        }
    };

    //menuitem
    //section

    const actionComponent = (type) => {
        switch (type) {
            case "menu":
                return (
                    <div className="pr-3">
                        <span
                            className="editable-button"
                            onClick={() => setIsOpen(true)}
                        >
                            <FontAwesomeIcon icon="edit" />
                        </span>
                        <Modal
                            modalClasses="menu-modal"
                            handleClose={handleClose}
                            isOpen={isOpen}
                            content={
                                <MenuEditForm
                                    item={options.item}
                                    handleClose={handleClose}
                                />
                            }
                        />
                    </div>
                );
            case "section":
                return (
                    <div className="editable-buttons section-buttons">
                        {options.item.id}
                        <span
                            className="editable-button"
                            onClick={() => setIsOpen(true)}
                        >
                            <FontAwesomeIcon icon="edit" />
                        </span>
                        <span className="editable-button">
                            <FontAwesomeIcon icon="copy" />
                        </span>
                        <span className="editable-button">
                            <FontAwesomeIcon icon="long-arrow-down" />
                        </span>
                        <span className="editable-button" onClick={deleteItem}>
                            <FontAwesomeIcon icon="trash-alt" />
                        </span>
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
                    </div>
                );
            case "menuitem":
                return (
                    <div className="editable-buttons item-buttons">
                        <span
                            className="editable-button"
                            onClick={() => setIsOpen(true)}
                        >
                            <FontAwesomeIcon icon="edit" />
                        </span>
                        <span className="editable-button">
                            <FontAwesomeIcon icon="copy" />
                        </span>
                        <span className="editable-button">
                            <FontAwesomeIcon icon="long-arrow-down" />
                        </span>
                        <span className="editable-button" onClick={deleteItem}>
                            <FontAwesomeIcon icon="trash-alt" />
                        </span>
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
                    </div>
                );
            default:
                return "foo";
        }
    };

    return <div>{actionComponent(options.type)}</div>;
};

ActionIcons.propTypes = {
    options: PropTypes.shape({
        type: PropTypes.string,
        item: PropTypes.objectOf(PropTypes.string),
    }),
};
