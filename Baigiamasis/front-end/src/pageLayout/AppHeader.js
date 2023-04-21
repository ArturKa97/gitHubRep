import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

const AppHeader = () => {
    const navigate = useNavigate();
    const user = useSelector(({userSlice}) => userSlice?.userDto);

    const loginAndRegisterButtons =!user && (
        <>
            <Button
                color="inherit"
                variant="h6"
                underline="none"
                onClick={() => navigate("/login")}
                sx={rightLink}
            >
                {'Log In'}
            </Button>
            <Button
                color="inherit"
                variant="h6"
                underline="none"
                onClick={() => navigate("/register")}
                sx={rightLink}
            >
                {'Register'}
            </Button>
        </>
    )


    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                        <Button
                            color="inherit"
                            variant="h6"
                            underline="none"
                            onClick={() => navigate("/")}
                            sx={rightLink}
                        >
                            {'Home'}
                        </Button>
                        <Button
                            color="inherit"
                            variant="h6"
                            underline="none"
                            onClick={() => navigate("/foodproducts")}
                            sx={rightLink}
                        >
                            {'Food Products'}
                        </Button>
                        <Button
                            color="inherit"
                            variant="h6"
                            underline="none"
                            onClick={() => navigate("/meals")}
                            sx={rightLink}
                        >
                            {'Meals'}
                        </Button>
                        <Button
                            color="inherit"
                            variant="h6"
                            underline="none"
                            onClick={() => navigate("/days")}
                            sx={rightLink}
                        >
                            {'Days Of Eating'}
                        </Button>
                      {loginAndRegisterButtons}
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    );
}

export default AppHeader;
