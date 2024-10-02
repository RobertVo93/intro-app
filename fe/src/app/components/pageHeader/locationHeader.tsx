import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const locations = [
  {
    location: "Ho Chi Minh",
    phone: "123456789", 
    email: "hn@gmail.com"
  }, 
  {
    location:"Ha Noi",
    phone:"123456789",
    email:"hcm@gmail.com"
  }
]

export default function LocationHeader () {
  return(
    <div className="w-full flex justify-start">
      {locations.map((loc, idx) => (
        <div className="flex flex-col mr-[80px]" key={idx}>
          <div className="flex text-[18px] font-semibold not-italic leading-[24px] mb-3">{loc.location} Office</div>
            <div className="flex items-center">
              <PhoneIcon sx={{width: "20px", height: "20px"}}/>
              <div className="ml-[15px]">{loc.phone}</div>
            </div>
            <div className="flex items-center">
              <EmailIcon sx={{width: "20px", height: "20px"}}/>
              <div className="ml-[15px]">{loc.email}</div>
          </div>
        </div>
      ))}
    </div>
  )
}