'use client'

import PageLogo from '@images/page-logo.png'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import NavbarItem from './webNavbarItem';
import { useRouter } from "@/src/navigation";

const webNavbarItems: WebNavBarItemType[] = [
  {title: "professionals"},
  {title: "services", canExpand: true},
  {title: "locations", canExpand: true},
  {title: "insights"},
  {title: "careers", canExpand: true},
  {title: "about", canExpand: true},
  {title: "contact"},
  {title: "language", canExpand: true},
]

export default function WebNavbar(){
  const [isScrolled, setIsScrolled] = useState(false);  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <div className={`w-full ${isScrolled ? 'h-[100px] bg-[#002042]' : 'h-[150px]'} px-[30px] fixed top-0 left-0 flex items-center z-[999]`}>
      <div className='w-full h-[100px] flex items-center'>
        <Image src={PageLogo} alt='' className='w-[99.71px] h-[45.2px] '/>
        <div className='w-full flex justify-evenly pl-[200px]'>
          {webNavbarItems.map((item, index) => (
            <div
              className='flex items-center justify-center'
            >
              <NavbarItem key={index} title={item.title} canExpand={item.canExpand}/>
            </div>
          ))}
          <div className='h-[100px] flex items-center'>
            <SearchIcon className='w-[25px] h-[25px] text-white cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}