import { useEffect, useState } from "react";
import LocationHeader from "./locationHeader";
import ServiceHeader from "./servicesHeader";
import AutomotiveHeader from "./automotiveHeader";
import ContactHeader from "./contactHeader";
import AboutHeader from "./aboutHeader";
import HistoryHeader from "./historyHeader";
import { useTranslations } from "next-intl";
import { usePathname } from "@/src/navigation";
import { useMediaQuery } from "@mui/material";

export default function PageHeader(){
  const pathname = usePathname()
  const isXs = useMediaQuery('(max-width:640px)')
  let translationCollection;
  let theBackgroundHeight = 340

  if(pathname == '/services') {
    theBackgroundHeight = 500
  } else if(pathname == '/about' || pathname == '/history' || pathname == '/') {
    theBackgroundHeight = 400
  }

  if(pathname == '/') {
    translationCollection='locations'
  } else {
    translationCollection = pathname.replace('/', '')
  }
  const t = useTranslations(translationCollection)

  const [headerComponent, setHeaderComponent] = useState(<LocationHeader />)

  useEffect(() => {
    if(pathname.includes('/services')) {
      setHeaderComponent(<ServiceHeader description={t('header.description')}/>)
    } else if(pathname.includes('/automotive')) {
      setHeaderComponent(<AutomotiveHeader />)
    } else if(pathname.includes('/contact')) {
      setHeaderComponent(<ContactHeader description={t('header.description')}/>)
    } else if(pathname.includes('/about')) {
      setHeaderComponent(<AboutHeader description={t('header.description')}/>)
    } else if(pathname.includes('/history')) {
      setHeaderComponent(<HistoryHeader description={t('header.description')}/>)
    } else {
      setHeaderComponent(<LocationHeader />)
    }
  }, [pathname])

  return(
    <div 
      className={`w-full relative`} 
      style={{ height: isXs ? `${theBackgroundHeight}px` : `${Number(t('header.height'))}px`}}
    >
      <div 
        style={{ height: isXs ? `${theBackgroundHeight}px` : `${Number(t('header.height'))}px`}}
        className={`w-full flex`} 
      >
        <div className="w-1/2 h-full"></div>
        <img src={t('header.backgroundImg')} alt="" className='w-1/2 h-full xs:w-full'/>
      </div>

      <div 
        className={`w-full h-full flex absolute top-0 left-0 bg-gradient-to-r from-themeColor from-50% to-[rgba(0,0,0,0)] to-100% xs:bg-none`}
        style={{ height: isXs ? `${theBackgroundHeight}px` : `${Number(t('header.height'))}px`}}
      >
        <div className={`w-2/3 xs:w-full h-full xs:h-full xs:m-0 flex flex-col justify-start px-[10px] pt-[160px] xs:pt-[120px] mx-[52px] text-white`}>
          <div className="w-full h-5 text-[12px] leading-[18px] font-semibold uppercase not-italic xs:hidden">
            {t("header.tag")}
          </div>
          <div className={`w-full h-[103px] mb-5 text-[48px] leading-[58px] font-bold not-italic flex flex-col-reverse xs:text-[40px] xs:leading-[30px] xs:h-fit xs:mb-0`}>
            {t('header.title')}
          </div>
          {headerComponent}
        </div>
      </div>
    </div>
  )
}
