'use client'

import { useState } from "react"
import {NavbarIconTransition} from "../transitions/navbarItemTransition";
import { useRouter } from "@/src/navigation";

export default function PanelItem({
  title
}: {
  title:string
}){
  const [isHover, setIsHover] = useState(false)
  const router = useRouter()

  const onNavigate = () => {
    if(title === 'Automotive' || title === 'History') {
      router.push(`/${title}`.toLocaleLowerCase())
    } else {}
  }

  return(
    <div 
      className={`h-[40px] py-[10px] cursor-pointer flex 'text-white' transition-colors duration-500 hover:font-semibold hover:text-red-500`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onNavigate}
    >
      {isHover ? 
        <NavbarIconTransition>
          <div className="w-full h-full flex items-center mr-[2px]">
            <div className="w-full border-t-2 border-solid border-red-600"></div>
          </div>
        </NavbarIconTransition> : 
        null
      } 
      {title} 
    </div>
  )
}