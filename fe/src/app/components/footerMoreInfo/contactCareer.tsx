import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function ContactCareer({
  title,
  description,
  buttonText
}: {
  title: string,
  description: string,
  buttonText: string,
}){
  return(
    <div className="w-1/3 xs:w-full xs:mt-[30px] pr-[50px] flex flex-col">
      <div className="text-[20px] not-italic font-semibold leading-5">
        {title}
      </div>
      <div className="mt-[20px] text-[16px] leading-6 text-secondary">
        {description}
      </div>
      <div className='w-full flex items-center mt-[20px] text-[16px] leading-[16px] font-bold text-red-700 cursor-pointer'>
        {buttonText} <ArrowRightAltIcon/>
      </div>
    </div>
  )
}