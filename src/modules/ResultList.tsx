import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppBar,Box, Button, Container, Toolbar, Typography, IconButton, useTheme } from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';
import { LoadInitialData } from "../common/state/PropertyListActions";
import { selectResults } from "../common/state/PropertyListSelectors";



const ResultList = () => {
  const theme = useTheme();
  const results = useSelector(selectResults);
  console.log(results);
  return (
    <div>
    
    </div>
  )
}

export default ResultList;