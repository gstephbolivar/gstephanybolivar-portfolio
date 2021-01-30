import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  ArrowBack,
  EmojiPeople,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../../images/stephany2.png";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <EmojiPeople />,
    listText: "About Me",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
  },
];

const NavBar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const togglesSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();

  const sideList = (slider) => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src={avatar}
        alt="Stephany Bolivar Head shot"
      />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      {/* <Box className={classes.menuSliderContainer} component="div">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Stephany Bolivar Head shot"
        />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key}>
              <ListItemIcon className={classes.listItem}>
                  {lsItem.listIcon}
                  <ListItemText className={classes.listItem} primary={lsItem.listText}/>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box> */}
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
