import { useTranslations } from "next-intl"
import ComponentNameTag from "../componentNameTag"
import { Button } from "@mui/material"
import TopicIcon from '@mui/icons-material/Topic';


export default function CodeOfProduct(){
  const t = useTranslations('locations.overview')
  return(
    <div className="w-full full flex flex-col text-[14px] text-[#002042] font-semibold">
      <ComponentNameTag name={'We hold ourselves accountable in everything we do'}/>
      <div className="flex mt-[30px]">
        <div className="w-1/2 text-[36px] leading-[46px] not-italic mr-[50px]">
        Our Code of Business Conduct is intended to help give all of our stakeholders direction as to our responsibilities and the standards we are expected to uphold.
        </div>
        <div className="w-1/2 font-sans text-[16px] leading-6 text-[#222222] font-normal">
          All of us at Tilleke & Gibbins have a responsibility to uphold the core values that drive our firm’s success. Foremost among these values is integrity. Our clients trust us to act with integrity in handling their most sensitive legal issues and solving their most complex business problem. <br />
          By acting with integrity and doing things the right way, everyone in the firm—from 1890 up until today—has contributed to building a strong firm with an outstanding reputation for legal knowledge and client service.  <br />
          Our Code of Business Conduct serves as an overview of our expected behavior and a reminder of our obligations to our clients, to our communities, and to ourselves. <br />
          <Button 
            startIcon={<TopicIcon />}
            sx={{
              bgcolor: '#002042',
              color: "white",
              px: "20px",
              mt: "20px",
              textTransform: 'none',
              fontSize: "13px",
              fontWeight: 300,
              lineHeight: "29px"
            }}
          >
            Code of Business Conduct
          </Button>
        </div>
      </div>
    </div>
  )
}