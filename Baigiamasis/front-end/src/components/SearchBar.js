import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {useState} from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;



const SearchBar = ({itemData, handleSelectedItems}) => {
    const  [selectedItems, setSelectedItems] = useState([]);
    const handleChange = (event, value) => {
        setSelectedItems(value);
        handleSelectedItems(value);
    }
    return (
        <Autocomplete
            onChange={handleChange}
            value = {selectedItems}
            multiple
            id="search-bar"
            options={itemData}
            disableCloseOnSelect
            getOptionLabel={(option) => option.name}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.name}
                </li>
            )}
            style={{ width: 190 }}
            renderInput={(params) => (
                <TextField {...params}  label="Products" placeholder="Products" />
            )}

        />
    );

}
export default SearchBar