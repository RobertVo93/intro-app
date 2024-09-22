import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const items = [
  {
    img: 'https://dualcreditathome.com/wp-content/uploads/2014/02/history.jpg',
    title: 'History',
    description: 'Tilleke & Gibbins has been helping clients do business in Southeast Asia since 1890, and has grown into one of the region’s largest and most well-respected independent law firms.'
  },
  {
    img: 'https://www.capgemini.com/us-en/wp-content/uploads/sites/4/2021/09/Capgemini-Business-Services-Awards-and-Rankings-811x450-1.jpg',
    title: 'Awards & Rankings',
    description: 'Consistently recognized by international legal directories as one Asia’s best independent law firms, Tilleke & Gibbins received 15 Firm of the Year awards in 2020 alone.'
  },
  {
    img: 'https://media.licdn.com/dms/image/D5612AQGv9P2g8lISxw/article-cover_image-shrink_720_1280/0/1719401740317?e=2147483647&v=beta&t=bw6BhHnvwCaUAyRQByLo_XiILWdzlvKi2l2tcErYN8U',
    title: 'Pro Bono',
    description: 'We provide comprehensive pro bono services to charitable organizations, working closely with internationally well-regarded pro bono organizations such as Thomson Reuters’ Trustlaw and the Lex Mundi Foundation.'
  },
  {
    img: 'https://logowik.com/content/uploads/images/crs8088.logowik.com.webp',
    title: 'CRS',
    description: 'With a focus on education, the environment, and human health, at Tilleke & Gibbins we are dedicated to giving back to the communities in which we are proud to live and work.'
  },
  {
    img: 'https://garymjones.com/wp-content/uploads/2021/05/bangkok-counterfeit-9-1-uai-2064x1210.jpg',
    title: 'Museum of Counterfeit Goods',
    description: 'Tilleke & Gibbins’ collection of over 4,000 counterfeit products is one of the largest of its kind in the world. Open to individuals, groups, and media by appointment only.'
  },
  {
    img: 'https://www.ualberta.ca/en/museums/media-library/images/museum-collections/clothing-textiles/cltx05webres144artifacts1.jpg',
    title: 'Textile Collection',
    description: 'The firm is home to over 2,000 museum-quality textiles representing the diverse cultures of mainland Southeast Asia, collected, displayed, and preserved in proximity to the geographical area in which they were created.'
  },
 
]

export default function AboutComponents(){
  return(
    <div className="w-full h-full px-[10%] pt-[80px] grid grid-cols-2 gap-[20px]">
      {
        items.map((item, index) => (
          <div key={index} className="w-full h-[500px] flex flex-col bg-[#77777746] cursor-pointer">
            <img alt="" src={item.img} className="w-full h-[310px]"/>
            <div className="px-[20px] mt-[20px] text-[18px] font-bold not-italic leading-[24px]">
              {item.title}
            </div>
            <div className="px-[20px] mt-[20px] text-[16px] font-normal not-italic leading-[24px]">
              {item.description}
            </div>
            <div className="flex items-center px-[10px] pt-[10px] text-[16px] leading-[16px] font-bold text-[#002042] cursor-pointer">
              Learn more <ArrowRightAltIcon className='text-red-700'/> 
            </div>
          </div>
        ))
      }
    </div>
  )
}