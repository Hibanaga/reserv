import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC, ReactNode } from "react";
import { themes } from "../../styles/themes";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "74px",
    backgroundColor: themes.colors.baseBlack,
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
