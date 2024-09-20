import Careers from "./careers";
import Contact from "./contact";
import Networks from "./network";

export default function MoreInfo(){
  return(
    <div className="w-full h-[250px] flex px-[60px] pt-[80px]">
      <div className="flex border-b">
        <Contact />
        <Careers />
        <Networks />
      </div>
    </div>
  )
}