'use client'

import LocaleSwitcherItem from "./localeSwitcherItem"

// import LocaleSwitcherItem from "./localeSwitcherItem";

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
        languages.map((lang, index) => 
          <LocaleSwitcherItem lang={lang} key={index}/>
        )
      }
    </div>
  )
}