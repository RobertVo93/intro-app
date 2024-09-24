'use client'

import CaseStudies from "@/src/app/components/caseStudy/caseStudies"
import Experience from "@/src/app/components/experience"
import Overview from "@/src/app/components/overview"
import Professionals from "@/src/app/components/professionals/professionals"
import RelatedInsights from "@/src/app/components/relatedInsights/relatedInsights"
import AwardAndRanking from "@/src/app/components/services/awardAndRanking/awardAndRanking"
import { usePathname } from "@/src/navigation"

export default function Automotive(){
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
      <CaseStudies translationCollection={translationCollection}/>
      <Experience />
      <Professionals/>
      <RelatedInsights />
      <AwardAndRanking />
    </div>
  )
}