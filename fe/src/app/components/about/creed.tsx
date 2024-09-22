import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const lawFirms = [
  "We care.", 
  "We value integrity.",
  "We are knowledgeable, dependable, responsible, perceptive, practical, realistic, competitive, community oriented.",
  "We have style, coupled with a sense of history",
  "We are a business, yet family.",
  "Clients are our guests."
]

const facilities = [
  'Reflect: character, comfort, soul,  stability, elegance.',
  'Impress yet relax.',
  'Are efficient yet friendly.',
  'Are professional and reassuring.'
]

export default function Creed(){
  return(
    <div className="w-full h-full flex text-[#002042]">
      <div className="w-1/2 h-full flex flex-col">
        <div className='text-[20px] font-bold leading-[26.6px]'>
          As a Law Firm
        </div>
        {
          lawFirms.map((item, index) => (
            <div key={index} className='text-[16px] font-normal leading-[24px] text-[#222222] mt-[10px]'>
              <FiberManualRecordIcon className='w-[10px] h-[10px] text-black'/> {item}
            </div>
          ))
        }
      </div>
      <div className="w-1/2 h-full flex flex-col">
        <div className='text-[20px] font-bold leading-[26.6px]'>
          Our Facilities
        </div>
        {
          facilities.map((item, index) => (
            <div key={index} className='text-[16px] font-normal leading-[24px] text-[#222222] mt-[10px]'>
              <FiberManualRecordIcon className='w-[10px] h-[10px] text-black'/> {item}
            </div>
          ))
        }
      </div>
    </div>
  )
}