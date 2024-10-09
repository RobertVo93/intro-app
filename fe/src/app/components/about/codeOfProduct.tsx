import { useTranslations } from "next-intl"
import ComponentNameTag from "../componentNameTag"
import { Button, useMediaQuery } from "@mui/material"
import TopicIcon from '@mui/icons-material/Topic';
import { themeColor } from "../../theme";

export default function CodeOfProduct({translationCollection}:{translationCollection:string}){
  const t = useTranslations(translationCollection)
  const descriptions = t.raw("codeOfProduct.descriptions") as string[]
  const isXs = useMediaQuery('(max-width:640px)')
  return(
    <div className="w-full full flex flex-col text-[14px] text-primary font-semibold">
      <ComponentNameTag name={t('codeOfProduct.tag')}/>
      <div className="flex mt-[30px] xs:flex-col">
        <div className="w-1/2 text-[36px] leading-[46px] not-italic mr-[50px] xs:w-full xs:text-[28px] xs:leading-[33px]">
          {t('codeOfProduct.title')}
        </div>
        <div className="w-1/2 font-sans text-[16px] leading-6 text-secondary font-normal xs:w-full xs:mt-[20px]" >
          {
            descriptions.map((item, index) => <div key={index}>{item}</div>)
          }
          <div className="w-full xs:flex xs:justify-center">
            <Button 
              startIcon={<TopicIcon />}
              sx={{
                bgcolor: themeColor,
                color: "white",
                px: "20px",
                mt: "20px",
                textTransform: 'none',
                fontSize: "13px",
                fontWeight: 300,
                lineHeight: "29px",
                borderRadius: isXs ? "8px" : null
                
              }}
            >
              Code of Business Conduct
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}