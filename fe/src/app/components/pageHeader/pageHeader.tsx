

import { useEffect, useState } from "react";
import LocationHeader from "./locationHeader";
import ServiceHeader from "./servicesHeader";
import AutomotiveHeader from "./automotiveHeader";
import ContactHeader from "./contactHeader";
import AboutHeader from "./aboutHeader";
import HistoryHeader from "./historyHeader";
import { useTranslations } from "next-intl";
import { usePathname } from "@/src/navigation";

export default function PageHeader(){
  const pathname = usePathname()
  let translationCollection;
  
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
      style={{ height: `${Number(t('header.height'))}px` }}
    >
      <div className='w-full bg-black flex' style={{ height: `${Number(t('header.height'))}px`}}>
        <div className="w-1/2 h-full"></div>
        <img src={t('header.backgroundImg')} alt="" className='w-1/2 h-full' />
      </div>

      <div 
        className={`w-full h-full flex absolute top-0 left-0 bg-gradient-to-r from-[#002042] from-50% to-[rgba(0,0,0,0)] to-100%`}
        style={{ height: `${Number(t('header.height'))}px`}}  
      >
        <div className={`w-2/3 h-full flex flex-col justify-start px-[10px] pt-[160px] mx-[52px] text-white`}>
          <div className="w-full h-5 text-[12px] leading-[18px] font-semibold uppercase not-italic">
            {t("header.tag")}
          </div>
          <div className="w-full h-[103px] mb-5 text-[48px] leading-[58px] font-bold not-italic flex flex-col-reverse">
            {t('header.title')}
          </div>
          {headerComponent}
        </div>
      </div>
    </div>
  )
}
