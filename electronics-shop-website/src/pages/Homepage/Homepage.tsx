import "./Homepage.css"
import { useState, useEffect } from "react";

const Homepage = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuth = async () => {
        try {
            const registerApiUrl = import.meta.env.VITE_CHECK_AUTH_API_URL;
            // const userLogin = localStorage.getItem("userLogin");

            const response = await fetch(registerApiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });

            const responseData = await response.json();

            if (responseData.authenticated === true) {
                setIsAuthenticated(true);
                alert("Authentization successful!");
            }
            else {
                setIsAuthenticated(false);
                alert("Authentization failed");
            }
        }
        catch (error) {
            console.error("Error during Authentization: ", error);
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <div className="homepage-container w-[100%] flex flex-col justify-center items-center">
            <div className="h-[800px] w-[70%] bg-black mt-4 mb-4 flex flex-col items-center">
                {!isAuthenticated ?
                    <>
                        <span className="text-cyan-400 text-2xl font-bold mt-3">WELCOME TO ML POWERED RECOMENDATION SHOP</span>
                        <span className="text-white text-xl font-semibold mt-3">Find the best electronics products tailored to your preferences!</span>
                        <img src="images/products/keyboards/keyboard1.jpg" alt="Homepage keyboard image" className="w-[50%] mt-[15px]" />
                    </> :
                    <span className="text-2xl text-cyan-500 font-bold">Content only for authenticated users</span>
                }
            </div>
        </div>
    )
}

export default Homepage