import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import PanelItem from './panelItem';
import { NavbarPanelTransition } from '../transitions/navbarItemTransition';
import LocaleSwitcher from '../localeSwitcher/localeSwitcher';
import { useRouter } from '@/src/navigation';
import { WebNavBarItemType } from './type';

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

  const handleNavigate = (title:string) => {
    // mock: some page not designed yet
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

  const displayedPanel = () => {
    switch(title) {
      case('services'): return <ServicesMenu />
      case('locations'): return <OthersMenu menuWidth={130} items={locations}/>
      case('careers'): return <OthersMenu menuWidth={210} items={careers}/>
      case('about'): return <OthersMenu menuWidth={235} items={abouts}/>
      case('language'): return <LocaleSwitcher />
    }
  }
  return(
    <div 
      className="h-[44px] py-3 px-3 relative text-white text-[15px] font-normal leading-5 normal-case cursor-pointer flex items-center justify-center"
      style={{
        textShadow: "2px 2px 3px black"
      }}
      onMouseEnter={() => setShowPanel(true)}
      onMouseLeave={() => setShowPanel(false)}
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
            {displayedPanel()}
          </div>
        </NavbarPanelTransition>
      )}
    </div>
  )
}

const ServicesMenu = () => {
  return(
    <div className='w-[800px] flex text-white text-[15px] font-normal leading-5 normal-case'>
      <div className='w-1/3 h-full flex flex-col border-r-2 border-solid border-[#1a497b]'>
        <div className='font-bold'>Industries</div>
        <div className='mt-[5px]'>
          {industries.map((industry) => (
            <PanelItem key={industry} title={industry}/>
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col pl-[40px] '>
        <div className='font-bold'>Practices</div>
        <div className='w-1/2 h-[320px] mt-[5px]'
          style={{
            columnWidth: '300px',
            columnCount: 8
          }}
        >
          {practices.map(practice => (
            <PanelItem key={practice} title={practice}/>
          ))}
        </div>
      </div>
    </div>
  )
}

const OthersMenu = ({items, menuWidth}:{items:string[], menuWidth: number}) => {
  return(
    <div 
      className={`flex flex-col text-white text-[15px] font-normal leading-5`}
      style={{
        width: `${menuWidth}px`
      }}
    >
      {
        items.map(location => (
          <PanelItem key={location} title={location}/>
        ))
      }
    </div>
  )
}