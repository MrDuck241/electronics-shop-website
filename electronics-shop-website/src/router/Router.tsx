import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage/Homepage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
        </Route>
    )
);

export default router;