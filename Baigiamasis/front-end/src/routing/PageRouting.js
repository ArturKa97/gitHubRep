import {Route, Routes} from "react-router-dom";
import ProductHero from "../pageLayout/ProductHero";
import FoodProducts from "../components/FoodProducts";
import Meals from "../components/Meals";
import DaysOfEating from "../components/DaysOfEating";
import LoginForm from "../components/LoginForm";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminPage from "../components/AdminPage";
import PersonalInfoPage from "../components/PersonalInfoPage";

const PageRouting = () => (
    <Routes>
        <Route path="/" element={<ProductHero/>}/>
        <Route path="/foodproducts" element={<FoodProducts/>}/>
        <Route path="/meals" element={<Meals/>}/>
        <Route path="/days" element={<DaysOfEating/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/personal" element={<PersonalInfoPage/>}/>
        <Route path="/admin" element={
            <ProtectedRoute roles={["ADMIN"]}>
                <AdminPage/>
            </ProtectedRoute>
        }/>
    </Routes>
)
export default PageRouting;

