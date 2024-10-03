import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { ContactItem } from './type';

export default function ContactItemPage(item: ContactItem) {
  return (
    <div className="w-full h-full flex flex-col justify-start text-[#002042] leading-[24px] cursor-pointer">
      <img src={item.img} alt="" className="w-full h-[160px]" />
      <div className="w-full mt-[20px] text-[16px] not-italic font-bold uppercase">
        {item.location}
      </div>
      <div className="w-full mt-[10px] text-[13.3px] font-semibold">
        {item.office}
      </div>
      <div className="w-full h-full flex text-[#222222] font-normal items-center">
        <PhoneIcon sx={{width: "16px", height: "16px", mr: "10px"}} /> {item.phone}
      </div>
      <div className="w-full h-full flex text-[#222222] font-normal items-center">
        <EmailIcon sx={{width: "16px", height: "16px", mr: "10px"}} /> {item.email}
      </div>
      <div className="w-full h-full flex text-[#222222] font-normal items-center">
        <PlaceIcon sx={{width: "16px", height: "16px", mr: "10px"}} /> {item.address}
      </div>
    </div>
  )
}