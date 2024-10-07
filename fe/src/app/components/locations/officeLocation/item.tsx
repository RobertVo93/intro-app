'use client'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Button } from '@mui/material';
import { Circle, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { Dispatch, SetStateAction } from 'react';
import ComponentNameTag from '../../componentNameTag';

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
  
  const coordinate = location==='Ha Noi' ?  HNCoordinate :  HCMCoordinate
  const address = location==='Ha Noi' ?  "Ba Dinh, Ha Noi" :  "Tan Phu, Ho Chi Minh"

  return(
    <div className='w-1/2 relative xs:w-full'>
      <ComponentNameTag name={`${location} Office`} />
      <div className={`w-full h-[600px] border-primary ${location==='HN' ? 'border-r-[1px]' : 'border-l-[1px]'}`}>
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
        <div className='h-[25px] text-primary text-[18px] not-italic font-bold leading-[23.94px] flex justify-between'>
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
              <div className='flex items-center mt-2'><LocalPhoneIcon sx={{width: "15px", height: "15px", mr: "12px"}}/> 0123456789 </div>
              <div className='flex items-center mt-2'><EmailIcon sx={{width: "15px", height: "15px", mr: "12px"}}/> email@gmail.com </div>
              <div className='flex items-center mt-2'><PlaceIcon sx={{width: "15px", height: "15px", mr: "12px"}}/> {address} </div>
              <div className='w-full h-full flex justify-start pl-[10px]'>
                <Button 
                  startIcon={<SystemUpdateAltIcon />} 
                  sx={{
                    width: "140px",
                    height: "40px",
                    mt: "20px",
                    color: "white",
                    fontSize: "13px",
                    bgcolor: "#002042"
                  }}
                >
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