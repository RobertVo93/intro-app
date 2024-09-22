'use client'

import CaseStudies from "@/src/app/components/caseStudy/caseStudies"
import Experience from "@/src/app/components/experience"
import Overview from "@/src/app/components/overview"
import Professionals from "@/src/app/components/professionals/professionals"
import RelatedInsights from "@/src/app/components/relatedInsights/relatedInsights"
import AwardAndRanking from "@/src/app/components/services/awardAndRanking/awardAndRanking"

export default function Automotive(){
  return(
    <div>
      <Overview />
      <CaseStudies />
      <Experience />
      <Professionals/>
      <RelatedInsights />
      <AwardAndRanking />
    </div>
  )
}