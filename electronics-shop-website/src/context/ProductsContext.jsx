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

            const contentType = response.headers.get("content-type") || "";

            const bodyText = await response.text();

            if (!response.ok) {
                console.error("Non-OK response body:", bodyText);
                throw new Error(`Request failed: ${response.status} ${response.statusText} - ${bodyText}`);
            }

            let responseData;
            if (contentType.includes("application/json")) {
                try {
                    responseData = JSON.parse(bodyText);
                } catch (parseErr) {
                    console.error("Failed to parse JSON. Response text:", bodyText);
                    throw new Error("Invalid JSON response from server");
                }
            } else {
                console.error("Expected JSON but got:", bodyText);
                throw new Error("Server did not return JSON");
            }

            if (responseData && responseData.status === "success") {
                console.log(responseData.products_types[0]);
                setProductsTypesList(responseData.products_types[0]);
            } else {
                console.error("Unexpected response format:", responseData);
                throw new Error("Products fetching failed");
            }
        } catch (err) {
            console.error("Error during fetching products:", err);
            setError(err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductsTypes();
    }, []);

    return (
        <ProductsContext.Provider
            value={{ productsList: productsTypesList, loading, error, getProductsTypes }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsList = () => useContext(ProductsContext);
