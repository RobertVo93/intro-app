import { useTranslations } from "next-intl"
import ComponentNameTag from "./componentNameTag";

export default function Overview({translationCollection}: {translationCollection: string}){
  const t = useTranslations(`${translationCollection}.overview`)
  const descriptions = t.raw("descriptions") as string[]

  return(
    <div className="w-full full flex flex-col px-[60px] py-[80px] xs:px-[20px] xs:py-[20px] text-[14px] text-primary font-semibold">
      <ComponentNameTag name={t('overview')}/>
      <div className="flex xs:flex-col mt-[30px] xs:mt-[10px]">
        <div className="w-1/2 xs:w-full text-[36px] xs:text-[24px] leading-[46px] not-italic mr-[50px] xs:leading-[30px]">
          {t('title')}
        </div>
        <div className="w-1/2 xs:w-full font-sans text-[16px] leading-6 text-secondary xs:mt-[20px]">
          {
            descriptions.map((item: string, index: number) =>(
              <div key={index} className="font-normal">{item}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}