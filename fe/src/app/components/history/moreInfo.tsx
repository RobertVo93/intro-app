'use client '

import RemoveIcon from '@mui/icons-material/Remove';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useTranslations } from 'next-intl';
import { red } from '../../theme';
import { useMediaQuery } from '@mui/material';

export default function MoreInfo({translationCollection}:{translationCollection:string}){
  const t = useTranslations(translationCollection)
  const isXs = useMediaQuery('(max-width:640px)')
  const desktopHeight = 560
  const mobileHeight = 1140

  return(
    <div className={`w-full flex relative`}
      style={{height: isXs ? `${mobileHeight}px` : `${desktopHeight}px`}}
    >
      <img 
        alt="" 
        src="https://www.tilleke.com/wp-content/uploads/2020/10/Cover_Wise_Counsel_1-scaled.jpg" 
        className="w-1/2 h-full absolute top-0 left-0 xs:w-full"
        style={{height: isXs ? `${desktopHeight}px` : ''}}
      />
      <div className="w-3/4 h-full absolute top-0 right-0 z-50 bg-gradient-to-l from-white from-70% to-100% xs:hidden"></div>

      <div className='w-1/2 h-full absolute top-0 right-0 z-50 flex flex-col xs:w-full xs:mb-[20px]'
        style={{height: `${mobileHeight - desktopHeight}px`, top: isXs ? `${desktopHeight}px` : ''}}
      >
        <div className='text-[14px] leading-5 uppercase not-italic font-semibold flex items-center text-primary pt-[20px]'>
          <RemoveIcon sx={{height: "30px", color: red[700], }} /> {t("wiseCounsel.tag")}
        </div>
        <div className='text-primary text-[36px] not-italic font-semibold leading-[46px] mt-[25px] pr-[25%] xs:text-[24px] xs:leading-[24px] xs:px-[20px]'>
          {t("wiseCounsel.tag")} <br/> {t("wiseCounsel.title")}
        </div>
        <div className='text-secondary text-[16px] font-normal leading-[24px] mt-[25px] pr-[20%] xs:px-[20px]'>
          {t("wiseCounsel.description")}
        </div>
        <div className="flex items-center px-[10px] mt-[30px] text-[16px] leading-[16px] font-bold text-primary cursor-pointer">
        {t("wiseCounsel.buttonText")} <ArrowRightAltIcon sx={{color: red[700]}}/> 
        </div>
      </div>
    </div>
  )
}