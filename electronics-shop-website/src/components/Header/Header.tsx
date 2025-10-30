import "./Header.css"
import { Flex, Text, Button, TextField } from "@radix-ui/themes";
import { useProductsList } from "../../context/ProductsContext"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const { productsList } = useProductsList();
    const [showProductsList, setShowProductsList] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(productsList);
        //productsList.forEach(element => console.log(element));
    }, [searchInput]);

    const handleSearch = () => {
        productsList.forEach(obj => console.log(obj));
        const foundProducts = productsList.filter(obj => obj.product_name.includes(searchInput));
        console.log("---------------------------------");
        console.log(foundProducts);
        console.log("----------------------------------");
        setSearchResults(foundProducts);
    };

    const handleProductClick = (productId: number) => {
        navigate(`/product/${productId}`);
        setSearchQuery("");
        setSearchResults([]);
    };

    const changePage = (newRoute: string) => {
        navigate(newRoute);
    }

    const handleInputChange = (value) => {
        console.log(value);
        setSearchInput(value);
        handleSearch();
    }

    return (
        <header className="w-[100%] h-[80px] bg-gradient-to-r from-black via-gray-900 to-gray-800 flex border-b-2 border-gray-500 border-solid">
            <Flex align="center" justify={"between"} className="w-full pl-4 pr-4">
                <Text size="7" className="text-cyan-400 font-bold">ElectroShop</Text>

                <Flex className="w-[30%] flex items-center relative">
                    <TextField.Root
                        className="w-3/4"
                        placeholder="Search products..."
                        value={searchInput}
                        onChange={(e) => handleInputChange(e.target.value)}>
                    </TextField.Root>
                    <Button color="cyan" ml={"5px"}><MagnifyingGlassIcon onClick={() => setShowProductsList(!showProductsList)} /></Button>

                </Flex>
                {showProductsList && <div className="products-list">
                    {searchResults.map((product, index) => (
                        <div
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleProductClick(index)}
                        >
                            <span>{product.product_name}</span>
                        </div>
                    ))}
                </div>}
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