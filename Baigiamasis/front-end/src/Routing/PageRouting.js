import {Route, Routes} from "react-router-dom";
import AddProductForm from "../AddProductForm";
import ProductHero from "../modules/views/ProductHero";

const PageRouting = () => (
    <Routes>
        <Route path="/addproduct" element={<AddProductForm/>}/>
        <Route path="/" element={<ProductHero/>}/>
    </Routes>
)
export default PageRouting;

