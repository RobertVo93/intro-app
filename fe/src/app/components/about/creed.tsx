import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useTranslations } from 'next-intl';

export default function Creed({translationCollection}:{translationCollection:string}){
  const t = useTranslations(translationCollection)
  const lawFirmItems = t.raw("creed.lawFirm.items") as string[]
  const facilitiesItems = t.raw("creed.facilities.items") as string[]

  return(
    <div className="w-full h-full flex text-[#002042]">
      <div className="w-1/2 h-full flex flex-col">
        <div className='text-[20px] font-bold leading-[26.6px]'>
          {t("creed.lawFirm.title")}
        </div>
        {
          lawFirmItems.map((item, index) => (
            <div key={index} className='text-[16px] font-normal leading-[24px] text-[#222222] mt-[10px]'>
              <FiberManualRecordIcon className='w-[10px] h-[10px] text-black'/> {item}
            </div>
          ))
        }
      </div>
      <div className="w-1/2 h-full flex flex-col">
        <div className='text-[20px] font-bold leading-[26.6px]'>
          {t("creed.facilities.title")}
        </div>
        {
          facilitiesItems.map((item, index) => (
            <div key={index} className='text-[16px] font-normal leading-[24px] text-[#222222] mt-[10px]'>
              <FiberManualRecordIcon className='w-[10px] h-[10px] text-black'/> {item}
            </div>
          ))
        }
      </div>
    </div>
  )
}