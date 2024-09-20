'use client'

import CompanyInfo from "../components/locations/companyInfo";
import Overview from "../components/locations/overview";
import CaseStudies from "../components/locations/caseStudy/caseStudies";
import Experience from "../components/locations/experience";
import RelatedInsights from "../components/locations/relatedInsights/relatedInsights";
import Professionals from "../components/locations/professionals/professionals";
import OfficeLocation from "../components/locations/officeLocation/officeLocation";
import MoreInfo from "../components/locations/more/moreInfo";
import LocationFooter from "../components/locations/footer";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <CompanyInfo />
      <Overview />
      <CaseStudies />
      <Experience />
      <Professionals />
      <RelatedInsights />
      <OfficeLocation />
      <MoreInfo />
      <LocationFooter />
    </div>
  );
}
