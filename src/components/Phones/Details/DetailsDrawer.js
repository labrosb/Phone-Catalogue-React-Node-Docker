import React, { useState, useEffect, useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../../theme/colors';

// A Drawer Side Menu based in Material UI

const useStyles = makeStyles({
  paper: {
    width: '30%',
    minWidth: 320,
    background: colors.primary,
  }
});

function DetailsDrawer(props) {
  const { onClose } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (props.id !== undefined) handleOpen();
  }, [props.id, handleOpen]);

  return (
    <Drawer
      anchor="right"
      transitionDuration={800}
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.paper }}
    >
    </Drawer>
  );
}

export default React.memo(DetailsDrawer);
