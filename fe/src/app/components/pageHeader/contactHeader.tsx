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

export default function ContactHeader () {
  return(
    <div className="w-3/4">
    We welcome your questions and comments. Full contact information for all of our offices is below. 
    You can also feel free to search our professionals for a specific person, or just contact us and we’ll be 
    happy to put you in touch with the right person.
  </div>
  )
}