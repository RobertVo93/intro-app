'use client'

import PageHeader from "../components/pageHeader/pageHeader";
import Overview from "../components/locations/overview";
import CaseStudies from "../components/locations/caseStudy/caseStudies";
import Experience from "../components/locations/experience";
import RelatedInsights from "../components/locations/relatedInsights/relatedInsights";
import Professionals from "../components/locations/professionals/professionals";
import OfficeLocation from "../components/locations/officeLocation/officeLocation";
import MoreInfo from "../components/locations/more/moreInfo";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Overview />
      <CaseStudies />
      <Experience />
      <Professionals />
      <RelatedInsights />
      <OfficeLocation />
      <MoreInfo />
    </div>
  );
}
