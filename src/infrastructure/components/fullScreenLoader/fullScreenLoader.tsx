import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '../button/button';
import Loader from '../loader/loader';
import { FullScreenLoaderProps } from './fullScreenLoaderModal';

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({
  invisible,
  transitionDuration,
  color,
  // sx,
}) => {
  const [opens, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!opens);
  };
  return (
    <div>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop
        // sx={sx}
        open={opens}
        transitionDuration={transitionDuration}
        invisible={invisible}
        onClick={handleClose}>
        <Loader color={color} />
      </Backdrop>
    </div>
  );
};

export default FullScreenLoader;
