import HomeBackground from "@images/home-background.png"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Image from "next/image";

export default function CompanyInfo(){

  return(
    <div>
      <div className="w-full h-[475px] flex">
        <div className="w-1/2 h-full"></div>
        <Image src={HomeBackground} alt="" className="w-1/2" objectFit="cover"/>
      </div>

      <div className="w-full h-[475px] flex absolute top-0 left-0 bg-gradient-to-r from-[#002042] from-50% to-[rgba(0,0,0,0)] to-100%">
        <div className="w-[400px] px-[10px] pt-[160px] mx-[52px] text-white flex flex-col">
          <div className="w-full h-5 text-[12px] leading-[18px] font-semibold uppercase not-italic">
            HOME // LOCATIONS // Vietnam
          </div>
          <div className="w-full h-[103px] mb-5 text-[48px] leading-[58px] font-bold not-italic flex flex-col-reverse">
            Vietnam
          </div>
          
          <div className="w-full flex justify-between">
            <LocationComponent location="Ho Chi Minh" phone="123456789" email="hn@gmail.com"/>
            <LocationComponent location="Ha Noi" phone="123456789" email="hcm@gmail.com"/>
          </div>
        </div>
      </div>
    </div>
  )
}


const LocationComponent = ({
  location,
  phone,
  email
}:{
  location: string,
  phone: string,
  email: string
}) => {
  return(
    <div className="flex flex-col">
      <div className="flex text-[18px] font-semibold not-italic leading-[24px] mb-3">{location} Office</div>
      <div className="flex items-center">
        <PhoneIcon className="w-5 h-5"/>
        <div className="ml-[15px]">{phone}</div>
      </div>
      <div className="flex items-center">
        <EmailIcon className="w-5 h-5"/>
        <div className="ml-[15px]">{email}</div>
      </div>
    </div>
  )
}