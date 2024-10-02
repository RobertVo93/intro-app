import ComponentNameTag from "../componentNameTag";
import PracticesItem from "./practicesItem";
import { ServiceType } from "./type";

const fields: ServiceType[] = [
  {field: "Banking and Finance", image: 'https://vtn-partners.com/data/uploads/2023/03/nganh-tai-chinh-ngan-hang-la-gi-hinh-anh3.jpg'},
  {field: "Capital Markets", image: 'https://cdn.corporatefinanceinstitute.com/assets/capital-markets.jpeg'},
  {field: "Competition and Trade", image: 'https://finestel.com/blog/wp-content/uploads/2023/08/Trading-Tournaments-780x450.jpg'},
  {field: "Compliance and Investigations", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1W-oExRrFIjOD4bcHl-UBwiw_E1utcDnjpA&s'},
  {field: "Corporate/M&A", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v3uT8CcMV5KFeMARa0TE0R3FYJ_JkZqhXQ&s'},
  {field: "Dispute Resolution and Litigation", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17SYNphN3lgwZxHP2d0PxFruyqYEwO2gznQ&s'},
  {field: "Employment", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7E0y4BFftYwU-y-aEr8zdbbNTVFPD9MTKQ&s'},
  {field: "Intellectual Property", image: 'https://bcp.cdnchinhphu.vn/344443456812359680/2023/6/22/sohuutritue-16874241261501313212728.jpg'},     
  {field: "Real Estate", image: 'https://www.propertymanagementconsulting.com/hubfs/Stock%20images/Real%20estate%20agent%20offer%20house%20represented%20by%20model.jpg'},     
  {field: "Regulatory Affairs", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1p-YvKa6_h6kzI07xpjDj3ssdK4HQSfgqg&s'},     
  {field: "Tax", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2XKcfjEKVSMDbsaCDT56cN6iKUOTkRd79A&s'},     
]

export default function Practices(){

  return(
    <div className="w-full full flex flex-col px-[60px] py-[80px] text-[14px] text-white font-semibold bg-[#002042]">
      <ComponentNameTag name='Practices'/>
      <div className="w-full h-full flex-wrap grid gap-4 grid-cols-4">
        {
          fields.map((field, index) => (
            <div key={index} className="flex items-center justify-center mt-[20px]">
              <PracticesItem key={index} field={field.field} image={field.image}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}