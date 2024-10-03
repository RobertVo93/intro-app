import RemoveIcon from '@mui/icons-material/Remove';

export default function ComponentNameTag({name}:{name:string}){
  return(
    <div className='text-[14px] leading-5 uppercase not-italic font-semibold flex items-center'>
      <RemoveIcon sx={{height: "30px", color: "#b91c1c"}}/> {name}
    </div>
  )
}