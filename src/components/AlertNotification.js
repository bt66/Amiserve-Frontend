import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AlertNotification({children,open, setOpen, mode}) {
    // const [open, setOpen] = React.useState(true);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen({
        open: false,
        message: "Login failed",
        mode: "error"
    })
    };
  

    return (
    <div>
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={mode} sx={{ width: '100%' }}>
                {children}
            </Alert>
        </Snackbar>
    </div>
    )
}

export default AlertNotification