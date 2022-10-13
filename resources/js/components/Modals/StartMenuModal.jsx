import { React, useState } from "react";
import validateMenuName from "../../utils/Validation";
import { useNavigate } from "react-router-dom";
import { addMenu } from "../../store/reducers/menusSlice";
import { useDispatch } from "react-redux";

const StartMenuModal = ({ title, closeModal, showModal }) => {
    const [menuName, setMenuName] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const menuTypeId = localStorage.getItem("menu_type_id");
    const branchSlug = localStorage.getItem("branch_slug");
    const shortnameSlug = localStorage.getItem("menu_type_shortname");

    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = validateMenuName(menuName, 255);

        if (validationErrors.length > 0) {
            setErrors([...errors, ...validationErrors]);
        }

        const menu_object = {
            type_id: menuTypeId,
            menu_name: menuName,
            user_id: 1,
        };

        dispatch(addMenu(menu_object));

        setTimeout(() => {
            navigate(`/api/menus/${branchSlug}/${shortnameSlug}`);
        }, 2000);
    };

    const handleInput = (event) => {
        setErrors([]);
        setMenuName(event.target.value.trim());
    };

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
                            <h2 className="mt-1 mb-1">
                                Confirm Meal Period And Name
                            </h2>
                            <label className="control-label">Type</label>
                            {title && <div className="bg-light-gray">{title}</div>}
                            <form onSubmit={handleSubmit}>
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

                                    {errors &&
                                        errors.map((error) => (
                                            <span key={error}>{error}</span>
                                        ))}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default StartMenuModal;
