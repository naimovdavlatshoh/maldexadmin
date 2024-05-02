import { Route, Routes } from "react-router-dom";
import AllCategories from "./pages/Category/AllCategories";
import CreateCategory from "./pages/Category/CreateCategory";
import EditCategory from "./pages/Category/EditCategory";
import CategoryDetails from "./pages/Category/CategoryDetails";
import Main from "./pages/Main";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Products/ProductDetails";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/categories" element={<AllCategories />} />
            <Route path="/create-category" element={<CreateCategory />} />
            <Route path="/edit-category" element={<EditCategory />} />
            <Route path="/category/:id" element={<CategoryDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/create-product" element={<CreateCategory />} />
            <Route path="/edit-product" element={<EditCategory />} />
            <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    );
}

export default App;
