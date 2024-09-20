import { Box } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function RelatedInsightItem({time, title, description}: RelatedInsightType){
  return(
    <Box className='w-[210px] h-full pb-3 flex flex-col border-solid bg-[#f5f2f2] cursor-pointer hover:shadow-md transition-shadow duration-500'
      sx={{
        '&:hover': {
          '& #title': {
            color: 'red',
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
        className='w-full px-[10px] mt-[10px] text-[16px] font-semibold leading-[24px] text-[#222222] transition ease-in-out delay-150'
      >
        {title}
      </div>
      <div className='w-full h-[160px] px-[10px] mt-[10px] overflow-hidden text-[14px] font-normal leading-[18px] text-[#002042] '>
        {description}
      </div>
      <div className='w-full px-[10px] flex items-center mt-[20px] text-[16px] leading-[16px] font-bold text-[#002042] cursor-pointer'>
        Read More <ArrowRightAltIcon className='text-red-700'/>
      </div>
    </Box>
  )
}