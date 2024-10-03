import { useTranslations } from "next-intl"
import ComponentNameTag from "./componentNameTag";

export default function Overview({translationCollection}: {translationCollection: string}){
  const t = useTranslations(`${translationCollection}.overview`)
  const descriptions = t.raw("descriptions") as string[]

  return(
    <div className="w-full full flex flex-col px-[60px] py-[80px] text-[14px] text-primary font-semibold">
      <ComponentNameTag name={t('overview')}/>
      <div className="flex mt-[30px]">
        <div className="w-1/2 text-[36px] leading-[46px] not-italic mr-[50px]">
          {t('title')}
        </div>
        <div className="w-1/2 font-sans text-[16px] leading-6 text-secondary">
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