import React from 'react'
import { CompanyRecords } from '@/@types/interfaces'
import { ThreeDotsIcon } from '../icons'
import SectionHead from '../ui/sectionHead'
interface CompanyRecordsProps extends CompanyRecords {

}
function CompanyRecordDetails(props:CompanyRecordsProps) {
  return (
    <div className='flex items-center p-3 min-w-[300px] gap-4 border cursor-pointer rounded-lg shadow-sm'>
        <div>
          <p className='text-gray-400 '>{props.title}</p>
          
          {props.reports == 0? (<h1 className='font-bold text-2xl'>{props.sites} Sites</h1>) : <h1 className='font-bold text-xl'>{props.reports} Reports</h1>}
          <button>
            <ThreeDotsIcon />
          </button>
         
        </div>
       
    </div>
  )
}

export default CompanyRecordDetails