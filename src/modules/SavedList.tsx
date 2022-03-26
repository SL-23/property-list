import { useSelector } from "react-redux";
import { Typography, useTheme } from "@mui/material";
import { selectSaved } from "../common/state/PropertyListSelectors";

const SavedList = () => {
  const theme = useTheme();
  const saved = useSelector(selectSaved);
  
  if(!saved) return null;
  return (
    <>
    {
      Object.values(saved).map((p: any, i: number) => (
        <Typography key={i}>{p.id}</Typography>
      ))
    }
    </>
  )
}

export default SavedList;