import StarRateIcon from '@mui/icons-material/StarRate';
import RedeemIcon from '@mui/icons-material/Redeem';

export default function MissionAndVision(){
  return(
    <div className="w-full h-full flex text-[#002042]">
      <div className="w-1/2 h-full flex flex-col">
        <StarRateIcon className='w-[56px] h-[56px]'/>
        <div className='text-[20px] font-bold leading-[26.6px] mt-[30px]'>
          Our Vision
        </div>
        <div className='text-[16px] font-normal leading-[24px] text-[#222222] mt-[10px]'>
          Our objective is to be the leading regional full-service law practice serving international business and civil society
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col">
        <RedeemIcon className='w-[56px] h-[56px]'/>
        <div className='text-[20px] font-bold leading-[26.6px] mt-[30px]'>
          Our Mission
        </div>
        <div className='text-[16px] font-normal leading-[24px] text-[#222222] mt-[10px]'>
        Our mission is to provide reliable, integrity driven, knowledge based, and innovative delivery of 
        personalized and practical legal solutions to those we serve. The measure of our mission lies in its execution.
        </div>
      </div>
    </div>
  )
}