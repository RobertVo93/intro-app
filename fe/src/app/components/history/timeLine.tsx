'use client'

import RemoveIcon from '@mui/icons-material/Remove';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { useTranslations } from 'next-intl';

export default function TimeLine({translationCollection}:{translationCollection:string}){
  const t = useTranslations(translationCollection)
  const timeStamps = t.raw("timeStamps") as any[]

  const [selectedTimeStamp, setSelectedTimeStamp] = useState(timeStamps[0])
  const [page, setPage] = useState(1);
  const itemsPerPage = 1;
  const onPageChangeClickHandler = (value: number) => {
    setPage(value);
    setSelectedTimeStamp(timeStamps[value - 1])
  };
  const startIndex = (page - 1) * itemsPerPage;;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = timeStamps.slice(startIndex, endIndex);

  return(
    <div className="w-full h-[800px] relative">
      <div className="w-full h-[520px] bg-[#002042]">
        <div className='text-[14px] px-[10%] leading-5 uppercase not-italic font-semibold flex items-center text-white pt-[80px]'>
          <RemoveIcon className='text-red-700 h-[30px] items-center'/> TIMELINE
        </div>
        <div className='w-full h-fit px-[10%] flex mt-[30px] relative'>
          { 
            timeStamps.map((item, index) => (
              <div 
                key={index} 
                className='w-[50px] cursor-pointer font-normal leading-[24px]'
                onClick={() => onPageChangeClickHandler(index +1)}
                style={{
                  color: selectedTimeStamp == item ? 'white' : '#505d6a'
                }}
              >
                <div className='w-full h-[20px] flex justify-center items-center relative'>
                  <CircleIcon  className='w-[13px] z-50'/>
                  <div className='w-full h-full absolute top-[9px] left-0 border-t border-white'></div>
                </div>
                <div className='mt-[15px] text-[13px] flex justify-center'>
                  {item.time}
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-full h-[500px] absolute bottom-[50px] px-[4%] flex justify-center z-50">
        <div className='w-full h-full flex flex-col bg-slate-100 relative' >
          <div className='w-full h-full'>
            {
              paginatedItems.map((item, index) => (
                <div key={index} className='w-full h-full flex'>
                  <img 
                    alt=''
                    src={item.img}
                    className='w-[40%] h-full'
                  />
                  <div className='flex flex-col px-[50px] pt-[50px]'>
                    <div className='mt-[20px] text-[#002042] text-[16px] not-italic font-bold leading-[21.28px]'> 
                      {item.time}
                    </div>
                    <div className='my-[20px] text-[#002042] text-[36px] font-bold leading-[46px]'>
                      {item.title}
                    </div>
                    <div className='mb-[20px] text-[#222222] text-[16px] font-normal leading-[24px]'>
                      {item.content}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="absolute right-[40px] bottom-[20px] flex items-center text-[16px] leading-[16px] font-bold text-red-700 cursor-pointer">
            Next <ArrowRightAltIcon /> 
          </div>
        </div>
      </div>
    </div>
  )
}