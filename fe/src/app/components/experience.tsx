import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import ComponentNameTag from './componentNameTag';
import { red } from '../theme';

export default function Experience(){
  const t = useTranslations()
  const experiences = t.raw("experiences") as string[]
  
  const [loadmore, setLoadmore] = useState(false)
  const [displayItems, setDisplayItems] = useState(experiences.slice(0, 6))

  useEffect(() => {
    if(loadmore) {
      setDisplayItems(experiences.slice(0, experiences.length))
    } else {
      setDisplayItems(experiences.slice(0, 6))
    }
  }, [loadmore])

  const onToggleLoadmore = () => {
    setLoadmore(prev => !prev)
  }

  return(
    <div className='w-full px-[60px] pt-[80px] flex flex-col xs:p-[20px]'>
      <div className='flex items-center text-[14px] text-primary font-semibold'>
        <ComponentNameTag name='EXPERIENCE'/>
      </div>
      <div className='mt-[20px] flex flex-col text-secondary text-[16px] font-normal leading-[24px]'>
        <List>
          {displayItems.map((item, index) => (
            <ListItem key={index} className='flex items-start'>
              <ListItemIcon className='mt-[8px] pl-[20px]'>
                <FiberManualRecordIcon sx={{fontSize: "14px", color: "black"}} />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </div>
      <div className='w-full flex justify-center'>
        <Button
          onClick={onToggleLoadmore}
          sx={{
            "&:hover": {
              color: "white",
              border: `1px solid ${red[500]}`,
              bgcolor: red[500]
            }
          }}
        >
          {loadmore ? "show less" : "load more"}
        </Button>
      </div>
    </div>
  )
}