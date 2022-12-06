import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSections } from "../../store/reducers/menusectionsSlice";

export const SectionEditForm = ({ section, handleClose }) => {
    const [sectionItem, setSectionItem] = useState(section);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSectionItem({ sectionItem });
        dispatch(updateSections(sectionItem));
        handleClose();
    };

    const handleTitleImput = (event) => {
        setErrors([]);
        setSectionItem({ ...sectionItem, title: event.target.value.trim() });
    };
    const handleSubtitleInput = (event) => {
        setErrors([]);
        setSectionItem({...sectionItem, subtitle: event.target.value.trim() });
    };
    const handlePriceInput = (event) => {
        setErrors([]);
        setSectionItem({ ...sectionItem, price: event.target.value.trim() });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label">Title</label>
                    <input
                        type="text"
                        name="menu-name"
                        className="form-control p-1"
                        value={sectionItem.title}
                        onChange={handleTitleImput}
                    />
                </div>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label">Subtitle</label>
                    <input
                        type="text"
                        name="menu-name"
                        className="form-control p-1"
                        value={sectionItem.subtitle}
                        onChange={handleSubtitleInput}
                    />
                </div>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label">Price</label>
                    <input
                        type="text"
                        name="menu-name"
                        className="form-control p-1"
                        value={sectionItem.price}
                        onChange={handlePriceInput}
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
    );
};