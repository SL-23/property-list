import { useDispatch } from "react-redux";
import { Box, Button, Typography, Stack, IconButton, useTheme } from "@mui/material";
import { StarBorder as StarBorderIcon, Star as StarIcon, Bed as BedIcon, Shower as ShowerIcon, DirectionsCar as DirectionsCarIcon, AspectRatio as AspectRatioIcon } from '@mui/icons-material';
import { addSave, removeSave, disableProperty } from "../../common/state/PropertyListActions";
import PropertyInfoIcon from "./PropertyInfoIcon";

interface PropertyBoxProps {
  agency:any;
  price: string;
  mainImage: string;
  saved: boolean;
  expired: boolean;
  disabled: boolean;
  propertyId: string;
  showDisableButton: boolean;
}
const PropertyBox = (props: PropertyBoxProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  
  const handleSave = (propertyId: string) => {
    dispatch(addSave(propertyId));
  }

  const handleRemove = (propertyId: string) => {
    dispatch(removeSave(propertyId));
  }

  const handleDisable = (propertyId: string) => {
    dispatch(disableProperty(propertyId));
  }

  return (
   <Box
    sx={{
      width: "640px",
      borderRadius: 2,
      boxShadow: 5,
      mb: 5,
      backgroundColor:( props.expired || props.disabled) ? "#F1F1F1" : "",
      opacity:( props.expired || props.disabled) ? [0, 0, 0.5] : "",
    }}
   >
     <Box
      sx={{
        bgcolor: props.agency.brandingColors.primary,
        borderRadius: "8px 8px 0 0",
        height: "54px",
      }}
     >
      <img src={props.agency.logo} style={{ margin: 8 }}/>
     </Box>

     <img src={props.mainImage}/>
     
     <Stack
      sx={{ p : 3 }}
     >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1
        }}
      >
        <Typography
          variant="h6"
          sx={{
            justifyContent: "flex-start",
            color: theme.palette.secondary.dark
          }}
        >
          <b>{props.price}</b>
        </Typography>
        <Box>
          {props.showDisableButton && 
            <Button
              onClick={() => handleDisable(props.propertyId)}
            >
              Disable
            </Button>
          }
          <IconButton
            sx={{
              justifyContent: "flex-end",
            }}
            onClick={props.saved ? () => handleRemove(props.propertyId) : () => handleSave(props.propertyId)}
          >
            {
            props.saved ?
            <StarIcon
              style={{ color:"#FFC30B" }}
              
            />
            :
            <StarBorderIcon
              
            />
            }
          </IconButton>
        </Box>
      </Box>
      
      <Typography
      
        sx={{
          mb: 1,
          color: theme.palette.secondary.dark
        }}
      >
        1 Goodluck Road, Real, 3000
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <PropertyInfoIcon
          icon={<BedIcon/>}
          text="3"
        />
        <PropertyInfoIcon
          icon={<ShowerIcon/>}
          text="2"
        />
        <PropertyInfoIcon
          icon={<DirectionsCarIcon/>}
          text="1"
        />
        <PropertyInfoIcon
          icon={<AspectRatioIcon/>}
          text="600 m²"
        />
        <Typography 
          color={theme.palette.secondary.light}
          sx={{ mr: 1 }}
        >
          |
        </Typography>
        <Typography sx={{
          color: theme.palette.secondary.dark
        }}>House</Typography>
      </Box>
    </Stack>
    
     
   </Box>
  )
}

export default PropertyBox;