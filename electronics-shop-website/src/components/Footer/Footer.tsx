import "./Footer.css"
import { Flex, Text, Button, Slider, TextField } from "@radix-ui/themes";

export default function Footer() {
    return (
        <footer className="w-full h-[120px] bg-gradient-to-r from-black via-gray-900 to-gray-800 flex justify-evenly items-center">
            <Text className="text-cyan-400">Author: Przemek K</Text>
            <Text className="text-cyan-400">Webiste in progress</Text>
            <Text className="text-cyan-400">Author: Michal B</Text>
        </footer >
    )
}