import React from "react";
import { useSelector } from 'react-redux';
import { ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import { lastMessageSelector } from "../../../store/messages";

import st from "./chat.module.css";

const useStyles = makeStyles(() => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  };
});

export function Chat({ title, selected }) {
  const styles = useStyles();
  const lastMessage = useSelector(lastMessageSelector(title));

  return (
    <ListItemButton
      className={styles.item}
      selected={selected}
    >
      <ListItem>
        <AccountCircle fontSize="large" className={st.icon} />
      </ListItem>
      <ListItemText primary={title} className={st.text} secondary={
        lastMessage && (
          <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="secondary"
              >
                {lastMessage.author}
              </Typography>
              {lastMessage.message}
            </React.Fragment>
        )
      }/>
    </ListItemButton>
  );
}
