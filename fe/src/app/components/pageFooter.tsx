import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function PageFooter(){
  return(
    <div className="w-full h-[full] px-[60px] pt-[30px] pb-[30px] flex items-end justify-between">
      <div className='text-[#002042] text-[13px] not-italic font-normal leading-[24px]'>
        © 2024 Tilleke & Gibbins International Ltd. All rights reserved.
      </div>
      <div className='h-[50px] flex items-end'>
        <LinkedInIcon className='w-[40px] h-[40px] text-[#212b36] cursor-pointer'/>
        <YouTubeIcon className='w-[40px] h-[40px] text-[#212b36] cursor-pointer'/>
        <FacebookIcon className='w-[40px] h-[40px] text-[#212b36] cursor-pointer'/>
      </div>
      <div className='flex text-[#002042] text-[14px] not-italic font-normal leading-[24px]'>
        <div className='cursor-pointer'> Privacy Policy </div> &nbsp;|&nbsp; 
        <div className='cursor-pointer'> Fraudulent Communications </div> &nbsp;|&nbsp; 
        <div className='cursor-pointer'> Legal Notice </div> 
      </div>
    </div>
  )
  
}