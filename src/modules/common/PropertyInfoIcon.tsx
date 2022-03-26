import { AppBar, Box, Button, Container, Grid, Toolbar, Typography, Stack, IconButton, useTheme } from "@mui/material";

interface PropertyInfoIconProps {
  icon: React.ReactNode;
  text: string
}
const PropertyInfoIcon = (props: PropertyInfoIconProps) => {
  const theme = useTheme();
  return (
   <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      color: theme.palette.secondary.dark
    }}
   >
    {props.icon}
    <Typography sx={{ ml: 1, mr: 1.5 }}>{props.text}</Typography>
   </Box>
  )
}

export default PropertyInfoIcon;