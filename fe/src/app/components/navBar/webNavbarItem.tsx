import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import PanelItem from './panelItem';
import { NavbarPanelTransition } from '../transitions/navbarItemTransition';
import LocaleSwitcher from '../LocaleSwitcher/localeSwitcher';

export default function WebNavbarItem({title, canExpand}:WebNavBarItemType){
  const [showPanel, setShowPanel] = useState(false);

  const displayedPanel = () => {
    switch(title) {
      case('SERVICES'): return <ServicePanel />
      case('LOCATIONS'): return <LocationPanel />
      case('CAREERS'): return <CareersPanel />
      case('ABOUT'): return <AboutPanel />
      case('LANGUAGE'): return <LocaleSwitcher />
    }
  }
  return(
    <div 
      className="py-3 px-3 relative text-white text-[15px] font-normal leading-5 normal-case cursor-pointer flex items-center justify-center"
      style={{
        textShadow: "2px 2px 3px black"
      }}
      onMouseEnter={() => setShowPanel(true)}
      onMouseLeave={() => setShowPanel(false)}
    >
      {title}
      {canExpand ? <KeyboardArrowDownIcon /> : null}

      {/* {<ServicePanel/>} */}

      {showPanel && canExpand && (
        <div
          className='w-fit h-fit p-[40px] absolute top-[65px] bg-[#003166] shadow-lg cursor-default'
        >
          {
            <NavbarPanelTransition>
              {displayedPanel()}
            </NavbarPanelTransition>
          }
          
        </div>
      )}
    </div>
  )
}

const ServicePanel = () => {
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

const LocationPanel = () => {
  const locations = [
    'Cambodia', 'Indonesia', 'Laos', 'Myanmar', 'Thailand', 'Vietnam', 'Global Search'
  ]
  return(
    <div className='w-[150px] flex flex-col text-white text-[15px] font-normal leading-5 normal-case'>
      {
        locations.map(location => (
          <PanelItem key={location} title={location}/>
        ))
      }
    </div>
  )
}

const CareersPanel = () => {
  const careers = [
    'Legal Professionals', 'Operations Professionals', 'Internships', 'All Job Opportunities',
  ]
  return(
    <div className='w-[220px] flex flex-col text-white text-[15px] font-normal leading-5 normal-case'>
      {
        careers.map(career => (
          <PanelItem key={career} title={career}/>
        ))
      }
    </div>
  )
}


const AboutPanel = () => {
  const items = [
    'History', 'Awards & Rankings', 'Pro Bono', 'CSR', 'Museum of Counterfeit Goods', 'Textile Collection'
  ]
  return(
    <div className='w-[250px] flex flex-col text-white text-[15px] font-normal leading-5 normal-case'>
      {
        items.map(item => (
          <PanelItem key={item} title={item}/>
        ))
      }
    </div>
  )
}