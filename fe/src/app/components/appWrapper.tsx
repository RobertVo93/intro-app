'use client'

import WebNavbar from "./navBar/webNavbar";
import PageFooter from "./pageFooter";
import PageHeader from "./pageHeader/pageHeader";

export default function AppWrapper({children}:{children: React.ReactNode}){
  return(
    <div>
      <WebNavbar />
      <div className="flex flex-col">
        <PageHeader />
          {children}
        <PageFooter />
      </div>
    </div>
  )
}