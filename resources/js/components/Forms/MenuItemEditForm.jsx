import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMenuItems } from "../../store/reducers/menuitemsSlice";

const getStyles = (styles) => {
    return styles.split(",");
};

export const MenuItemEditForm = ({ item, handleClose }) => {
    const dispatch = useDispatch();
    const [menuItem, setMenuItem] = useState(item);
    const styles = getStyles(menuItem.style);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMenuItem(menuItem);
        dispatch(updateMenuItems(menuItem));
        handleClose();
    };

    const handleTitleInput = (event) => {
        setMenuItem({ ...menuItem, title: event.target.value.trim() });
    };
    const handleSubtitleInput = (event) => {
        setMenuItem({ ...menuItem, subtitle: event.target.value.trim() });
    };
    const handlePriceInput = (event) => {
        setMenuItem({ ...menuItem, price: event.target.value.trim() });
    };
    const handleModifierInput = (event) => {
        setMenuItem({ ...menuItem, modifier: event.target.value.trim() });
    };
    const handleModTextInput = (event) => {
        setMenuItem({ ...menuItem, mod_text: event.target.value.trim() });
    };
    const handleNoticeInput = (event) => {
        setMenuItem({ ...menuItem, notice: event.target.value.trim() });
    };
    const handleStyleChange = (event)=>{
        setMenuItem({ ...menuItem, style: event.target.value.trim() });
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
                            name="menuitem-title"
                            className="form-control p-1"
                            value={menuItem.title}
                            onChange={handleTitleInput}
                        />
                    </div>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Subtitle</label>
                        <input
                            type="text"
                            name="menuitem-subtitle"
                            className="form-control p-1"
                            value={menuItem.subtitle}
                            onChange={handleSubtitleInput}
                        />
                    </div>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Price</label>
                        <input
                            type="text"
                            name="menuitem-price"
                            className="form-control p-1"
                            value={menuItem.price}
                            onChange={handlePriceInput}
                        />
                    </div>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Modifier</label>
                        <input
                            type="text"
                            name="menuitem-modifier"
                            className="form-control p-1"
                            value={menuItem.modifier}
                            onChange={handleModifierInput}
                        />
                    </div>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Modifier text</label>
                        <input
                            type="text"
                            name="menuitem-mod_text"
                            className="form-control p-1"
                            value={menuItem.mod_text}
                            onChange={handleModTextInput}
                        />
                    </div>
                    <div className="form-group mt-1 mb-1">
                        <label className="control-label">Notice</label>
                        <input
                            type="text"
                            name="menuitem-notice"
                            className="form-control p-1"
                            value={menuItem.notice}
                            onChange={handleNoticeInput}
                        />
                    </div>
                    <select name="style" id="style" onChange={handleStyleChange}>
                         <option disabled value="default" selected="selected">Style</option>
                        {styles && styles.map((item) => 
                            (<option value={item} key={item}>{item}</option>)
                        )}
                    </select>

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
