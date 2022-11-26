import React, { useEffect } from "react";
import ReactPortal from "../../utils/ReactPortal";

// Keyboard focus should be moved inside of the modal and restored to the previous activeElement when the modal is closed
// Keyboard focus should be trapped inside of the modal, so the user does not accidentally tab outside of the modal (a.k.a. “escaping the modal”)
// Screen readers should also be trapped inside of the modal to prevent accidentally escaping

const Modal = ({ content, footer, isOpen, handleClose }) => {
    //On a keydown event, we’ll invoke handleClose if the Escape key was pressed:

    useEffect(() => {
        const closeOnEscapeKey = (e) =>
            e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal">
            <div className="modal-backdrop">
                <div className="modal">
                    <div className="modal-header">
                        <div className="dialog-header">
                            <button
                                type="button"
                                className="btn-close"
                                onClick={handleClose}
                            >
                                x
                            </button>
                        </div>
                    </div>
                    <div className="modal-body">{content}</div>
                    <div className="modal-footer">{footer}</div>
                </div>
            </div>
        </ReactPortal>
    );
};

export default Modal;
