import React, { FC, ReactNode } from "react";
import { Box, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: "74px",
    backgroundColor: theme.palette.secondary.dark,
  },
}));

interface ILayoutProps {
  children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
