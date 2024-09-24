'use client'

import { useState } from "react"
import RemoveIcon from '@mui/icons-material/Remove';
import {NavbarItemTransition, NavbarIconTransition} from "../transitions/navbarItemTransition";
import { useRouter } from "@/src/navigation";
import { usePathname } from "next/navigation";

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
    <NavbarItemTransition>
      <div 
        className='h-[40px] py-[10px] cursor-pointer flex'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onNavigate}
      >
        {isHover ? 
          <NavbarIconTransition>
            <RemoveIcon />
          </NavbarIconTransition> : 
          null
        } {title} 
      </div>
    </NavbarItemTransition>
    
  )
}