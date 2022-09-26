import React from "react";

const Modal = (props) => {
    const showModal = props.showModal;
    const closeModal = props.closeModal;
    const title = props.title;

    console.log(showModal);
    if (showModal) {
        return (
            <>
                <div className="modal-backdrop">
                    <div className="modal">
                        <div className="modal-header">
                            <div className="dialog-header">
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeModal}
                                >
                                    x
                                </button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h2>Confirm Meal Period And Name</h2>
                            <label className="control-label">Type</label>
                            <div className="bg-light-gray">{title}</div>
                            <div className="form-group">
                                <label className="control-label">Name</label>
                                <input
                                    type="text"
                                    name="menu-name"
                                    className="form-control"
                                />
                                <button type="submit">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Modal;
