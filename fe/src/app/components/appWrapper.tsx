'use client'

import { ThemeProvider } from "@mui/material";
import WebNavbar from "./navBar/webNavbar";
import PageFooter from "./pageFooter";
import PageHeader from "./pageHeader/pageHeader";
import { lightTheme } from "../theme";

export default function AppWrapper({children}:{children: React.ReactNode}){
  return(
    <ThemeProvider theme={lightTheme()}>
      <WebNavbar />
      <div className="flex flex-col">
        <PageHeader />
          {children}
        <PageFooter />
      </div>
    </ThemeProvider>
  )
}