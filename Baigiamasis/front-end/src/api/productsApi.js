import HTTP from "./"
import {useMutation, useQuery} from "react-query";

const createProduct = (product) => HTTP.post("/products/add", {...product, name: product.productName})

const getProducts = () => HTTP.get("products/all")
    .then(response => response.data)

const useProducts = () => {
    const context = useQuery('getProducts', getProducts)
    return {...context, products: context.data}
}

const useCreateProduct = () => {
    const mutation = useMutation(createProduct)
    return mutation.mutateAsync
}

export {createProduct, getProducts, useProducts, useCreateProduct}