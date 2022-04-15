import { useSelector } from "react-redux";
import {Box, Typography, useTheme } from "@mui/material";
import { selectSaved } from "../common/state/PropertyListSelectors";
import PropertyBox from "./common/PropertyBox";

const SavedList = () => {
  const theme = useTheme();
  const saved = useSelector(selectSaved);
  if(!saved) return null;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <Typography>Saved</Typography>
      {
        Object.values(saved).map((p: any, i: number) => (
          <PropertyBox
            key={i}
            agency={p.agency}
            price={p.price}
            mainImage={p.mainImage}
            saved={p.saved}
            expired={p.expired}
            disabled={p.disabled}
            propertyId={p.id}
            showDisableButton={false}
          />
        ))
      }
    </Box>
  )
}

export default SavedList;