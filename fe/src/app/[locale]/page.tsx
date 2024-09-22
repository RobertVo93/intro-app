'use client'

import Overview from "../components/overview";
import CaseStudies from "../components/caseStudy/caseStudies";
import Experience from "../components/experience";
import RelatedInsights from "../components/relatedInsights/relatedInsights";
import Professionals from "../components/professionals/professionals";
import OfficeLocation from "../components/locations/officeLocation/officeLocation";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Overview />
      <CaseStudies />
      <Experience />
      <Professionals />
      <RelatedInsights />
      <OfficeLocation />
    </div>
  );
}
