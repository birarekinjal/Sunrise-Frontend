/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';

const SideMenu: React.FC = () => {

  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List component="nav" disablePadding>
      <ListItem button >
        <ListItemIcon >
          <IconDashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem button >
        <ListItemIcon >
          <IconShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>

      <ListItem button >
        <ListItemIcon >
          <IconPeople />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>

      <ListItem button >
        <ListItemIcon >
          <IconBarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button onClick={handleClick} >
        <ListItemIcon >
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Nested Pages" />
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button >
            <ListItemText inset primary="Nested Page 1" />
          </ListItem>
          <ListItem button >
            <ListItemText inset primary="Nested Page 2" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};


export default SideMenu;
