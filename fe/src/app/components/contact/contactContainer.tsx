import { ContactItem } from './type';
import ContactItemPage from './contactItem';

const contactItems: ContactItem[] = [
  {
    img: 'https://i0.wp.com/travelgangtok.com/blog/wp-content/uploads/2023/12/Bangkok-Thailand.jpg?resize=741%2C437&ssl=1',
    location: 'Bangkok Office',
    office: 'Tilleke & Gibbins International Ltd.',
    phone: '+66 2056 5555',
    email: 'bangkok@tilleke.com',
    address: 'Supalai Grand Tower, 26th Floor, 1011 Rama 3 Road, Chongnonsi, Yannawa, Bangkok 10120',
  },
  {
    img: 'https://bcp.cdnchinhphu.vn/344443456812359680/2024/4/25/hanoi-17140151945601130239516.jpg',
    location: 'Hanoi Office',
    office: 'Tilleke & Gibbins (Vietnam) Ltd.',
    phone: '+84 24 3772 6688',
    email: 'vietnam@tilleke.com',
    address: '789 Office Building, 9th Floor, 147 Hoang Quoc Viet Street, Cau Giay District, Hanoi',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFxSCeRP_GVEn6nNG7uc09oSInbOK54aMng&s',
    location: 'Ho Chi Minh City Office',
    office: 'Tilleke & Gibbins (Vietnam) Ltd.',
    phone: '+84 28 628 45678',
    email: 'vietnam@tilleke.com',
    address: 'Viettel Tower A, 25th Floor, Suite 2506, 285 Cach Mang Thang Tam Street, District 10, Ho Chi Minh City',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbb2uPzpRIsIfUtcd25d_staOPkUXpwIrYLA&s',
    location: 'Jakarta Office',
    office: 'PT Tilleke & Gibbins Indonesia',
    phone: '+6221 2971 8088',
    email: 'indonesia@tilleke.com',
    address: 'Lippo Kuningan, 12th Floor, Unit A Jl. H.R. Rasuna Said Kav. B-12 Kuningan Jakarta 12940, Indonesia',
  },
  {
    img: 'https://nowboarding.changiairport.com/content/dam/canowboarding/homepage-carousel/travel-guide-cambodia-phnom-penh/aerial-view-royal-palace-of-phnom-penh-cambodia-1920x1080.jpg',
    location: 'Phnom Penh Office',
    office: 'Tilleke & Gibbins (Cambodia) Ltd.',
    phone: '+855 23 964 210',
    email: 'cambodia@tilleke.com',
    address: '15th Floor, Unit 1501, Flatiron, Street No. 102 Phnom Penh City Center, Sangkat Srah Chak, Khan Daun Penh, Phnom Penh, 120210',
  },
  {
    img: 'https://urban-leds.org/wp-content/uploads/2020/02/Vientiane_source-Google-Images.png',
    location: 'Vientiane Office',
    office: 'Tilleke & Gibbins Lao Co., Ltd.',
    phone: '+856 21 262 355',
    email: 'lao@tilleke.com',
    address: 'No. 302/1B, 3rd Floor, Vieng Vang Tower, Unit 15, Boulichan Road, Dongpalan Thong Village, Sisattanak District, Vientiane, Lao PDR',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnC8LGSePpJK8sOOL8f3YtzRFCNoXGa2A_Q&s',
    location: 'Yangon Office',
    office: 'Tilleke & Gibbins Myanmar Ltd.',
    phone: '+95 9 772 440 001',
    email: 'myanmar@tilleke.com',
    address: 'No. 1608, 16th Floor, Sakura Tower, 339 Bogyoke Aung San Road, Kyauktada Township, Yangon 11182, Myanmar',
  },
]

export default function ContactContainer() {
  return (
    <div className="w-full h-full flex justify-center ">
      <div className="w-4/5 h-full pt-[80px] grid grid-cols-4 gap-[20px] xs:grid-cols-1">
        {
          contactItems.map((item, index) => (
            <ContactItemPage
              key={index}
              img={item.img}
              location={item.location}
              office={item.office}
              phone={item.phone}
              email={item.email}
              address={item.address}
            />
          ))
        }
      </div>
    </div>

  )
}