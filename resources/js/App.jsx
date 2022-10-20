import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import HomePage from "./pages/Home";
import ChoosePage from "./pages/ChoosePage";
import StartBranch from "./pages/StartBranch";
import MenuEdit from "./pages/MenuEdit";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBreadSlice, faAppleAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab,faBreadSlice, faAppleAlt)

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/api/choose" element={<ChoosePage />} />
                    <Route path="/api/start/:branch" element={<StartBranch />} />
                    <Route path="/api/menus/:branch/:menu_type_shortname" element={<MenuEdit />}/>
                    {/* <Route path="account" element={<MyAccountPage />} />*/}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Route>
            </Routes>
        </>
    );
};
export default App;
