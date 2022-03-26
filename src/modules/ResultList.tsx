import { useSelector } from "react-redux";
import {Box, Typography, useTheme } from "@mui/material";
import { selectResults } from "../common/state/PropertyListSelectors";
import PropertyBox from "./common/PropertyBox";

const ResultList = () => {
  const theme = useTheme();
  const results = useSelector(selectResults);
  console.log(results);
  if(!results) return null;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <Typography>
        Results
      </Typography>
      {
        Object.values(results).map((p: any, i: number) => (
          <PropertyBox
            key={i}
            agency={p.agency}
            price={p.price}
            mainImage={p.mainImage}
            saved={p.saved}
            expired={p.expired}
          />
        ))
      }
    </Box>
  )
}

export default ResultList;