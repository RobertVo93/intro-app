'use client'

import RemoveIcon from '@mui/icons-material/Remove';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Button } from '@mui/material';
import { Circle, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { Dispatch, SetStateAction } from 'react';

type ItemProps = {
  location: string;
  showLocation: boolean,
  setShowLocation: Dispatch<SetStateAction<boolean>>
}

export default function OfficeLocationItem({
  location,
  showLocation,
  setShowLocation
} : ItemProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const HNCoordinate = {
    lat: 21.029043,
    lng: 105.852659
  };
  const HCMCoordinate = {
    lat: 10.799973597352631,
    lng: 106.61289903842204
  };
  
  let coordinate = location==='Ha Noi' ?  HNCoordinate :  HCMCoordinate
  let address = location==='Ha Noi' ?  "Ba Dinh, Ha Noi" :  "Tan Phu, Ho Chi Minh"

  return(
    <div className='w-1/2 relative'>
      <div className='ml-[20px] mb-5 flex items-center text-[14px] text-[#002042] font-semibold'>
        <RemoveIcon className='text-red-700 h-[30px]'/> 
        {location} Office
      </div>
      <div className={`w-full h-[600px] border-[#002042] ${location==='HN' ? 'border-r-[1px]' : 'border-l-[1px]'}`}>
        <LoadScript googleMapsApiKey={`${apiKey}`}>
          <GoogleMap
            mapContainerStyle={{
              height: "100%",
              width: "100%"
            }}
            center={coordinate}
            zoom={15}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false
            }}
          >
            <Marker position={coordinate} />
            <Circle
              center={coordinate}
              radius={500}
              options={{
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillOpacity: 0.1
              }}
            />
          </GoogleMap>
        </LoadScript>
      </div>

      <div 
        className={`${showLocation ? 'w-[300px] h-[300px] p-[40px]' : 'w-[50px] h-[50px]'} absolute right-5 bottom-5 bg-white rounded-lg flex flex-col`}>
        <div className='h-[25px] text-[#002042] text-[18px] not-italic font-bold leading-[23.94px] flex justify-between'>
          {showLocation ? 
            <div>{location} Office</div> : 
            null
          }
          <div 
            className={showLocation ? '': 'w-[50px] h-[50px] flex items-center justify-center'}
            onClick={() => {
              setShowLocation(prev => !prev)
            }}
          >
            {showLocation ? 
              <VisibilityOffIcon className='cursor-pointer'/> : 
              <VisibilityIcon className='cursor-pointer'/>
            }
          </div>
        </div>
        <div>
          {
            showLocation ? 
            <div>
              <div className='flex items-center mt-2'><LocalPhoneIcon className='w-[15px] h-[15px] mr-3'/> 0123456789 </div>
              <div className='flex items-center mt-2'><EmailIcon className='w-[15px] h-[15px] mr-3'/> email@gmail.com </div>
              <div className='flex items-center mt-2'><PlaceIcon className='w-[15px] h-[15px] mr-3'/> {address} </div>
              <div className='w-full h-full flex justify-start pl-[10px]'>
                <Button startIcon={<SystemUpdateAltIcon />} className='w-[140px] h-[40px] mt-[20px] text-white text-[13px] bg-[#002042]'>
                  PDF Map
                </Button>
              </div>
            </div> : null
          }
        </div>
      </div>

    </div>
  )
}