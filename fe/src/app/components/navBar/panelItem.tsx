import { useState } from "react"
import RemoveIcon from '@mui/icons-material/Remove';
import {NavbarItemTransition, NavbarIconTransition} from "../transitions/navbarItemTransition";

export default function PanelItem({
  title
}: {
  title:string
}){
  const [isHover, setIsHover] = useState(false)
  return(
    <NavbarItemTransition>
      <div 
        className='h-[40px] py-[10px] cursor-pointer flex'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
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