import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import "./MainLayout.css"

import { Outlet } from "react-router-dom"

export default function MainLayout() {
    return (
        <div id="main-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}