import {Route, Routes} from "react-router-dom";
import AddProductForm from "../components/AddProductForm";
import ProductHero from "../pageLayout/ProductHero";
import FoodProducts from "../components/FoodProducts";

const PageRouting = () => (
    <Routes>
        <Route path="/" element={<ProductHero/>}/>
        <Route path="/addproduct" element={<AddProductForm/>}/>
        <Route path="/foodproducts" element={<FoodProducts/>}/>
    </Routes>
)
export default PageRouting;

