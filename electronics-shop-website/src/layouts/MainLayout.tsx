import "../components/Header/Header.tsx"
import "../components/Footer/Footer.tsx"

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