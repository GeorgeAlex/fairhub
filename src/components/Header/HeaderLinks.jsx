/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, AccountCircle } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
            <Button
                href="/"
                color="transparent"
                className={classes.navLink}
            >
                Home
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="#how-it-works"
                color="transparent"
                className={classes.navLink}
            >
                How it works?
            </Button>
        </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/login-page"
          color="transparent"
          className={classes.navLink}
        >
            Log In
        </Button>
      </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="/login-company"
                className={classes.registerNavLinkCompany}
            >
                Post a job
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="/login-applicant"
                className={classes.registerNavLinkApplicant}
            >
                Want a job
            </Button>
        </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
