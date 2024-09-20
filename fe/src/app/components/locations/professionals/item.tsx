import { Box } from "@mui/material";
import Image from "next/image";
import User from '@images/user.png'


export default function ProfessionalsItem({name, position}: ProfessionalsType){
  return(
    <Box className='w-[210px] h-full pb-3 flex flex-col border-solid bg-[#f5f2f2] cursor-pointer hover:shadow-md transition-shadow duration-500'
      sx={{
        '&:hover': {
          '& #user-name': {
            color: 'red',
          },
        }
      }}
    >
      <Image src={User} alt='' className='w-[210px] h-[200px]'/>
      <div 
        id='user-name' 
        className='w-full px-[10px] mt-[10px] text-[16px] font-semibold leading-[24px] text-[#222222] transition ease-in-out delay-150'
      >
        {name}
      </div>
      <div className='w-full px-[10px] mt-[10px] flex-wrap text-[14px] font-normal leading-[18px] text-[#002042]'>
        {position}
      </div>
    </Box>
  )
}