import { useMediaQuery } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuItem from "./menuItem"
import { useRouter } from "@/src/navigation";
import { useDispatch } from "react-redux";
import { setCloseDetailMenu } from "@/src/redux/mobileNavbarSlice";

const ServicesMenu = ({
  industries, practices, onMenuBack
} : {
  industries:string[], 
  practices:string[], 
  onMenuBack: () => void
}) => {
  const isXs = useMediaQuery('(max-width:640px)')
  const router = useRouter()
  const dispatch = useDispatch()

  return(
    <>
      {isXs ? 
        <div className="w-full h-full px-[30px] text-white flex flex-col overflow-auto z-50">
          <div className="flex items-center uppercase mt-[15px]"
            onClick={onMenuBack}
          >
            <ArrowBackIosIcon /> back
          </div>
          <div className="flex items-center uppercase mt-[15px] pb-[10px] border-b-2 border-solid border-white"
            onClick={() =>{
              router.push('/services')
              dispatch(setCloseDetailMenu())
            }}
          >
            Services
          </div>
          <div className="flex flex-col">
            <div className="flex items-center uppercase h-[45px]">
              Industries
            </div>
            <div>
              {industries.map((industry) => (
                <MenuItem title={industry} key={industry}/>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center uppercase h-[45px]">
              Practices
            </div>
            <div>
              {practices.map((practice) => (
                <MenuItem title={practice} key={practice}/>
              ))}
            </div>
          </div>
        </div> :
        <div className='w-[800px] flex text-white text-[15px] font-normal leading-5 normal-case z-[9999]'>
          <div className='w-1/3 h-full flex flex-col border-r-2 border-solid border-[#1a497b]'>
            <div className='font-bold'>Industries</div>
            <div className='mt-[5px]'>
              {industries.map((industry) => (
                <MenuItem key={industry} title={industry}/>
              ))}
            </div>
          </div>

          <div className='w-full flex flex-col pl-[40px] '>
            <div className='font-bold'>Practices</div>
            <div className='w-1/2 h-[320px] mt-[5px]'
              style={{
                columnWidth: '300px',
                columnCount: 8
              }}
            >
              {practices.map(practice => (
                <MenuItem key={practice} title={practice}/>
              ))}
            </div>
          </div>
        </div>
      }
    </>
    
  )
}

const OthersMenu = ({
  items, 
  menuWidth, 
  name,
  onMenuBack
}:{
  items:string[], 
  menuWidth: number, 
  name:string,
  onMenuBack: () => void
}) => {
  const isXs = useMediaQuery('(max-width:640px)')
  const router = useRouter()
  const dispatch = useDispatch()

  return(
    <div 
      className={`flex flex-col text-white text-[15px] font-normal leading-5 z-[9999] xs:px-[30px] xs:w-full`}
      style={{
        width: isXs ? '100%' :`${menuWidth}px`
      }}
    > 
      {
        isXs ? 
        <div>
          <div className="flex items-center uppercase mt-[15px]"
            onClick={onMenuBack}
          >
            <ArrowBackIosIcon /> back
          </div>
          <div className="flex items-center uppercase mt-[15px] pb-[10px] border-b-2 border-solid border-white"
            onClick={() => {
              if(name === 'locations') {
                router.push('/')
                dispatch(setCloseDetailMenu())
              } else if(name === 'about') {
                router.push('/about')
                dispatch(setCloseDetailMenu())
              } else {
                console.log('Can not navigate right now')
              }
            }}
          >
            {name}
          </div>
        </div> :
        null
      }
      {
        items.map(location => (
          <MenuItem key={location} title={location}/>
        ))
      }
    </div>
  )
}

export { ServicesMenu, OthersMenu }