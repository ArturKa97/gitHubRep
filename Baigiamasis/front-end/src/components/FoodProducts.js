import FoodProductCard from "./FoodProductCard";
import Box from "@mui/material/Box";
import * as React from 'react';
import {useProducts} from "../api/productsApi";
import {CircularProgress} from "@mui/material";
import Button from "@mui/material/Button";
import AddCard from "./AddCard"
import {useState} from "react";
import AddProductFormDialog from "./AddProductFormDialog";
import SnackbarAlert from "./SnackbarAlert";

const FoodProducts = () => {

    const {isFetching, refetch, products = []} = useProducts();
    const [openFormDialog, setOpenFormDialog] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);


    const foodProductsElement = products.map((listProduct, i) => (
        <FoodProductCard key={i} product={listProduct} refetchProducts={refetch} openAlert={setAlertOpen} productToEdit={setEditProduct}
                         openForm={setOpenFormDialog}/>
    ));
    const loadingElement = isFetching && (
        <CircularProgress color="inherit"/>
    );

    return (
        <>
            <Box sx={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: 1,
                marginLeft: 6
            }}>
                <AddCard openForm={setOpenFormDialog} resetForm={setEditProduct}/>
                <AddProductFormDialog refetchItems={refetch} open={openFormDialog}
                                      onClose={() => setOpenFormDialog(false)} product={editProduct}/>
                {loadingElement || foodProductsElement}
                <Button onClick={refetch}>
                    Test
                </Button>
            </Box>
            <SnackbarAlert alertOpen={alertOpen} setAlertOpen={setAlertOpen} type={"info"} message={"Product deleted!"}/>
        </>
    )
}
export default FoodProducts