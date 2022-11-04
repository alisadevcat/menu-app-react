import { React, useEffect, useState } from "react";
import { MenuBar } from "../components/MenuBar";
import { ActionBar } from "../components/ActionBar";
import { useSelector, useDispatch} from "react-redux";
import { getComponent } from "../factories/components";
// import {addMenuSections} from "../../store/reducers/menusectionsSlice";
 import { fetchSectionByMenuId } from "../store/reducers/menusectionsSlice";

const activeMenuBarItem = "editor";

const MenuEdit = () => {
    const dispatch = useDispatch(); 
    // const menuObject = useSelector((state) => state.menus.menu);
    const menutype = useSelector((state) => state.menutypes.menutype);
    const baseTemplateId = useSelector((state)=>state.menus.baseTemplateId);
    const menuTemplate = menutype.template;
    const [TemplateComponent, setTemplateComponent] = useState();

    useEffect(() => {
        setTemplateComponent(getComponent(menuTemplate));
    }, []);

    useEffect(()=>{dispatch(fetchSectionByMenuId(baseTemplateId)) }, []);

    return (
        <>
            <MenuBar activeMenuBarItem={activeMenuBarItem} />
            <div className="edit-block container text-center">
                <h2 className="edit-block__title">EDIT MENU</h2>
                <p>
                    Click to edit the menu title and edit sections, use the
                    icons to edit, move items, and delete.
                    <br />
                    To edit the header or footer, hover over the item for
                    options.
                </p>
            </div>

            {TemplateComponent}

            <ActionBar />
        </>
    );
};

export default MenuEdit;
