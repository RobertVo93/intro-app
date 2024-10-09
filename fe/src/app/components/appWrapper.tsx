'use client'

import { ThemeProvider } from "@mui/material";
import WebNavbar from "./navBar/webNavbar";
import PageFooter from "./pageFooter";
import PageHeader from "./pageHeader/pageHeader";
import { lightTheme } from "../theme";

import { Provider } from 'react-redux'
import { store } from "@/src/redux/store";

export default function AppWrapper({children}:{children: React.ReactNode}){
  return(
    <ThemeProvider theme={lightTheme()}>
      <Provider store={store}> 
        <WebNavbar />
        <div className="flex flex-col">
          <PageHeader />
            {children}
          <PageFooter />
        </div>
      </Provider>
    </ThemeProvider>
  )
}