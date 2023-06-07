import {Route, Routes, useRoutes} from "react-router-dom";
import {ToolLayout} from "./container/toollayout";

export default (
    <Routes>
       <Route path={"/"} element={<ToolLayout/>}></Route>
    </Routes>
);
