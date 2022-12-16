import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenutypesById } from "../store/reducers/menutypesSlice";
import { MenuBar } from "../components/MenuBar";
import ChooseMenu from "../parts/ChooseMenu";
import TemplateMenu from "../parts/TemplateMenu";
import { SelectTemplate } from "../parts/SelectTemplate";
import { PreLoader } from "../components/PreLoader";
import  { isNotEmptyObj } from "../utils/Helpers";
const activeMenuBarItem = "start";

const StartBranchPage = () => {
    const { branch }  = useParams();
    const dispatch = useDispatch();
    const menutype = useSelector((state) => state.menutypes.menutype);
    const status = useSelector((state) => state.menutypes.isLoaded);
    const [showTemplate, setShowTemplate] = useState(false);
    const show = showTemplate || isNotEmptyObj(menutype);
    
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

                <SelectTemplate setShowTemplate={()=>setShowTemplate(true)}/>
                { show && (<><ChooseMenu/> <TemplateMenu/></>) }


            </>
        );
    }
};

export default StartBranchPage;
