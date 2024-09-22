import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import ComponentNameTag from './componentNameTag';


export default function Experience(){
  const t = useTranslations('locations.experience')
  const items = [
    { text: t('0') },
    { text: t('1') },
    { text: t('2') },
    { text: t('3') },
    { text: t('4') },
    { text: t('5') },
    { text: t('6') },
    { text: t('7') },
    { text: t('8') },
    { text: t('9') },
  ]
  

  const [loadmore, setLoadmore] = useState(false)
  const [displayItems, setDisplayItems] = useState(items.slice(0, 6))

  useEffect(() => {
    if(loadmore) {
      setDisplayItems(items.slice(0, items.length))
    } else {
      setDisplayItems(items.slice(0, 6))
    }
  }, [loadmore])

  const onToggleLoadmore = () => {
    setLoadmore(prev => !prev)
  }

  return(
    <div className='w-full px-[60px] pt-[80px] flex flex-col'>
      <div className='flex items-center text-[14px] text-[#002042] font-semibold'>
        <ComponentNameTag name='EXPERIENCE'/>
      </div>
      <div className='mt-[20px] flex flex-col text-[#222222] text-[16px] font-normal leading-[24px]'>
        <List>
          {displayItems.map((item, index) => (
            <ListItem key={index} className='flex items-start'>
              <ListItemIcon className='mt-[8px] pl-[20px]'>
                <FiberManualRecordIcon className='text-sm text-black'/>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
      <div className='w-full flex justify-center'>
        <Button
          onClick={onToggleLoadmore}
          sx={{
            color: "#002042",
            border: "1px solid #002042",
            fontWeight: 600,
            "&:hover": {
              color: "white",
              border: "1px solid red",
              bgcolor: "red"
            }
          }}
        >
          {loadmore ? "show less" : "load more"}
        </Button>
      </div>
    </div>
  )
}