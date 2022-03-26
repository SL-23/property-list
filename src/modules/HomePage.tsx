import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography, IconButton, useTheme } from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';
import { LoadInitialData } from "../common/state/PropertyListActions";
import { selectResults, selectStatus } from "../common/state/PropertyListSelectors";
import ResultList from "./ResultList";
import SavedList from "./SavedList";

const HomePage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  console.log(status);
  useEffect(() => {
    dispatch(LoadInitialData());
  }, [])
  if(!status) return null;
  if(status.empty) return null;
  if(!status.ready) console.log("loading"); 
  
  return (
    <Container 
      maxWidth="md"
      sx={{
        minHeight: "1000px",
      }}
    >
      <AppBar
        color="transparent"
        position="relative"
        sx={{
          boxShadow: "none"
        }}
      >
        <Toolbar>
          <IconButton
            size="small"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            color={theme.palette.secondary.dark}
            sx={{ flexGrow: 1 }}
          >
            Property list
          </Typography>
         
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={6}>
          <ResultList/>
        </Grid>
        <Grid item xs={6}>
          <SavedList/>
        </Grid>

      </Grid>
      
    </Container>
  )
}

export default HomePage;