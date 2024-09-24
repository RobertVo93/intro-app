'use client'

import Overview from "../components/overview";
import CaseStudies from "../components/caseStudy/caseStudies";
import Experience from "../components/experience";
import RelatedInsights from "../components/relatedInsights/relatedInsights";
import Professionals from "../components/professionals/professionals";
import OfficeLocation from "../components/locations/officeLocation/officeLocation";
import { usePathname } from "@/src/navigation";

export default function Home() {
  const pathname = usePathname()
  let translationCollection;
  if(pathname == '/') {
    translationCollection = 'locations'
  } else {
    translationCollection = pathname.replace('/', '')
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Overview  translationCollection={translationCollection}/>
      <CaseStudies translationCollection={translationCollection}/>
      <Experience />
      <Professionals />
      <RelatedInsights />
      <OfficeLocation />
    </div>
  );
}
