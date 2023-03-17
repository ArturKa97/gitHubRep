import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const AddProductForm = () => {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'

                }}
                noValidate
                autoComplete="off"
            >
                <>
                    <TextField
                        id="outlined-required"
                        label="Product Name"
                        placeholder="Product Name"
                    />
                    <TextField
                        id="outlined-required"
                        label="Calories(100g)"
                        placeholder="Calories(100g)"
                    />
                    <TextField
                        id="outlined-required"
                        label="Protein(100g)"
                        placeholder="Protein(100g)"
                    />
                    <TextField
                        id="outlined-required"
                        label="Carbs(100g)"
                        placeholder="Carbs(100g)"
                    />
                    <TextField
                        id="outlined-required"
                        label="Sugar(100g)"
                        placeholder="Sugar(100g)"
                    />
                    <TextField
                        id="outlined-required"
                        label="Fat(100g)"
                        placeholder="Fat(100g)"
                    />
                    <Button variant = "outlined">
                        Submit product
                    </Button>

                </>
            </Box>
        </>
    );
}
export default AddProductForm;