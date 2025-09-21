import "./RegisterPageStyle.css"

import { Flex, Text, Button, Slider, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useState } from "react";

const RegisterPage = () => {

    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [userLoginValid, setUserLoginValid] = useState(true);
    const [userPasswordValid, setUserPasswordValid] = useState(true);

    const [userLoginError, setUserLoginError] = useState("");
    const [userPasswordError, setUserPasswordError] = useState("");

    const [registrationStatus, setRegistrationStatus] = useState("");

    const validateFormInputs = () => {
        let valid = true;

        if (userLogin.trim() === "") {
            setUserLoginValid(false);
            setUserLoginError("Login cannot be empty");
            valid = false;
        } else if (userLogin.length > 50) {
            setUserLoginValid(false);
            setUserLoginError("Login cannot be longer than 50 characters");
            valid = false;
        } else {
            setUserLoginValid(true);
            setUserLoginError("");
        }

        if (userPassword.trim() === "") {
            setUserPasswordValid(false);
            setUserPasswordError("Password cannot be empty");
            valid = false;
        }
        else if (userPassword.length > 50) {
            setUserPasswordValid(false);
            setUserPasswordError("Password cannot be longer than 50 characters");
            valid = false;
        } else {
            setUserPasswordValid(true);
            setUserPasswordError("");
        }

        if (!valid) setRegistrationStatus("");
        return valid;
    }

    const handleRegister = async (event: any) => {
        event.preventDefault();

        if (!validateFormInputs()) return;

        try {
            const registerApiUrl = import.meta.env.VITE_REGISTER_API_URL;

            const response = await fetch(registerApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login: userLogin, password: userPassword }),
            });

            const responseData = await response.json();

            if (responseData.status === 'success') {
                setRegistrationStatus("Registration successful! You can now log in.");
            }
            else setRegistrationStatus("Registration failed");
        }
        catch (error) {
            console.error("Error during registration: ", error);
        }
    }

    return (
        <div className="registerpage-container w-[100%] flex flex-col justify-center items-center">
            <div className="h-[800px] w-[70%] bg-black mt-4 mb-4 flex flex-col items-center justify-center">
                <div className="w-[40%] h-[70%] bg-gray-800 border-2 rounded-xl flex flex-col items-center pt-[10px]">
                    <span className="text-cyan-400 font-bold text-2xl">Account Register Form</span>
                    <form onSubmit={(event) => handleRegister(event)} className="border-2 border-gray-400 rounded-2xl w-[90%] h-[80%] bg-gray-900 flex flex-col items-center justify-evenly mt-[15px]">
                        <div className="w-[80%] flex flex-col items-center">
                            <span className="text-cyan-400 font-bold text-2xl">Enter your nickname</span>
                            <TextField.Root
                                placeholder="Enter you nickname"
                                color={userLoginValid ? "cyan" : "red"}
                                className="w-3/4 mt-[8px]"
                                onChange={(e) => setUserLogin(e.target.value)}
                            >
                                <TextField.Slot color="cyan"></TextField.Slot>
                            </TextField.Root>
                            {!userLoginValid && (
                                <span className="text-red-500 text-sm">{userLoginError}</span>
                            )}
                        </div>
                        <div className="w-[80%] flex flex-col items-center">
                            <span className="text-cyan-400 font-bold text-2xl">Enter your password</span>
                            <TextField.Root
                                placeholder="Enter your password"
                                color={userPasswordValid ? "cyan" : "red"}
                                className="w-3/4 mt-[8px]"
                                type="password"
                                onChange={(e) => setUserPassword(e.target.value)}
                            >
                                <TextField.Slot color="cyan"></TextField.Slot>
                            </TextField.Root>
                            {!userPasswordValid && (
                                <span className="text-red-500 text-sm">{userPasswordError}</span>
                            )}
                        </div>

                        <button type="submit" className="bg-cyan-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-cyan-900 hover:scale-105">Create Account</button>

                        {registrationStatus && (
                            <span className="text-green-500 text-sm mt-2">{registrationStatus}</span>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage