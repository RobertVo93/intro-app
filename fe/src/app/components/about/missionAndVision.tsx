import StarRateIcon from '@mui/icons-material/StarRate';
import RedeemIcon from '@mui/icons-material/Redeem';
import { useTranslations } from 'next-intl';

export default function MissionAndVision({translationCollection}:{translationCollection:string}){
  const t = useTranslations(translationCollection)

  return(
    <div className="w-full h-full flex text-primary xs:flex-col">
      <div className="w-1/2 h-full flex flex-col xs:w-full">
        <StarRateIcon sx={{width: "56px", height: "56px"}} />
        <div className='text-[20px] font-bold leading-[26.6px] mt-[30px]'>
          {t('vision.title')}
        </div>
        <div className='text-[16px] font-normal leading-[24px] text-secondary mt-[10px]'>
          {t('vision.description')}
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col xs:w-full xs:mt-[20px]">
        <RedeemIcon sx={{width: "56px", height: "56px"}}/>
        <div className='text-[20px] font-bold leading-[26.6px] mt-[30px]'>
          {t('mission.title')}
        </div>
        <div className='text-[16px] font-normal leading-[24px] text-secondary mt-[10px]'>
          {t('mission.description')}
        </div>
      </div>
    </div>
  )
}