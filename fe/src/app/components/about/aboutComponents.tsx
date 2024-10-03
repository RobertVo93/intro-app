import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useTranslations } from 'next-intl';
import { red } from '../../theme';
interface IAboutItem {
  img: string;
  title: string;
  description: string;
}
export default function AboutComponents({ translationCollection }: { translationCollection: string }) {
  const t = useTranslations(translationCollection)
  const aboutItems = t.raw("aboutItems") as IAboutItem[]

  return (
    <div className="w-full h-full px-[10%] pt-[80px] grid grid-cols-2 gap-[20px]">
      {
        aboutItems.map((item, index) => (
          <div key={index} className="w-full h-[500px] flex flex-col bg-[#77777746] cursor-pointer">
            <img alt="" src={item.img} className="w-full h-[310px]" />
            <div className="px-[20px] mt-[20px] text-[18px] font-bold not-italic leading-[24px]">
              {item.title}
            </div>
            <div className="px-[20px] mt-[20px] text-[16px] font-normal not-italic leading-[24px]">
              {item.description}
            </div>
            <div className="flex items-center px-[10px] pt-[10px] text-[16px] leading-[16px] font-bold text-primary cursor-pointer">
              Learn more <ArrowRightAltIcon sx={{color: red[700]}} />
            </div>
          </div>
        ))
      }
    </div>
  )
}