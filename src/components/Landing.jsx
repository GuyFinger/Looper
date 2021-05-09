import React,{useEffect,useState} from 'react'
import { Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function Landing() {
    useEffect(() => {
        handleOpen()
       
    }, [])
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Moveo Looper</h2>
            <p id="transition-modal-description">This practice test was to program a working and functioning sound looper. </p>
            <p id="transition-modal-description">In order to program this looper, i've used React framework with Material UI library.</p>
            <p id="transition-modal-description">The looper functions includes: </p>
            <ul>
                <li>turn pad on/off</li>
                <li>when played two or more sounds, queue to the start of the first track </li>
                <li>play and stop all sounds on the looper</li>
            </ul>
          </div>
        </Fade>
      </Modal>
    )
}
