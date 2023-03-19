import {Route, Routes} from "react-router-dom";
import AddProductForm from "../AddProductForm";
import ProductHero from "../modules/views/ProductHero";
import FoodProducts from "../FoodProducts";

const PageRouting = () => (
    <Routes>
        <Route path="/" element={<ProductHero/>}/>
        <Route path="/addproduct" element={<AddProductForm/>}/>
        <Route path="/foodproducts" element={<FoodProducts/>}/>
    </Routes>
)
export default PageRouting;

