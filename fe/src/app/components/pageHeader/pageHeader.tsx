import HomeBackground from "@images/home-background.png"
import ServicesBackground from '@images/services-background.png'
import Image from "next/image";
import { usePathname } from 'next/navigation'
import LocationHeaderComponent from "./locationHeaderComponent";
import ServiceHeaderComponent from "./servicesHeaderComponent";

export default function PageHeader(){
  const pathname = usePathname()
  console.log('pathname', pathname)
  let headerHeight = 475
  let locationPath = ''
  let locationTitle = ''
  let background
  let component

  if(pathname.includes('/services')) {
    headerHeight = 510
    locationPath = 'HOME // SERVICES'
    locationTitle = 'Services'
    background = ServicesBackground
    component = <ServiceHeaderComponent />
  } else {
    headerHeight = 475
    locationPath = 'HOME // LOCATIONS // Vietnam'
    locationTitle = 'Vietnam'
    background = HomeBackground
    component = <LocationHeaderComponent />
    
  }

  return(
    <div>
      <div className={`w-full h-[${headerHeight}px] bg-black flex`}>
        <div className="w-1/2 h-full"></div>
        <Image src={background} alt="" className={`w-1/2 h-[${headerHeight}px]`} />
      </div>

      <div className={`w-full h-[${headerHeight}px] flex absolute top-0 left-0 bg-gradient-to-r from-[#002042] from-50% to-[rgba(0,0,0,0)] to-100%`}>
        <div className="w-2/3 flex flex-col justify-start px-[10px] pt-[160px] mx-[52px] text-white ">
          <div className="w-full h-5 text-[12px] leading-[18px] font-semibold uppercase not-italic">
            {locationPath}
          </div>
          <div className="w-full h-[103px] mb-5 text-[48px] leading-[58px] font-bold not-italic flex flex-col-reverse">
            {locationTitle}
          </div>
          {component}
        </div>
      </div>
    </div>
  )
}
