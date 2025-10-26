import { createContext, useState, useContext, useEffect } from "react";

const ProductsContext = createContext();

export const ProductsListProvider = ({ children }) => {
    const [productsTypesList, setProductsTypesList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProductsTypes = async () => {
        try {
            setLoading(true);
            setError(null);

            const apiUrl = import.meta.env.VITE_GET_PRODUCTS_TYPES;
            if (!apiUrl) {
                throw new Error("Missing API URL (VITE_GET_PRODUCTS_TYPES)");
            }

            const response = await fetch(apiUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });

            const responseData = await response.json();

            if (responseData.status === "success") {
                setProductsTypesList(responseData.products_types);
                console.log(responseData.products_types);
            } else {
                throw new Error("Products fetching failed");
            }
        } catch (error) {
            console.error("Error during fetching products:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductsTypes();
    }, []);

    return (
        <ProductsContext.Provider
            value={{ productsTypesList, loading, error, getProductsTypes }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsList = () => useContext(ProductsContext);
