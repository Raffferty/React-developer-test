import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/";

const navigationItems = props => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
    <NavigationItem link="/news">News</NavigationItem>
    <NavigationItem link="/profile">Profile</NavigationItem>
    <NavigationItem link="/login">Login</NavigationItem>
  </ul>
);

export default navigationItems;
