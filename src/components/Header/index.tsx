import React from "react";
import { Box, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: "74px",
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    justifyContent: "center",

    margin: "0 auto",
  },
  row: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1000px",
    },

    [theme.breakpoints.up("xl")]: {
      maxWidth: "1400px",
    },
  },
}));

interface IHeaderProps {}

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Grid container className={classes.row}>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
};

export default Header;
