'use client'

import WebNavbar from "./navBar/webNavbar";
import PageHeader from "./pageHeader/pageHeader";

export default function AppWrapper({children}:{children: React.ReactNode}){
  return(
    <div>
      <WebNavbar />
      <div className="flex flex-col">
        <PageHeader />
          {children}
        <footer />
      </div>
    </div>
  )
}