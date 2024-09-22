import { useTranslations } from "next-intl"
import ComponentNameTag from "../componentNameTag";
import IndustriesItem from "./industriesItem";
import { ServiceType } from "./type";

const fields: ServiceType[] = [
  {field: "Automative", image: 'https://keysoftinfotech.com/images/au1.jpg'},
  {field: "Aviation", image: 'https://www.pwc.ie/images/2024/aviation-outlook-report-hero.jpg'},
  {field: "Consumer Products", image: 'https://cdn.corporatefinanceinstitute.com/assets/consumer-products.jpg'},
  {field: "Energy", image: 'https://caltechsites-prod.s3.amazonaws.com/scienceexchange/images/wind-turbine-future-energy.2e16d0ba.fill-933x525-c100.jpg'},
  {field: "Fintech", image: 'https://files.dientuungdung.vn/sites/default/files/phamanh/2024/t5/cong_nghe_fintech_tai_viet_nam.jpg'},
  {field: "Insurance", image: 'https://cdn.prod.website-files.com/65ce038ac58a7f988fb59ccd/660dde5fd75afffac6083973_Insurance%20Basics%20Everything%20you%20need%20to%20know-min.webp'},
  {field: "Life Sciences", image: 'https://res-4.cloudinary.com/fieldfisher/image/upload/f_jpg,q_auto/v1/sectors/life%20sciences/lifesciences_microscope-handholdingslide_481463882_medium_hphklj'},
  {field: "Technology", image: 'https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg'},     
]

export default function Industries(){
  const t = useTranslations('locations.overview')
  return(
    <div className="w-full full flex flex-col px-[60px] py-[80px] text-[14px] text-[#002042] font-semibold">
      <ComponentNameTag name='Industries'/>
      <div className="w-full h-full flex-wrap grid gap-4 grid-cols-4">
        {
          fields.map((field, index) => (
            <div className="flex items-center justify-center mt-[20px]">
              <IndustriesItem key={index} field={field.field} image={field.image}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}