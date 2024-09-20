'use client'

import LocaleSwitcherItem from "./localeSwitcherItem";

export default function LocaleSwitcher(){
  const languages = [
    'English', 'Vietnamese'
  ]

  return (

    <div 
      style={{
        textShadow: "2px 2px 3px black"
      }}
    >
      {
        languages.map(lang => 
          <LocaleSwitcherItem lang={lang}/>
        )
      }
    </div>
  )
}