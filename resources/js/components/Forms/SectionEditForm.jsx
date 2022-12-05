import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSections } from "../../store/reducers/menusectionsSlice";

export const SectionEditForm = ({ section, handleClose }) => {
    const [sectionItem, setSectionItem] = useState(section);
    const [errors, setErrors] = useState([]);
    const menu = useSelector((state) => state.menus.menu);
    const sections = useSelector((state) => state.menusections.sections);
    const dispatch = useDispatch();

  console.log(sections, 'sections');
  console.log(sectionItem, 'section item');

    const handleSubmit = (event) => {
        event.preventDefault();
        // setSectionItem({ sectionItem, menu_id: menu.id });
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


// {
//     "id": 5,
//     "id_parent_section": 0,
//     "subtitle": "",
//     "title": "LAND &amp; SEA",
//     "price": "",
//     "style": "No_Style",
//     "side": "right",
//     "field_order": "title,price,icons,subtitle,modifier,mod_text",
//     "ordering": 4,
//     "menu_type_id": 1,
//     "menu_id": 1,
//     "created_at": "2021-10-28T15:17:36.000000Z",
//     "updated_at": null
// }

//