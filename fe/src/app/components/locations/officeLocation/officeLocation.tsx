'use client'

import React, { useState } from 'react';
import OfficeLocationItem from './item';

export default function OfficeLocation(){
  const [showLocationHN, setShowLocationHN] = useState(true)
  const [showLocationHCM, setShowLocationHCM] = useState(true)

  return(
    <div className="w-full h-full flex pt-[80px]">
      <OfficeLocationItem 
        location='Ha Noi'
        showLocation={showLocationHN} 
        setShowLocation={setShowLocationHN}
      />

      <OfficeLocationItem 
        location='Ho Chi Minh'
        showLocation={showLocationHCM} 
        setShowLocation={setShowLocationHCM}
      />
    </div>
  )
}

