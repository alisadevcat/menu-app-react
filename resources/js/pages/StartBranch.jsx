import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenutypesById } from "../store/reducers/menutypesSlice";
import { MenuBar } from "../components/MenuBar";
import ChooseMenu from "../parts/ChooseMenu";
import TemplateMenu from "../parts/TemplateMenu";
import { SelectTemplate } from "../parts/SelectTemplate";
import { PreLoader } from "../components/PreLoader";

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
        return <PreLoader/>;
    } else {
        return (
            <>
                <MenuBar activeMenuBarItem={activeMenuBarItem} />

                <h1 className="text-center">CREATE NEW MENU</h1>

                <SelectTemplate/>

                {isNotEmpty(menutype) && <ChooseMenu/>}
                {isNotEmpty(menutype) && <TemplateMenu/>}
            </>
        );
    }
};

export default StartBranch;
