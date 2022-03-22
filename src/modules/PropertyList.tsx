import { AppBar,Box, Button, Container, Toolbar, Typography, IconButton, useTheme } from "@mui/material";
import * as React from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';


const PropertyList = () => {
  const theme = useTheme();
  console.log(theme.palette);
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

      
      
    </Container>
  )
}

export default PropertyList;