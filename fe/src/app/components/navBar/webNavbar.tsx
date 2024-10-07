'use client'

import PageLogo from '@images/page-logo.png'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarItem from './webNavbarItem';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/src/redux/store';
import { setToggleDetailMenu } from '@/src/redux/mobileNavbarSlice';

type INavbarItem = {
  title: string;
  canExpand?: boolean;
}

const webNavbarItems: INavbarItem[] = [
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
  const showMenu = useSelector((state:RootState) => state.navbar.isOpen)
  const detailMenu = useSelector((state:RootState) => state.navbar.menuDetail)
  const dispatch = useDispatch()

  const isXs = useMediaQuery('(max-width:640px)')
  const [isScrolled, setIsScrolled] = useState(false);  
  let innerHeight;


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    innerHeight = window.innerHeight
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, []);
  

  return(
    <div className={`w-full xs:h-[100px] ${isScrolled ? 'h-[100px] bg-themeColor' : 'h-[150px]'} xs:bg-themeColor px-[30px] fixed top-0 left-0 flex items-center z-[999]`}>
      <div className='w-full h-[100px] flex items-center xs:justify-between'>
        <Image src={PageLogo} alt='' className='w-[99.71px] h-[45.2px] xs:w-[85px] xs:h-[38.5px]'/>
        {
          isXs ? 
          <>
            <div 
              style={{visibility: isXs ? 'visible' : 'hidden'}}
              className='relative'
            >
              <SearchIcon className='text-white'/>
              <button onClick={() => dispatch(setToggleDetailMenu())} style={{visibility: isXs ? 'visible' : 'hidden'}}>
                <MenuIcon sx={{color: "white"}}/>
              </button>
            </div>
            <div
              className='absolute w-full touch-auto top-[90px] left-0 bg-primary'
              style={{ visibility: showMenu ? 'visible' : 'hidden', height: `${innerHeight}px` }}
            >
              {detailMenu ? 
                (detailMenu) : 
                <>
                  {
                    webNavbarItems.map((item, index) => (
                      <NavbarItem 
                        key={index} 
                        title={item.title} 
                        canExpand={item.canExpand}
                      /> 
                    ))
                  }
                </>
              }
              
            </div>
          </> : 
          <div className='w-full flex justify-evenly pl-[200px]'>
            {webNavbarItems.map((item, index) => (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <NavbarItem 
                  key={index} 
                  title={item.title} 
                  canExpand={item.canExpand}
                />
              </div>
            ))}
            <div className='h-[100px] flex items-center'>
              <SearchIcon sx={{width: "25px", height: "25px", color: "white", cursor: "pointer"}} />
            </div>
          </div>
        }
      </div>
    </div>
  )
}