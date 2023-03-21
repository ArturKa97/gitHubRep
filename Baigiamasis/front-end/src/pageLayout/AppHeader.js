import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppHeader() {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
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
                onClick={() => navigate("/addproduct")}
                sx={rightLink}
            >
              {'Add Product'}
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
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default AppHeader;
