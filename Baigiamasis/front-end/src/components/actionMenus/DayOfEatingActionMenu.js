import * as React from 'react';
import Menu from '@mui/material/Menu';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";
import ItemActionMenuButton from "./ItemActionMenuButton";

const DayOfEatingActionMenu = ({itemToEdit,deleteItem, openSearchBarAddForm, openSearchBarRemoveForm}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = !!anchorEl;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <ItemActionMenuButton action={itemToEdit} buttonName={"Edit"}/>
                <ItemActionMenuButton action={openSearchBarAddForm} buttonName={"Add meals"}/>
                <ItemActionMenuButton action={openSearchBarRemoveForm} buttonName={"Remove meals"}/>
                <ItemActionMenuButton action={deleteItem} buttonName={"Delete"}/>
            </Menu>
        </>
    );
}

export default DayOfEatingActionMenu