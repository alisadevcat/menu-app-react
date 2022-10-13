import React, { useState } from "react";
import StartMenuModal from "../components/Modals/StartMenuModal";

const ChooseMenu = (props) => {
    const [showModal, setShowModal] = useState(false);
    const title = props.title;
    
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

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
                            onClick={openModal}
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
            <StartMenuModal
                showModal={showModal}
                closeModal={closeModal}
                title={title}
            />
        </>
    );
};

export default ChooseMenu;
