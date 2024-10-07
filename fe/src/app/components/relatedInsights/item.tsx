import { Box, useMediaQuery } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { RelatedInsightType } from "./type";
import { red } from "../../theme";

export default function RelatedInsightItem({time, title, description}: RelatedInsightType){
  const isXs = useMediaQuery('(max-width:640px)')
  return(
    <Box
      sx={{
        width: isXs ? "full" : "210px", 
        height: "100%", 
        pb: "12px", 
        display: "flex", 
        flexDirection: "column",
        bgcolor: "#f5f2f2", 
        cursor: "pointer", 
        transitionProperty: "box-shadow", 
        transitionDuration: 500,
        '&:hover': {
          '& #title': {
            color: red[500],
          },
        }
      }}
    >
      <div 
        className='w-full px-[10px] mt-[10px] text-[12px] font-normal leading-[16px] text-[#979797] transition ease-in-out delay-150'
      >
        {time}
      </div>
      <div 
        id='title' 
        className='w-full px-[10px] mt-[10px] text-[16px] font-semibold leading-[24px] text-secondary transition ease-in-out delay-150'
      >
        {title}
      </div>
      <div className='w-full h-[160px] px-[10px] mt-[10px] overflow-hidden text-[14px] font-normal leading-[18px] text-primary xs:hidden'>
        {description}
      </div>
      <div className='w-full px-[10px] flex items-center mt-[20px] text-[16px] leading-[16px] font-bold text-primary cursor-pointer'>
        Read More <ArrowRightAltIcon className='text-red-700'/>
      </div>
    </Box>
  )
}