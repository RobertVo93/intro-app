import { Box } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ServiceType } from "./type";


export default function PracticesItem({field, image}: ServiceType){
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
            color: 'red',
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
      <div className="flex items-center px-[10px] pt-[15px] text-[16px] leading-[16px] font-bold text-[#002042] cursor-pointer">
        Learn more <ArrowRightAltIcon sx={{ color: "#b91c1c"}} /> 
      </div>
    </Box>
  )
}