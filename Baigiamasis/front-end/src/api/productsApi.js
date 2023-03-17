import HTTP from "./"

const createProduct = (product) => HTTP.post("/products/add", product)

export {createProduct}