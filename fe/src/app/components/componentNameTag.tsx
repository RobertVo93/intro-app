import RemoveIcon from '@mui/icons-material/Remove';

export default function ComponentNameTag({name}:{name:string}){
  return(
    <div className='text-[14px] leading-5 uppercase not-italic font-semibold flex items-center'>
      <RemoveIcon className='text-red-700 h-[30px] items-center'/> {name}
    </div>
  )
}