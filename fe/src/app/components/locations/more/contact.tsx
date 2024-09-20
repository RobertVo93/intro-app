import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Contact(){
  return(
    <div className="w-1/3 flex flex-col">
      <div className="text-[20px] not-italic font-semibold leading-5">
        Contact
      </div>
      <div className="mt-[20px] text-[16px] leading-6 text-[#222222]">
        We have seven offices in six countries across Southeast Asia.
      </div>
      <div className='w-full flex items-center mt-[20px] text-[16px] leading-[16px] font-bold text-[#ed2724] cursor-pointer'>
        Contact Us <ArrowRightAltIcon/>
      </div>
    </div>
  )
}