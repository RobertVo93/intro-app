import { Box } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ServiceType } from "./type";
import { red } from "../../theme";


export default function IndustriesItem({field, image}: ServiceType){
  return(
    <Box
      sx={{
        width: "100%", 
        height: "100%", 
        mb: "15px", 
        display: "flex", 
        flexDirection: "column",
        bgcolor: "#f5f2f2", 
        cursor: "pointer", 
        transitionProperty: "box-shadow", 
        transitionDuration: 500,
        '&:hover': {
          '& #user-name': {
            color: red[500],
          },
        }
      }}
    >
      <img src={image} alt='' className='full h-[178px]'/>
      <div 
        id='user-name' 
        className='w-full px-[10px] mt-[10px] text-[18px] font-semibold leading-[24px] text-black transition ease-in-out delay-150'
      >
        {field}
      </div>
      <div className="flex items-center px-[10px] pt-[10px] text-[16px] leading-[16px] font-bold text-primary cursor-pointer">
        Learn more <ArrowRightAltIcon sx={{ color: red[700]}} /> 
      </div>
    </Box>
  )
}