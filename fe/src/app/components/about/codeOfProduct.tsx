import { useTranslations } from "next-intl"
import ComponentNameTag from "../componentNameTag"
import { Button } from "@mui/material"
import TopicIcon from '@mui/icons-material/Topic';
import { themeColor } from "../../theme";

export default function CodeOfProduct({translationCollection}:{translationCollection:string}){
  const t = useTranslations(translationCollection)
  const descriptions = t.raw("codeOfProduct.descriptions") as string[]
  return(
    <div className="w-full full flex flex-col text-[14px] text-primary font-semibold">
      <ComponentNameTag name={t('codeOfProduct.tag')}/>
      <div className="flex mt-[30px]">
        <div className="w-1/2 text-[36px] leading-[46px] not-italic mr-[50px]">
          {t('codeOfProduct.title')}
        </div>
        <div className="w-1/2 font-sans text-[16px] leading-6 text-secondary font-normal">
          {
            descriptions.map((item, index) => <div key={index}>{item}</div>)
          }
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