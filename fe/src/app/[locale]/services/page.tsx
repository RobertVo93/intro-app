'use client'

import { useMediaQuery } from "@mui/material";
import Industries from "../../components/services/industries";
import Practices from "../../components/services/practices";
import { useState } from "react";

export default function Services(){
  const isXs = useMediaQuery('(max-width:640px)')
  const [isShowIndustries, setIsShowIndustries] = useState(true)
  return(
    <div>
      {
        isXs ? 
        <div className="w-full h-full flex flex-col">
          <div
            className="w-full h-[50px] flex items-center justify-evenly text-white bg-primary"
          >
            <div onClick={() => setIsShowIndustries(true)} className={isShowIndustries ? 'font-bold' : 'font-normal'}>Industries</div>
            <div onClick={() => setIsShowIndustries(false)}>Practices</div>
          </div>
          {isShowIndustries ? <Industries /> : <Practices />}
        </div> : 
        <div className="w-full h-full flex flex-col">
          <Industries />
          <Practices />
        </div>
      }
      

    </div>
  )
}