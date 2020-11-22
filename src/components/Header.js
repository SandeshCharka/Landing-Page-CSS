import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    // Flexible position?
    display: "flex",
    // Horizontal center
    justifyContent: "center",
    alignItems: "center",
    // Pushes to the center(middle) vertically
    height: "100vh",
    // Taken from google fonts
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    // wont be centered
    width: "80%",
    // margin 0 and auto will push to center
    margin: "0 auto",
  },
  appbarTitle: {
    // flexgrow will 'push' separate from each other.
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        {/* Toolbar is like a div container that is already "flex" */}
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My
            <span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> My
            <span className={classes.colorText}>Island.</span>
          </h1>
          <Scroll to='place-to-visit' smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
