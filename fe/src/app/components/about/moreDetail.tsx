'use client'

import { useEffect, useState } from "react"
import CodeOfProduct from "./codeOfProduct";
import MissionAndVision from "./missionAndVision";
import Creed from "./creed";

const items = [
  {
    number: '7',
    detail: 'Offices Across the Region'
  },
  {
    number: '250+',
    detail: 'Lawyers & Consultants'
  },
  {
    number: '1,800+',
    detail: 'Publications and Perspectives'
  },
  {
    number: '10,000',
    detail: 'Clients (since 2019)'
  },
]

const infoItems = [
  'Code of Conduct', 'Mission and Vision', 'Creed'
]

export default function MoreDetail({translationCollection}:{translationCollection: string}){
  const backgroundImg = 'https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public/eb/7f/eb7fa02f-e613-486b-98cf-9e034052610e/how_to_run_an_effective_business_meeting_-_a_step-by-step_guide-min.jpg'
  const [infoItem, setInfoItem] = useState('Code of Conduct')
  const [infoComponent, setInfoComponent] = useState(<CodeOfProduct translationCollection={translationCollection}/>)

  useEffect(() => {
    if(infoItem === 'Code of Conduct') {
      setInfoComponent(<CodeOfProduct translationCollection={translationCollection}/>)
    } else if(infoItem === 'Mission and Vision') {
      setInfoComponent(<MissionAndVision translationCollection={translationCollection}/>)
    } else {
      setInfoComponent(<Creed translationCollection={translationCollection}/>)
    }
  }, [infoItem])

  return(
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[200px] xs:h-full px-[10px] pt-[50px] pb-[40px] flex bg-[#77777746] text-primary xs:flex-wrap xs:px-[20px]">
        {
          items.map((item, index) => (
            <div key={index} className="w-1/2 flex flex-col items-center xs:mt-[20px]">
              <div className="flex flex-col justify-center items-center xs:items-start">
                <div className="text-[60px] font-semibold leading-[60px] xs:text-[36px] xs:leading-[36px]">{item.number}</div>
                <div className="text-[18px] leading-[45px] xs:text-[14px] xs:leading-[18.2px]">{item.detail}</div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="w-full h-full bg-black px-[10%] relative">
        <img src={backgroundImg} alt="" className="w-full h-[450px]"/>
        <div className="w-[80%] h-[56px] absolute bottom-[-28px] bg-themeColor flex justify-center xs:w-full xs:left-0">
          {
            infoItems.map((item, index) => (
              <div 
                key={index} 
                className="w-1/3 flex items-center justify-center cursor-pointer text-white text-[16px] leading-[16px] text-center xs:px-[20px]"
                style={{
                  fontWeight: infoItem === item ? 600 : 400
                }}
                onClick={() => setInfoItem(item)}
              >
                {item}
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-full h-full px-[10%] pt-[80px] flex xs:px-[20px] xs:pt-[50px]">
        {infoComponent}
      </div>
    </div>
  )
}