import RemoveIcon from '@mui/icons-material/Remove';
import { red } from '@theme/index';


export default function ComponentNameTag({name}:{name:string}){
  return(
    <div className='text-[14px] leading-5 uppercase not-italic font-semibold flex items-center'>
      <RemoveIcon sx={{height: "30px", color: red[700] }}/> {name}
    </div>
  )
}