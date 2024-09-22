import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Careers(){
  return(
    <div className="w-1/3 flex flex-col pr-[50px]">
      <div className="text-[20px] not-italic font-semibold leading-5">
        Careers
      </div>
      <div className="mt-[20px] text-[16px] leading-6 text-[#222222]">
        We are always seeking great people to grow our amazing team.
      </div>
      <div className='w-full flex items-center mt-[20px] text-[16px] leading-[16px] font-bold text-[#ed2724] cursor-pointer'>
        Join Us <ArrowRightAltIcon/>
      </div>
    </div>
  )
}