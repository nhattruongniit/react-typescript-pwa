import React from 'react';
import { NavLink } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SendIcon from '@material-ui/icons/Send';

export const Sidebar: React.FunctionComponent = () => {
  return (
    <div className="c-sidebar">
      <div className="c-sidebar__inner">
        <div className="c-sidebar__logo">
          Menu
        </div>
        <div className="c-sidebar__menu">
        <List
          component="nav"
        >
          <NavLink to="/todo" activeClassName="active">
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText inset primary="Todo" />
            </ListItem>
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText inset primary="About" />
            </ListItem>
          </NavLink>
        </List>
        </div>
      </div>
    </div>
  )
}