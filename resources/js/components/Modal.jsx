import React from "react";

const Modal = (props) => {
    const showModal = props.showModal;
    const closeModal = props.closeModal;
    console.log(showModal);
    if (showModal) {
        return (
            <>
                <div class="modal-backdrop">
                    <div class="modal">
                        <div class="modal-header">
                            <div class="dialog-header">
                                <button
                                    type="button"
                                    class="btn-close"
                                    onClick={closeModal}
                                >
                                    x
                                </button>
                            </div>
                        </div>
                        <div className="modal-body">Modal Body</div>
                    </div>
                </div>
            </>
        );
    }
};

export default Modal;
