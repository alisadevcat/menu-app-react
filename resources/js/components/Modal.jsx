import { React, useState } from "react";
import validateMenuName from "../utils/Validation";

const Modal = (props) => {
    const showModal = props.showModal;
    const closeModal = props.closeModal;
    const title = props.title;
    const [menuName, setMenuName] = useState("");
    const [errors, setErrors] = useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(validateMenuName(menuName, 3));
    };
    const handleInput =(event)=>{
        setMenuName(event.target.value.trim());
    }
    //Validation
    const CheckIfEmpty =(value)=>{};
    const CheckLettersCount =()=>{};

    console.log(showModal);
    if (showModal) {
        return (
            <>
                <div className="modal-backdrop">
                    <div className="modal menu-save">
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
                            <h2 className="mt-1 mb-1">Confirm Meal Period And Name</h2>
                            <label className="control-label">Type</label>
                            <div className="bg-light-gray">{title}</div>
                            <form onSubmit={handleSubmit} >
                                <div className="form-group mt-1 mb-1">
                                    <label className="control-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="menu-name"
                                        className="form-control p-1"
                                        value={menuName}
                                        onChange={handleInput}
                                    />
                                    <div className="error"></div>
                                    <button type="submit" className="btn m-2">
                                        Get Started
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Modal;