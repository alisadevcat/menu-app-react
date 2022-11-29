import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenutypesById } from "../store/reducers/menutypesSlice";
import { MenuBar } from "../components/MenuBar";
import ChooseMenu from "../parts/ChooseMenu";
import TemplateMenu from "../parts/TemplateMenu";
import { SelectTemplate } from "../parts/SelectTemplate";
const activeMenuBarItem = "start";

const isNotEmpty = (obj) => Object.keys(obj).length > 0;

const StartBranch = () => {
    const { branch }  = useParams();
    const dispatch = useDispatch();
    const menutype = useSelector((state) => state.menutypes.menutype);
    const status = useSelector((state) => state.menutypes.isLoaded);

    useEffect(() => {
        dispatch(fetchMenutypesById(branch));
    }, [dispatch]);

    if (!status) {
        return <div className="loading">loading</div>;
    } else {
        return (
            <>
                <MenuBar activeMenuBarItem={activeMenuBarItem} />

                <h1 className="text-center">CREATE NEW MENU</h1>

                {/* <section id="selected-meal" className="container">
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
                                <option
                                    value={menutype.template}
                                    key={menutype.id}
                                >
                                    {menutype.name}
                                </option>
                            ))}
                    </select>
                </section> */}

                <SelectTemplate/>

                {isNotEmpty(menutype) && <ChooseMenu/>}
                {isNotEmpty(menutype) && <TemplateMenu/>}
            </>
        );
    }
};

export default StartBranch;
