import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function CaseStudyItem({tag, title, description}:CaseStudy){
  return(
    <div>
      <div className='text-[16px] leading-4 not-italic mt-5'>
        {tag}
      </div>
      <div className='mt-[15px] text-[32px] leading-[38px] font-bold'>
        {title}
      </div>
      <div className='h-[full] mt-[10px] text-[18px] text-wrap'>
        {description}
      </div>
      <div className='flex items-center mt-[20px] text-[19px] font-bold cursor-pointer'>
        Read More <ArrowRightAltIcon className='text-red-700'/>
      </div>
    </div>
  ) 
}