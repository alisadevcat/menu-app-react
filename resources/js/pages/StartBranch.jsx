import { React, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenutypesById}  from "../store/reducers/menutypesSlice";
import { useParams } from "react-router-dom";
import ChooseMenu from "../components/ChooseMenu";
import TemplateMenu  from "../components/TemplateMenu";

export const StartBranch = () => {
    const dispatch = useDispatch();
    const menutypes = useSelector((state) => state.menutypes.menutypes);
    const status = useSelector((state) => state.menutypes.isLoaded);
    const { branch } = useParams();
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [showTemplate, setShowTemplate] = useState(false);
    const [templateData, setTemplateData] = useState(null);


    useEffect(() => {
        dispatch(fetchMenutypesById(branch));
    }, [dispatch]);

    const getShortName = (template_name) => {
        return menutypes.filter((item) => item.template === template_name)[0].shortname;
    }

    const handleSelectChange = (event) => {
        let index = event.nativeEvent.target.selectedIndex;
        const title = event.nativeEvent.target[index].text;
        setSelectedTemplate(event.target.value);
        setTemplateData({ title: title, shortname: getShortName(event.target.value) });
    };

    const handleShowTemplate = (value) => {
        setShowTemplate(value);
    };

    // console.log(selectedTemplate);

    if (!status) {
        return <div className="loading">loading</div>;
    } else {
        return (
            <>
                <div className="container">
                    <h1>CREATE NEW MENU</h1>
                    <section id="select-template">
                        <label className="control-label">
                            Select Meal Period
                        </label>
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
                                        key={menutype.shortname}>
                                        {menutype.name}
                                    </option>
                                ))}
                        </select>
                    </section>
                </div>
                {selectedTemplate && (
                    <div className="container">
                        <ChooseMenu handleShowTemplate={handleShowTemplate} />
                    </div>
                )}
                {(selectedTemplate && showTemplate) && (
                    <div className="container">
                        <TemplateMenu templateData={templateData}/>
                    </div>
                )}
            </>
        );
    }
};