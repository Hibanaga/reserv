import React, { FC, ReactNode } from "react";
import { Box, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.light,
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

interface ILayoutProps {
  children?: ReactNode;
  header?: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ header, children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Grid container className={classes.row}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
