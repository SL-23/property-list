import { useSelector } from "react-redux";
import {Box, Typography, useTheme } from "@mui/material";
import { selectResults, selectDisabled } from "../common/state/PropertyListSelectors";
import PropertyBox from "./common/PropertyBox";
import { PropertyItem } from "../common/state/PropertyListModels";


const ResultList = () => {
  const theme = useTheme();
  const results = useSelector(selectResults);
  const disabledList = useSelector(selectDisabled);
  
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
        Object.values(results).map((p: PropertyItem, i: number) => (
          <PropertyBox
            key={i}
            agency={p.agency}
            price={p.price}
            mainImage={p.mainImage}
            saved={p.saved}
            expired={p.expired}
            disabled={p.disabled}
            propertyId={p.id}
            showDisableButton={true}
          />
        ))
      }
      {
        disabledList && Object.values(disabledList).map((p: PropertyItem, i: number) => (
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

export default ResultList;