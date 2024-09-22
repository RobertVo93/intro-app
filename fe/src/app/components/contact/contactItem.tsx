import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import Image from 'next/image';

export default function ContactItem(item:ContactItem){
  return(
    <div className="w-full h-full flex flex-col justify-start text-[#002042] leading-[24px] cursor-pointer">
      <img src={item.img} alt="" className="w-full h-[160px]"/>
      <div className="w-full mt-[20px] text-[16px] not-italic font-bold uppercase">
        {item.location}
      </div>
      <div className="w-full mt-[10px] text-[13.3px] font-semibold">
        {item.office}
      </div>
      <div className="w-full h-full flex text-[#222222] font-normal items-center">
        <PhoneIcon className='mr-[10px] w-4 h-4'/> {item.phone}
      </div>
      <div className="w-full h-full flex text-[#222222] font-normal items-center">
        <EmailIcon className='mr-[10px] w-4 h-4'/> {item.email}
      </div>
      <div className="w-full h-full flex text-[#222222] font-normal items-center">
        <PlaceIcon className='mr-[10px] w-4 h-4'/> {item.address}
      </div>
    </div>
  )
}