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
  useEffect(() => {
    dispatch(LoadInitialData());
  }, [])
  if(!status) return null;
  if(status.empty) return <div>no data</div>
  if(!status.ready) return <div>loading</div>
  
  return (
    <Container 
      maxWidth="xl"
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