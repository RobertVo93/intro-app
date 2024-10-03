import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import Networks from './footerMoreInfo/network';
import { useTranslations } from 'next-intl';
import ContactCareer from './footerMoreInfo/contactCareer';
import { iconColor } from '../theme';

export default function PageFooter(){
  const t = useTranslations("pageFooter")
  return(
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className="w-4/5 h-[250px] flex pt-[80px] border-b">
        <ContactCareer
          title={t('contact.title')} 
          description={t('contact.description')} 
          buttonText={t('contact.buttonText')}
        />
        <ContactCareer
          title={t('careers.title')} 
          description={t('careers.description')} 
          buttonText={t('careers.buttonText')}
        />
        <Networks />
      </div>

      <div className="w-4/5 h-full pb-[30px] flex items-end justify-between">
        <div className='text-primary text-[13px] not-italic font-normal leading-[24px]'>
          © 2024 Tilleke & Gibbins International Ltd. All rights reserved.
        </div>
        <div className='h-[50px] flex items-end'>
          <LinkedInIcon sx={{width: "40px", height: "40px", color: iconColor, cursor: "pointer"}}/>
          <YouTubeIcon sx={{width: "40px", height: "40px", color: iconColor, cursor: "pointer"}}/>
          <FacebookIcon sx={{width: "40px", height: "40px", color: iconColor, cursor: "pointer"}}/>
        </div>
        <div className='flex text-primary text-[14px] not-italic font-normal leading-[24px]'>
          <div className='cursor-pointer'> Privacy Policy </div> &nbsp;|&nbsp; 
          <div className='cursor-pointer'> Fraudulent Communications </div> &nbsp;|&nbsp; 
          <div className='cursor-pointer'> Legal Notice </div> 
        </div>
      </div>
    </div>
  )
}