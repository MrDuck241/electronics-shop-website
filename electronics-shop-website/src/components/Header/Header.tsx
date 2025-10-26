import "./Header.css"
import { Flex, Text, Button, TextField } from "@radix-ui/themes"; // Remove Slider if not used
import { useProductsList } from "../../context/ProductsContext"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { productsList } = useProductsList();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query.trim() === "") {
            setSearchResults([]);
            return;
        }

        const filteredProducts = productsList.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );

        setSearchResults(filteredProducts);
    };

    const changePage = (newRoute: string) => {
        navigate(newRoute);
    }

    return (
        <header className="w-[100%] h-[80px] bg-gradient-to-r from-black via-gray-900 to-gray-800 flex border-b-2 border-gray-500 border-solid">
            <Flex align="center" justify={"between"} className="w-full pl-4 pr-4">
                <Text size="7" className="text-cyan-400 font-bold">ElectroShop</Text>

                <Flex className="w-[30%] flex items-center relative">
                    <TextField.Root className="w-3/4">

                    </TextField.Root>
                    <Button color="cyan" ml={"5px"}><MagnifyingGlassIcon /></Button>

                    {/* Wyniki wyszukiwania */}
                    {searchResults.length > 0 && searchQuery && (
                        <div className="absolute top-full left-0 w-3/4 mt-1 bg-white rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                            {searchResults.map((product) => (
                                <div
                                    key={product.id}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        navigate(`/product/${product.id}`);
                                        setSearchQuery("");
                                        setSearchResults([]);
                                    }}
                                >
                                    <div className="text-black">{product.name}</div>
                                    <div className="text-sm text-gray-500">{product.price} zł</div>
                                </div>
                            ))}
                        </div>
                    )}
                </Flex>

                <Flex className="w-[40%] pl-[350px]">
                    <Flex direction={"column"} align={"center"} className="ml-[20px]">
                        <button className="flex flex-col items-center cursor-pointer" onClick={() => changePage("/login")}>
                            <img src="images/icons/login_icon.png" alt="Login icon" className="w-[30px] h-[30px]" />
                            <span className="text-cyan-400 font-medium">Log in</span>
                        </button>
                    </Flex>

                    <Flex direction={"column"} align={"center"} className="ml-[20px]">
                        <button className="flex flex-col items-center cursor-pointer" onClick={() => changePage("/register")}>
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