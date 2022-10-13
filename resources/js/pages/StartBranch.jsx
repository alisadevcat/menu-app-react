import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenutypesById } from "../store/reducers/menutypesSlice";
import { useParams } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";
import ChooseMenu from "../parts/ChooseMenu";
import TemplateMenu from "../parts/TemplateMenu";
const activeMenuBarItem = "start";

const getShortName = (template_name, arr) => {
    return arr.find((item) => item.template === template_name).shortname;
};

const StartBranch = () => {
    const { branch } = useParams();
    const dispatch = useDispatch();
    const menutypes = useSelector((state) => state.menutypes.menutypes);
    const status = useSelector((state) => state.menutypes.isLoaded);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [templateData, setTemplateData] = useState(null);

    useEffect(() => {
        dispatch(fetchMenutypesById(branch));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("branch_slug", branch);
        localStorage.setItem("menu_template_name", selectedTemplate);
    }, [branch, selectedTemplate]);

    const handleSelectChange = (event) => {
        let index = event.nativeEvent.target.selectedIndex;
        const title = event.nativeEvent.target[index].text;
        setSelectedTemplate(event.target.value);
        setTemplateData({
            title: title,
            shortname: getShortName(event.target.value, menutypes),
        });

        localStorage.setItem(
            "menu_type_id",
            menutypes.find((item) => item.template === event.target.value).id
        );
        localStorage.setItem(
            "menu_type_shortname",
            getShortName(event.target.value, menutypes)
        );
    };

    if (!status) {
        return <div className="loading">loading</div>;
    } else {
        return (
            <>
                <MenuBar activeMenuBarItem={activeMenuBarItem} />

                <h1 className="text-center">CREATE NEW MENU</h1>

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
                                <option
                                    value={menutype.template}
                                    key={menutype.id}
                                >
                                    {menutype.name}
                                </option>
                            ))}
                    </select>
                </section>

                {selectedTemplate && <ChooseMenu title={templateData.title} />}
                {selectedTemplate && (
                    <TemplateMenu templateData={templateData} />
                )}
            </>
        );
    }
};

export default StartBranch;
