import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    //allowed for scrolling vs no scrolling // cards showing up or not
    minHeight: "100vh",
    display: "flex",
    // centered content horizontally
    justifyContent: "center",
    // centered vertically slightly when items were different sizes
    alignItems: "center",
    // makes it responsive
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default function () {
  const classes = useStyles();

  const checked = useWindowPosition("header");

  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} />
    </div>
  );
}
