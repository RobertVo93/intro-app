import Industries from "../../components/services/industries";
import Practices from "../../components/services/practices";

export default function Services(){
  return(
    <div className="w-full h-full flex flex-col">
      <Industries />
      <Practices />
    </div>
  )
}