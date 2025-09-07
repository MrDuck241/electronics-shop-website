import "./Header.css"
import { Flex, Text, Button, Slider, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const Header = () => {
    return (
        <header className="w-full h-[80px] bg-gradient-to-r from-black via-gray-900 to-gray-800 flex">
            <Flex align="center" justify={"between"} className="w-full pl-4 pr-4">
                <Text size="7" className="text-cyan-400 font-bold">ElectroShop</Text>

                <Flex className="w-[30%] flex items-center">
                    <TextField.Root placeholder="Search the product" color="cyan" className="w-3/4">
                        <TextField.Slot color="cyan">
                        </TextField.Slot>
                    </TextField.Root>
                    <Button color="cyan" ml={"5px"}><MagnifyingGlassIcon /></Button>
                </Flex>

                <Flex className="w-[40%] pl-[350px]">
                    <Flex direction={"column"} align={"center"} className="ml-[20px]">
                        <button className="flex flex-col items-center cursor-pointer">
                            <img src="images/icons/login_icon.png" alt="Login icon" className="w-[30px] h-[30px]" />
                            <span className="text-cyan-400 font-medium">Log in</span>
                        </button>
                    </Flex>

                    <Flex direction={"column"} align={"center"} className="ml-[20px]">
                        <button className="flex flex-col items-center cursor-pointer">
                            <img src="images/icons/register_icon.png" alt="Register icon" className="w-[30px] h-[30px]" />
                            <span className="text-cyan-400 font-medium">Register</span>
                        </button>
                    </Flex>

                    <Flex direction={"column"} align={"center"} className="ml-[20px]">
                        <button className="flex flex-col items-center cursor-pointer">
                            <img src="images/icons/shopping_cart_icon.png" alt="Shop cart icon" className="w-[30px] h-[30px]" />
                            <span className="text-cyan-400 font-medium">Shop Cart</span>
                        </button>
                    </Flex>

                    <Flex direction={"column"} align={"center"} className="ml-[20px]">
                        <button className="flex flex-col items-center cursor-pointer">
                            <img src="images/icons/translation_icon.png" alt="Translation icon" className="w-[30px] h-[30px]" />
                            <span className="text-cyan-400 font-medium">Language</span>
                        </button>
                    </Flex>
                </Flex>
            </Flex>
        </header>
    )
}

export default Header;