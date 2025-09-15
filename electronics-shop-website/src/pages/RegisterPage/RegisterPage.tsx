import "./RegisterPageStyle.css"

import { Flex, Text, Button, Slider, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const RegisterPage = () => {
    return (
        <div className="registerpage-container w-[100%] flex flex-col justify-center items-center">
            <div className="h-[800px] w-[70%] bg-black mt-4 mb-4 flex flex-col items-center justify-center">
                <div className="w-[40%] h-[70%] bg-gray-800 border-2 rounded-xl flex flex-col items-center pt-[10px]">
                    <span className="text-cyan-400 font-bold text-2xl">Account Register Form</span>
                    <form className="border-2 border-gray-400 rounded-2xl w-[90%] h-[80%] bg-gray-900 flex flex-col items-center justify-evenly mt-[15px]">
                        <div className="w-[80%] flex flex-col items-center">
                            <span className="text-cyan-400 font-bold text-2xl">Enter your nickname</span>
                            <TextField.Root placeholder="Enter you nickname" color="cyan" className="w-3/4 mt-[8px]">
                                <TextField.Slot color="cyan">
                                </TextField.Slot>
                            </TextField.Root>
                        </div>
                        <div className="w-[80%] flex flex-col items-center">
                            <span className="text-cyan-400 font-bold text-2xl">Enter your password</span>
                            <TextField.Root placeholder="Enter your password" color="cyan" className="w-3/4 mt-[8px]">
                                <TextField.Slot color="cyan">
                                </TextField.Slot>
                            </TextField.Root>
                        </div>

                        <button className="bg-cyan-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-cyan-900 hover:scale-105">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage