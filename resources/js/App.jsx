import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import HomePage from "./pages/Home";
import { ChoosePage } from "./pages/ChoosePage";
import { StartBranch } from "./pages/StartBranch";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/api/choose" element={<ChoosePage />} />
                    <Route path="/api/start/:branch" element={<StartBranch />} />
                    {/* <Route path="account" element={<MyAccountPage />} />
                    <Route path="/start/:branch" element={<Branch />} />
                    <Route path="/menus/:branch/:menu_shortname" element={<MenuEdit />}
                    /> */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Route>
            </Routes>
        </>
    );
};
export default App;