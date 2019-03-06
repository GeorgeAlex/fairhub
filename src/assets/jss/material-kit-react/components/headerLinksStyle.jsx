import { defaultFont } from "assets/jss/material-kit-react.jsx";

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.jsx";

const headerLinksStyle = theme => ({
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    textTransform: "unset",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "rgb(19, 77, 115)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLinkApplicant: {
    marginTop: "0.7rem",
    backgroundColor: "rgb(62, 127, 178)",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    marginLeft: "10px",
    marginRight: "10px",
    padding: "5px 10px",
    textDecoration: "none",
    textTransform: "unset",
    display: "inline-flex",
    "&:hover,&:focus": {
      backgroundColor: "rgba(62, 127, 178, 0.5)"
    }
  },
  registerNavLinkCompany: {
    marginTop: "0.7rem",
    backgroundColor: "rgb(19, 77, 115)",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    marginLeft: "10px",
    marginRight: "10px",
    padding: "5px 10px",
    textDecoration: "none",
    textTransform: "unset",
    display: "inline-flex",
    "&:hover,&:focus": {
      backgroundColor: "rgba(19, 77, 115, 0.5)"
    }
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    }
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px"
  }
});

export default headerLinksStyle;
