'use client'

import { useMediaQuery } from "@mui/material";
import LocaleSwitcherItem from "./localeSwitcherItem"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function LocaleSwitcher({
  onMenuBack
}:{
  onMenuBack: () => void
}){
  const languages = [
    'English', 'Vietnamese'
  ]
  const isXs = useMediaQuery('(max-width:640px)')

  return (

    <div 
      style={{
        textShadow: "2px 2px 3px black"
      }}
      className={`xs:${'flex flex-col items-center justify-center'} xs:text-white xs:items-start xs:pl-[30px]`}
    >
      {
        isXs ? 
        <div className={`flex items-center uppercase mt-[15px]`}
          onClick={onMenuBack}
        >
          <ArrowBackIosIcon /> back
        </div> : null
      }
      {
        languages.map((lang, index) => 
          <LocaleSwitcherItem lang={lang} key={index}/>
        )
      }
    </div>
  )
}