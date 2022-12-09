import React, { useState } from "react";
import MenuSaveForm from "../components/Forms/MenuSaveForm";
import Modal from "../components/Modals/Modal";

const ChooseMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section id="choose-menu" className="container">
                <h1 className="text-center">CHOOSE HOW TO BUILD YOUR MENU</h1>
                <div className="choose-menu__block">
                    <div className="choose-menu__block-item">
                        <label className="control-label text-left">
                            Create From Template
                        </label>
                        <button
                            className="btn btn-default btn-start mt-2"
                            onClick={() => setIsOpen(true)}
                        >
                            Start
                        </button>
                    </div>
                    <div className="choose-menu__block-item text-left">
                        <label className="control-label">
                            Create From Saved Design
                        </label>
                        <select
                            name="saved-menu-template"
                            id="saved-template"
                            className="form-control mt-2"
                        >
                            <option
                                disabled
                                value="default"
                                selected="selected"
                            >
                                Select One
                            </option>
                        </select>
                    </div>
                </div>
            </section>

            <Modal modalClasses="menu-save" handleClose={() => setIsOpen(false)} isOpen={isOpen} content={<MenuSaveForm handleClose={() => setIsOpen(false)}/>}/>
        </>
    );
};

export default ChooseMenu;
