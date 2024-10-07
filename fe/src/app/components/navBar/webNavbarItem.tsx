import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { NavbarPanelTransition } from '../transitions/navbarItemTransition';
import LocaleSwitcher from '../localeSwitcher/localeSwitcher';
import { useRouter } from '@/src/navigation';
import { WebNavBarItemType } from './type';

import { useMediaQuery } from '@mui/material';
import { OthersMenu, ServicesMenu } from './detailMenu';
import { useDispatch } from 'react-redux';
import { setCloseDetailMenu, setDetailMenu } from '@/src/redux/mobileNavbarSlice';

const industries = [
  'Automotive',
  'Aviation',
  'Consumer Products',
  'Energy',
  'Fintech',
  'Insurance',
  'Life Sciences',
  'Technology'
]

const practices = [
  'Banking and Finance',
  'Capital Markets',
  'Competition and Trade',
  'Compliance and Investigations',
  'Corporate/M&A',
  'Dispute Resolution and Litigation',
  'Employment',
  'Intellectual Property',
  'Real Estate',
  'Regulatory Affairs',
  'Tax'
]

const locations = [
  'Cambodia', 'Indonesia', 'Laos', 'Myanmar', 'Thailand', 'Vietnam', 'Global Search'
]

const careers = [
  'Legal Professionals', 'Operations Professionals', 'Internships', 'All Job Opportunities',
]

const abouts = [
  'History', 'Awards & Rankings', 'Pro Bono', 'CSR', 'Museum of Counterfeit Goods', 'Textile Collection'
]

export default function WebNavbarItem({title, canExpand}:WebNavBarItemType){
  const [showPanel, setShowPanel] = useState(false);
  const router = useRouter()
  const isXs = useMediaQuery('(max-width:640px)')
  const dispatch = useDispatch()

  const onMenuBack = () => {
    dispatch(setDetailMenu(undefined))
  }

  const handleNavigate = (title:string) => {
    // mock: some page not designed yet
    if(isXs) {
      if(title === 'contact') {
        router.push('/contact')
        dispatch(setCloseDetailMenu())
      }
    } else {
      if(title === 'services') {
        router.push('/services')
      } else if(title === 'locations') {
        router.push('/')
      } else if(title === 'about') {
        router.push('/about')
      } else if(title === 'contact') {
        router.push('/contact')
      } else {
        console.log('Can not navigate right now')
      }
    }

    dispatch(setDetailMenu(detailMenu()))
  }

  const detailMenu = () => {
    switch(title) {
      case('services'): return <ServicesMenu industries={industries} practices={practices} onMenuBack={onMenuBack}/>
      case('locations'): return <OthersMenu name={title} menuWidth={130} items={locations} onMenuBack={onMenuBack}/>
      case('careers'): return <OthersMenu name={title} menuWidth={210} items={careers} onMenuBack={onMenuBack}/>
      case('about'): return <OthersMenu name={title} menuWidth={235} items={abouts} onMenuBack={onMenuBack}/>
      case('language'): return <LocaleSwitcher onMenuBack={onMenuBack}/>
    }
  }
  return(
    <div 
      className="h-[44px] py-3 px-3 relative text-white text-[15px] font-normal leading-5 normal-case cursor-pointer flex items-center justify-center"
      style={{
        textShadow: "2px 2px 3px black"
      }}
      onMouseEnter={() => { if(!isXs) setShowPanel(true)}}
      onMouseLeave={() => { if(!isXs) setShowPanel(false)}}
    >
      <div 
        className='uppercase' 
        onClick={() => handleNavigate(title)}
      >
        {title}
      </div>
      {canExpand ? <KeyboardArrowDownIcon /> : null}
      {showPanel && canExpand && (
        <NavbarPanelTransition>
          <div className='p-[40px] bg-[#22229b] shadow-lg cursor-default'>
            {detailMenu()}
          </div>
        </NavbarPanelTransition>
      )}
    </div>
  )
}