import {Route, Routes} from "react-router-dom";
import ProductHero from "../pageLayout/ProductHero";
import FoodProducts from "../components/FoodProducts";
import Meals from "../components/Meals";

const PageRouting = () => (
    <Routes>
        <Route path="/" element={<ProductHero/>}/>
        <Route path="/foodproducts" element={<FoodProducts/>}/>
        <Route path="/meals" element={<Meals/>}/>

    </Routes>
)
export default PageRouting;

