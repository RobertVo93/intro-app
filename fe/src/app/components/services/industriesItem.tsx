import { Box } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ServiceType } from "./type";


export default function IndustriesItem({field, image}: ServiceType){
  return(
    <Box className='w-full h-full mb-[15px] flex flex-col border-solid bg-[#f5f2f2] cursor-pointer hover:shadow-md transition-shadow duration-500'
      sx={{
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
      <div className="flex items-center px-[10px] pt-[10px] text-[16px] leading-[16px] font-bold text-[#002042] cursor-pointer">
        Learn more <ArrowRightAltIcon className='text-red-700'/> 
      </div>
    </Box>
  )
}