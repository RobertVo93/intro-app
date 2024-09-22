import CaseStudy from '@images/case-study.png'
import Image from 'next/image'
import RemoveIcon from '@mui/icons-material/Remove';
import CaseStudyItem from './item';
import { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { useTranslations } from 'next-intl';
import ComponentNameTag from '../componentNameTag';
import CaseStudyTransition from '../transitions/caseStudyTransition';



export default function CaseStudies() {
  const t = useTranslations('locations.caseStudies')
  const [page, setPage] = useState(1);
  const itemsPerPage = 1;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const caseStudies: CaseStudy[] = [
    {
      tag: "Vietnam | Capital Markets, Corporate/M&A",
      title: t('title1'),
      description: t('content1'),
    },
    {
      tag: "Vietnam | Capital Markets, Corporate/M&A",
      title: t('title2'),
      description: t('content2'),}
  ]

  const startIndex = (page - 1) * itemsPerPage;;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = caseStudies.slice(startIndex, endIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      if(page == caseStudies.length) {
        setPage(1)
      } else {
        setPage((prevIndex) => (prevIndex + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  return(
    <div 
      className="w-full h-[560px] relative mb-5"
    >
      <div className='w-full h-[560px] absolute top-0 left-0 z-0 flex'>
        <div className='bg-black w-[200px]'></div>
        <Image src={CaseStudy} alt='' className='w-full'/>
        <div className='bg-black w-[200px]'></div>
      </div>

      <div className='w-full h-[560px] z-50 absolute top-0 left-0 pl-[120px] text-white'>
        <div className='px-[60px] pt-[60px] pb-[30px] w-full h-full flex flex-col'>
          <ComponentNameTag name='CASE STUDIES' />
          <div className='w-[55%] h-[400px]'>
            {
              paginatedItems.map((item, index) => (
                <CaseStudyTransition key={page}>
                  <CaseStudyItem 
                    tag={caseStudies[page-1].tag} 
                    title={caseStudies[page-1].title} 
                    description={caseStudies[page-1].description} 
                  />
                </CaseStudyTransition>
              ))
            }
          </div>
          <div className='w-full flex justify-start'>
            <Pagination
              count={Math.ceil(caseStudies.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              color='primary'
              shape="rounded"
              sx={{
                mt: "10px",
                mr: "4px",
                "& .MuiPaginationItem-root": {
                  color: "grey",      
                  backgroundColor: "#f0f0f0", 
                  "&:hover": {
                    bgcolor: "#f0ffff"
                  }
                },
                "& .Mui-selected": {
                  backgroundColor: "orange", 
                  color: "white",            
                },
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}