import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import colors from '../../../theme/colors';
import DetailsContent from './DetailsContent';

// A Drawer Side Menu based in Material UI

const useStyles = makeStyles({
  paper: {
    width: '30%',
    minWidth: 320,
    background: colors.primary
  }
});

const Close = styled.div`
  display: flex;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: 18px;
  color: ${colors.background};
  border: 0.5px solid ${colors.background};
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 16px;
  cursor: pointer;
`;

const renderContent = (id, { ...rest }) => {
  if (id !== undefined) {
    return <DetailsContent {...rest} />;
  }
  return null;
};

function DetailsDrawer({ onClose, id, ...rest }) {
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
    if (id !== undefined) handleOpen();
  }, [id, handleOpen]);

  return (
    <Drawer
      anchor="right"
      transitionDuration={600}
      BackdropProps={{ invisible: true }}
      elevation={0}
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.paper }}
    >
      <Close id="xButton" onClick={handleClose}> x </Close>
      {renderContent(id, { ...rest })}
    </Drawer>
  );
}

DetailsDrawer.propTypes = {
  onClose: PropTypes.func,
  id: PropTypes.number
};

renderContent.propTypes = {
  id: PropTypes.number
};

export default React.memo(DetailsDrawer);
