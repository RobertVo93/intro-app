import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState } from 'react';
import AutomotiveHeaderTransition from '../transitions/automotiveHeaderTransition';

const agencies = [
  {
    location: "Cambodia",
    employee: [
      {
        name: 'name',
        phone: 'phone',
        email: 'email'
      }
    ]
  },
  {
    location: "Indonesia",
    employee: [
      {
        name: 'name',
        phone: 'phone',
        email: 'email'
      }
    ]
  },
  {
    location: "Laos",
    employee: [
      {
        name: 'name',
        phone: 'phone',
        email: 'email'
      }
    ]
  },
  {
    location: "Myanmar",
    employee: [
      {
        name: 'name',
        phone: 'phone',
        email: 'email'
      }
    ]
  },
  {
    location: "Thailand",
    employee: [
      {
        name: 'name',
        phone: 'phone',
        email: 'email'
      }
    ]
  },
  {
    location: "Vietnam",
    employee: [
      {
        name: "Long Gia Nguyen",
        phone: "123456789", 
        email: "lgn@gmail.com"
      },
      {
        name:"Kien Trung Trinh",
        phone:"123456789",
        email:"ktt@gmail.com"
      }
    ]
  },
]


export default function AutomotiveHeader () {
  const [currentLocation, setCurrentLocation] = useState('Vietnam')
  const [currentEmployee, setCurrentEmployee] = useState<undefined | {
    name: string;
    phone: string;
    email: string;
  }[]>()

  useEffect(() => {
    agencies.forEach(ag => {
      if(ag.location === currentLocation) {
        setCurrentEmployee(ag.employee)
      }
    })
  }, [currentLocation])

  return(
    <div className="w-full h-full flex flex-col justify-start">
      <div className='text-[28px] not-italic font-bold leading-[35px] mt-[20px]'>
        Key Contacts
      </div>

      <div className='w-full mt-[20px] grid grid-cols-6 cursor-pointer'>
        {
          agencies.map((ag, idx) => (
            <div 
              className={`w-[115px] h-[40px] border-[1.5px] border-solid border-white flex justify-center items-center rounded-md font-bold ${currentLocation === ag.location ? 'text-[#002042] bg-white' : null}`}
              style={{
                
              }}
              key={idx}
              onClick={() => setCurrentLocation(ag.location)}
            >
              {ag.location}
            </div>
          ))
        }
      </div>

      <AutomotiveHeaderTransition key={Math.random()}>
        {
          currentEmployee ? 
            <div className='w-full h-full flex mt-[30px] justify-start'>
              {currentEmployee.map((emp, idx) => (
                <div className="flex flex-col mr-[80px]" key={idx}>
                  <div className="flex text-[18px] font-semibold not-italic leading-[24px] mb-2">{emp.name}</div>
                    <div className="flex items-center">
                      <PhoneIcon sx={{width: "20px", height: "20px"}} />
                      <div className="ml-[15px]">{emp.phone}</div>
                    </div>
                    <div className="flex items-center">
                      <EmailIcon sx={{width: "20px", height: "20px"}}/>
                    <div className="ml-[15px]">{emp.email}</div>
                  </div>
                </div>
              ))}
            </div>
          : null
        }
      </AutomotiveHeaderTransition>
    </div>
  )
}