'use client'

import { usePathname } from "@/src/navigation";
import AboutComponents from "../../components/about/aboutComponents";
import MoreDetail from "../../components/about/moreDetail";
import Overview from "../../components/overview";

export default function AboutUs(){
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
      <MoreDetail translationCollection={translationCollection}/>
      <AboutComponents translationCollection={translationCollection}/>
    </div>
  )
}