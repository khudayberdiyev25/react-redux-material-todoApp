import React from "react";
import FilterLink from "../redux/containers/FilterLink.jsx";
import { VisibilityFilters } from "../redux/actions/";
import { Box } from "@material-ui/core";

const Footer = () => {
  return (
    <Box component="span" m={1}>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </Box>
  );
};

export default Footer;
