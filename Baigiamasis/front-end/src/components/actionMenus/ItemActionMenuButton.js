import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

const ItemActionMenuButton = ({action, buttonName}) => (
    <MenuItem onClick={action}>{buttonName}</MenuItem>
)
export default ItemActionMenuButton
