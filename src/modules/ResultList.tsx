import { useSelector } from "react-redux";
import { Typography, useTheme } from "@mui/material";
import { selectResults } from "../common/state/PropertyListSelectors";



const ResultList = () => {
  const theme = useTheme();
  const results = useSelector(selectResults);
  
  if(!results) return null;
  return (
    <>
    {
      Object.values(results).map((p: any, i: number) => (
        <Typography key={i}>{p.id}</Typography>
      ))
    }
    </>
  )
}

export default ResultList;