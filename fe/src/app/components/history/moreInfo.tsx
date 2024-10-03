import RemoveIcon from '@mui/icons-material/Remove';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useTranslations } from 'next-intl';

export default function MoreInfo({translationCollection}:{translationCollection:string}){
  const t = useTranslations(translationCollection)

  return(
    <div className="w-full h-[560px] flex relative">
      <img 
        alt="" 
        src="https://www.tilleke.com/wp-content/uploads/2020/10/Cover_Wise_Counsel_1-scaled.jpg" 
        className="w-1/2 h-full absolute top-0 left-0"
      />
      <div className="w-3/4 h-full absolute top-0 right-0 z-50 bg-gradient-to-l from-white from-70% to-100%"></div>

      <div className='w-1/2 h-full absolute top-0 right-0 z-50 flex flex-col'>
        <div className='text-[14px] leading-5 uppercase not-italic font-semibold flex items-center text-[#002042] pt-[20px]'>
          <RemoveIcon sx={{height: "30px", color: "#b91c1c", }} /> {t("wiseCounsel.tag")}
        </div>
        <div className='text-[#002042] text-[36px] not-italic font-semibold leading-[46px] mt-[25px] pr-[25%]'>
          {t("wiseCounsel.tag")} <br/> {t("wiseCounsel.title")}
        </div>
        <div className='text-[#222222] text-[16px] font-normal leading-[24px] mt-[25px] pr-[20%]'>
          {t("wiseCounsel.description")}
        </div>
        <div className="flex items-center px-[10px] mt-[30px] text-[16px] leading-[16px] font-bold text-[#002042] cursor-pointer">
        {t("wiseCounsel.buttonText")} <ArrowRightAltIcon sx={{color: "#b91c1c"}}/> 
        </div>
      </div>
    </div>
  )
}