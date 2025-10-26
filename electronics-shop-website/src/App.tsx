import { RouterProvider } from "react-router-dom"
import { ProductsListProvider } from "./context/ProductsContext";
import router from "./router/Router"
import './App.css'

function App() {
  return (
    <ProductsListProvider>
      <RouterProvider router={router} />
    </ProductsListProvider>
  )
}

export default App
