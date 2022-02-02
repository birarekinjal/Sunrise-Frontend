import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../button/button';
import './modal.scss';
import { CustomModalProps, DialogTitleProps } from './modalModal';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  buttons,
  title,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button
        variant='outlined'
        label='Open dialog'
        onClick={handleClickOpen}
      />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}>
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}>
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
        <DialogActions>
          {buttons &&
            buttons.map((btn: any, index: any) => {
              return (
                <Button
                  key={index}
                  disabled={btn.isDisabled}
                  isLoading={btn.isLoading}
                  label={btn.label}
                  onClick={btn.onClick}
                  color={btn.color || 'primary'}
                  variant={btn.variant}
                  className={btn.className}
                />
              );
            })}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default CustomModal;
