import React from "react";

import {
  Avatar,
  ListItem,
  ListItemText,
  Stack,
  Grid,
  TextField,
  ListItemButton,
  Divider,
  List,
  ListItemIcon
} from "@mui/material";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});
function MessageList() {
  const classes = useStyles();

  return (
    <Stack direction="column" spacing={4} sx={{ width: "100%" }}>
      <Grid container className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            <Grid style={{ padding: "10px" }}>
              <ListItemButton key="RemySharp" disablePadding={false} padding>
                <ListItemIcon padding>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Remy Sharp">Resssmy Sharp</ListItemText>
                <ListItemText secondary="online" align="right"></ListItemText>
              </ListItemButton>
            </Grid>

            <ListItemButton key="Alice">
              <ListItemIcon>
                <Avatar
                  alt="Alice"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Alice">Alice</ListItemText>
            </ListItemButton>

            <ListItemButton key="CindyBaker">
              <ListItemIcon>
                <Avatar
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
            </ListItemButton>
          </List>
        </Grid>

        <Grid item xs={9}>
          <List className={classes.messageArea}>
            <ListItem key="0">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemIcon>
                    <Avatar
                      alt="Alice"
                      src="https://material-ui.com/static/images/avatar/3.jpg"
                    />{" "}
                    <ListItemText align="left" primary="Hey !" />
                  </ListItemIcon>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="left" secondary="09:31"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>

            <ListItem key="1">
              <Grid container>
                <Grid item xs={12} align="right">
                  <ListItemIcon direction="row">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                    <ListItemText
                      align="right"
                      primary="Hey man, What's up ?"
                    />
                  </ListItemIcon>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="09:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>

            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="left"
                    primary="Hey, Iam Good! What about you ?"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="left" secondary="09:31"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="right"
                    primary="Cool. i am good, let's catch up!"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="10:30" />
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            {/* <Grid xs={1} align="right">
              <Fab color="primary" aria-label="add">
                <SendIcon />
              </Fab>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default MessageList;
