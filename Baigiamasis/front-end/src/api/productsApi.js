import HTTP from "./"
import {useQuery} from "react-query";

const createProduct = (product) => HTTP.post("/products/add", product)

const getProducts = () => HTTP.get("products/all")
    .then(response => response.data)

const useProducts = () => {
    const context = useQuery('getProducts', getProducts)
    return {...context, products: context.data}
}

export {createProduct, getProducts, useProducts}