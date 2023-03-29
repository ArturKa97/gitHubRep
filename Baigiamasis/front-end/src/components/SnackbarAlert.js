import {Alert, Snackbar} from "@mui/material";
import * as React from "react";

const SnackbarAlert = ({alertOpen, setAlertOpen ,type, message}) => {
    return(
        <Snackbar open={alertOpen}
                  anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                  autoHideDuration={5000}
                  onClose={() => setAlertOpen(false)}>
            <Alert onClose={() => setAlertOpen(false)} variant="filled" severity={type} sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    )
}
export default SnackbarAlert