import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import SearchBar from "./SearchBar";

const AddProductSearchDialog = ({open, onClose, itemData, itemId, action}) => {

    const [selectedItems, setSelectedItems] = useState([])
    const handleSelectedItems = (selectedItems) => setSelectedItems(selectedItems)

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{}</DialogTitle>
                <DialogContent>
                    <SearchBar itemData={itemData} handleSelectedItems={handleSelectedItems}/>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={() => {action(selectedItems, itemId);
                    }}>Add</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default AddProductSearchDialog