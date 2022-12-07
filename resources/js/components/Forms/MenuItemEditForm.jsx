import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMenuItems } from "../../store/reducers/menuitemsSlice";

export const MenuItemEditForm = ({ item, handleClose }) => {
    const dispatch = useDispatch();
    const [menuItem, setMenuItem] = useState(item);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (event) => {
      event.preventDefault();
      setMenuItem({ menuItem });
      dispatch(updateMenuItems(menuItem));
      handleClose();
  };
console.log(menuItem, 'menuitem');

    const handleTitleInput = (event) => {
        setErrors([]);
        setMenuItem({ ...menuItem, title: event.target.value.trim() });
    };
    const handleSubtitleInput = (event) => {
        setErrors([]);
        setMenuItem({ ...menuItem, subtitle: event.target.value.trim() });
    };
    const handlePriceInput = (event) => {
        setErrors([]);
        setMenuItem({ ...menuItem, price: event.target.value.trim() });
    };

    const handleModifierInput = (event) => {
        setErrors([]);
        setMenuItem({ ...menuItem, modifier: event.target.value.trim() });
    };
    const handleModTextInput = (event) => {
        setErrors([]);
        setMenuItem({ ...menuItem, mod_text: event.target.value.trim() });
    };
    const handleNoticeInput = (event) => {
        setErrors([]);
        setMenuItem({ ...menuItem, notice: event.target.value.trim() });
    };

    return (
        <div>
            <h4>MenuItemEditForm</h4>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Title</label>
                        <input
                            type="text"
                            name="menu-name"
                            className="form-control p-1"
                            value={menuItem.title}
                            onChange={handleTitleInput}
                        />
                    </div>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Subtitle</label>
                        <input
                            type="text"
                            name="menu-name"
                            className="form-control p-1"
                            value={menuItem.subtitle}
                            onChange={handleSubtitleInput}
                        />
                    </div>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Price</label>
                        <input
                            type="text"
                            name="menu-name"
                            className="form-control p-1"
                            value={menuItem.price}
                            onChange={handlePriceInput}
                        />
                    </div>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Modifier</label>
                        <input
                            type="text"
                            name="menu-name"
                            className="form-control p-1"
                            value={menuItem.modifier}
                            onChange={handleModifierInput}
                        />
                    </div>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Modifier text</label>
                        <input
                            type="text"
                            name="menu-name"
                            className="form-control p-1"
                            value={menuItem.mod_text}
                            onChange={handleModTextInput}
                        />
                    </div>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Notice</label>
                        <input
                            type="text"
                            name="menu-name"
                            className="form-control p-1"
                            value={menuItem.notice}
                            onChange={handleNoticeInput}
                        />
                    </div>

                    <div className="error"></div>

                    {errors &&
                        errors.map((error) => <span key={error}>{error}</span>)}

                    <div className="row justify-center align-center">
                        <button
                            type="submit"
                            className="btn m-2"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                        <button className="btn btn-primary ml-1">Ok</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
