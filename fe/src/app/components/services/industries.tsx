import { useTranslations } from "next-intl"
import ComponentNameTag from "../componentNameTag";

export default function Industries(){
  const t = useTranslations('locations.overview')
  return(
    <div className="w-full full flex flex-col px-[60px] py-[80px] text-[14px] text-[#002042] font-semibold">
      <ComponentNameTag name='industries'/>
      <div className="flex">
        <div className="w-1/2 text-[36px] leading-[46px] not-italic mr-[50px]">
          industries
        </div>
        <div className="w-1/2 font-sans text-[16px] leading-6 text-[#222222]">
          {t('description1')} <br />
          {t('description2')} 
        </div>
      </div>
    </div>
  )
}