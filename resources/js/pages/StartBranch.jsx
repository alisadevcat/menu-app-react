import { React, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenutypesById } from "../store/reducers/menutypesSlice";
import { useParams } from "react-router-dom";
import ChooseMenu from "../parts/ChooseMenu";
import TemplateMenu from "../parts/TemplateMenu";

export const StartBranch = () => {
    const dispatch = useDispatch();
    const menutypes = useSelector((state) => state.menutypes.menutypes);
    const status = useSelector((state) => state.menutypes.isLoaded);
    const { branch } = useParams();
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [templateData, setTemplateData] = useState(null);

    useEffect(() => {
        dispatch(fetchMenutypesById(branch));
    }, [dispatch]);

    const getShortName = (template_name) => {
        return menutypes.filter((item) => item.template === template_name)[0].shortname;
    };

    const handleSelectChange = (event) => {
        let index = event.nativeEvent.target.selectedIndex;
        const title = event.nativeEvent.target[index].text;
        setSelectedTemplate(event.target.value);
        setTemplateData({
            title: title,
            shortname: getShortName(event.target.value),
        });
    };

    if (!status) {
        return <div className="loading">loading</div>;
    } else {
        return (
            <>
                <h1 className="text-center">CREATE NEW MENU</h1>

                <section id="selected-meal" className="container">
                    <label className="control-label">Select Meal Period</label>
                    <select
                        id="menu_type"
                        name="menu_type"
                        className="form-control mt-2"
                        onChange={handleSelectChange}>
                            
                        <option disabled value="default" selected="selected">
                            Select Template
                        </option>
                        {menutypes &&
                            menutypes.map((menutype) => (
                                <option
                                    value={menutype.template}
                                    key={menutype.shortname}
                                >
                                    {menutype.name}
                                </option>
                            ))}
                    </select>
                </section>

                {selectedTemplate && <ChooseMenu />}
                {selectedTemplate && (
                    <TemplateMenu templateData={templateData} />
                )}
            </>
        );
    }
};
