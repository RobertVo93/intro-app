
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import LocationHeader from "./locationHeader";
import ServiceHeader from "./servicesHeader";
import AutomotiveHeader from "./automotiveHeader";
import ContactHeader from "./contactHeader";
import AboutHeader from "./aboutHeader";

export default function PageHeader(){
  const pathname = usePathname()
  const homeBackground = 'https://image.vietnam.travel/sites/default/files/styles/article_photo_large/public/2017-11/things%20to%20do%20in%20hcmc-3.jpg?itok=7TX7muVt'
  const servicesBackground = 'https://image.vietnamnews.vn/uploadvnnews/Article/2019/4/26/7375_du-lich-quy-nhon-1.jpg'
  const automotiveBackground = 'https://filesblog.technavio.org/wp-content/uploads/2018/09/car-engine-manufacturers.jpg'
  const contactBackground = 'https://www.receptionhq.com/wp-content/uploads/2021/09/how-to-answer-business-phone-calls-social_share-800x600.jpg'
  const aboutBackground = 'https://officebanao.com/wp-content/uploads/2024/03/modern-office-room-with-white-walls.jpg'

  const [headerHeight, setHeaderHeight] = useState(0)
  const [locationPath, setLocationPath] = useState('HOME // LOCATIONS // Vietnam')
  const [locationTitle, setLocationTitle] = useState('Vietnam')
  const [headerBackground, setHeaderBackground] = useState(homeBackground)
  const [headerComponent, setHeaderComponent] = useState(<LocationHeader />)


  useEffect(() => {
    if(pathname.includes('/services')) {
      if(pathname.includes('/services/automotive')) {
        setHeaderHeight(600)
        setLocationPath('HOME // SERVICES // AUTOMOTIVE')
        setLocationTitle('Automotive')
        setHeaderBackground(automotiveBackground)
        setHeaderComponent(<AutomotiveHeader />)
      } else {
        setHeaderHeight(510)
        setLocationPath('HOME // SERVICES')
        setLocationTitle('Services')
        setHeaderBackground(servicesBackground)
        setHeaderComponent(<ServiceHeader />)
      }
    } else if(pathname.includes('/contact')) {
      setHeaderHeight(475)
      setLocationPath('HOME // CONTACT')
      setLocationTitle('Contact')
      setHeaderBackground(contactBackground)
      setHeaderComponent(<ContactHeader />)
    } else if(pathname.includes('/about')) {
      setHeaderHeight(475)
      setLocationPath('HOME // ABOUT ')
      setLocationTitle('Southeast Asia’s Premier Law Firm')
      setHeaderBackground(aboutBackground)
      setHeaderComponent(<AboutHeader />)
    }
    else {
      setHeaderHeight(475)
      setLocationPath('HOME // LOCATIONS // Vietnam')
      setLocationTitle('Vietnam')
      setHeaderBackground(homeBackground)
      setHeaderComponent(<LocationHeader />)
    }
    console.log('page header height: ', headerHeight)
  }, [pathname])
  
  return(
    <div 
      className={`w-full relative`} 
      style={{ height: `${headerHeight}px` }}
    >
      <div className='w-full bg-black flex' style={{ height: `${headerHeight}px`}}>
        <div className="w-1/2 h-full"></div>
        <img src={headerBackground} alt="" className='w-1/2 h-full' />
      </div>

      <div 
        className={`w-full h-full flex absolute top-0 left-0 bg-gradient-to-r from-[#002042] from-50% to-[rgba(0,0,0,0)] to-100%`}
        style={{ height: `${headerHeight}px`}}  
      >
        <div className={`w-2/3 h-full flex flex-col justify-start px-[10px] pt-[160px] mx-[52px] text-white`}>
          <div className="w-full h-5 text-[12px] leading-[18px] font-semibold uppercase not-italic">
            {locationPath}
          </div>
          <div className="w-full h-[103px] mb-5 text-[48px] leading-[58px] font-bold not-italic flex flex-col-reverse">
            {locationTitle}
          </div>
          {headerComponent}
        </div>
      </div>
    </div>
  )
}
