import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenutypesById } from "../store/reducers/menutypesSlice";
import { useParams } from "react-router-dom";
import { ChooseMenu } from "../components/ChooseMenu";
import { TemplateMenu } from "../components/TemplateMenu";

export const StartBranch = () => {
    const dispatch = useDispatch();
    const menutypes = useSelector((state) => state.menutypes.menutypes);
    const status = useSelector((state) => state.menutypes.isLoaded);
    const { branch } = useParams();
    const [selected, setSelected] = useState(null);
    const [showTemplate, setShowTemplate] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(null);

    useEffect(() => {
        dispatch(fetchMenutypesById(branch));
    }, [dispatch]);

    const handleSelectChange = (event) => {
        let index = event.nativeEvent.target.selectedIndex;
        setSelectedTitle(event.nativeEvent.target[index].text);
        setSelected(event.target.value);
    };

    const handleShowTemplate = (value) => {
        setShowTemplate(value);
    };

    console.log(selected);

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
                            <option disabled value="default">
                                Select Template
                            </option>
                            {menutypes &&
                                menutypes.map((menutype) => (
                                    <option
                                        value={menutype.template}
                                        key={menutype.name}
                                    >
                                        {menutype.name}
                                    </option>
                                ))}
                        </select>
                    </section>
                </div>
                {selected && (
                    <div className="container">
                        <ChooseMenu handleShowTemplate={handleShowTemplate} />
                    </div>
                )}
                {showTemplate && (
                    <div className="container">
                        <TemplateMenu template={selected}/>
                    </div>
                )}
            </>
        );
    }
};
