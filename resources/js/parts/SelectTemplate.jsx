import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuType } from "../store/reducers/menutypesSlice";

export const SelectTemplate = () => {
    const dispatch = useDispatch();
    const menutypes = useSelector((state) => state.menutypes.menutypes);

    const handleSelectChange = (event) => {
        const type = menutypes.find(
            (item) => item.template === event.target.value
        );
        dispatch(setMenuType(type));
    };

    return (
        <section id="selected-meal" className="container">
            <label className="control-label">Select Meal Period</label>
            <select
                id="menu_type"
                name="menu_type"
                className="form-control mt-2"
                onChange={handleSelectChange}
            >
                <option disabled value="default" selected="selected">
                    Select Template
                </option>
                {menutypes &&
                    menutypes.map((menutype) => (
                        <option value={menutype.template} key={menutype.id}>
                            {menutype.name}
                        </option>
                    ))}
            </select>
        </section>
    );
};
