import { Box, Typography, useTheme } from "@mui/material";
import { Logo } from "../../resources";

const Header = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        bgcolor: "#FFFFFF",
        zIndex: 1000,
        borderBottom: `1px solid #F1F1F1`,
      }}
    >
      <Box 
        sx={{ 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 1,
        }}
      >
        <img src={Logo} width="8%"/>
      </Box>
    </Box>
  )
}

export default Header;