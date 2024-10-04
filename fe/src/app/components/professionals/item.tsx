import { Box } from "@mui/material";
import Image from "next/image";
import User from '@images/user.png'
import { ProfessionalsType } from "./type";
import { red } from "../../theme";


export default function ProfessionalsItem({name, position}: ProfessionalsType){
  return(
    <Box
      sx={{
        width: "210px", 
        height: "300px", 
        pb: "12px", 
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
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
        }
      }}
    >
      <Image src={User} alt='' className='w-[210px] h-[250px]'/>
      <div 
        id='user-name' 
        className='w-full px-[10px] mt-[10px] text-[16px] font-semibold leading-[24px] text-secondary transition ease-in-out delay-150'
      >
        {name}
      </div>
      <div className='w-full px-[10px] mt-[10px] flex-wrap text-[14px] font-normal leading-[18px] text-primary'>
        {position}
      </div>
    </Box>
  )
}