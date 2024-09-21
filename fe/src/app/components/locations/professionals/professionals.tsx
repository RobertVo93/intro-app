import RemoveIcon from '@mui/icons-material/Remove';
import ProfessionalsItem from './item';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import ComponentNameTag from '../../componentNameTag';


const professionals: ProfessionalsType[] = [
  {name: 'Tran Van A', position: 'Partner and Director, Vietnam'},
  {name: 'Tran Van A', position: 'Partner and Director, Vietnam'},
  {name: 'Tran Van A', position: 'Partner and Director, Vietnam'},
  {name: 'Tran Van A', position: 'Partner and Director, Vietnam'},
  {name: 'Tran Van A', position: 'Partner and Director, Vietnam'},
  {name: 'Tran Van A', position: 'Partner and Director, Vietnam'},
]

export default function Professionals(){
  const [loadmore, setLoadmore] = useState(false)
  const [displayItems, setDisplayItems] = useState(professionals.slice(0, 5))

  const onToggleLoadmore = () => {
    setLoadmore(prev => !prev)
  }

  useEffect(() => {
    if(loadmore) {
      setDisplayItems(professionals.slice(0, professionals.length))
    } else {
      setDisplayItems(professionals.slice(0, 5))
    }
  }, [loadmore])

  return(
    <div className="w-full h-full flex flex-col px-[60px] pt-[80px]">
      <ComponentNameTag name='PROFESSIONALS' />
      <div className='w-full h-full flex flex-wrap mt-[20px]'>
        {displayItems.map((item, index) => (
          <div key={index} className='w-1/5 mt-[20px]'>
            <ProfessionalsItem name={item.name} position={item.position}/>
          </div>
        ))}
      </div>
      <div>
      </div>
      <div className='w-full flex justify-center mt-[15px]'>
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