'use client'

import MoreInfo from "@/src/app/components/history/moreInfo";
import TimeLine from "@/src/app/components/history/timeLine";
import Overview from "@/src/app/components/overview";
import { usePathname } from "@/src/navigation";

export default function History(){
  const pathname = usePathname()
  let translationCollection;
  if(pathname == '/') {
    translationCollection = 'locations'
  } else {
    translationCollection = pathname.replace('/', '')
  }
  return(
    <div>
      <Overview translationCollection={translationCollection}/>
      <TimeLine translationCollection={translationCollection}/>
      <MoreInfo translationCollection={translationCollection}/>
    </div>
  )
}