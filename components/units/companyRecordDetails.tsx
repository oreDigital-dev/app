import React from 'react';
import { CompanyRecords } from '@/@types/interfaces';
import { ThreeDotsIcon } from '../icons';
import SectionHead from '../ui/sectionHead';

interface CompanyRecordsProps extends CompanyRecords {}

const COLORS = ["#5160B3", "#000000", "#2CA900", "#D29539"];

function CompanyRecordDetails(props: CompanyRecordsProps) {
  return (
    <div className='flex items-center mb-4 p-3 min-w-[250px] gap-4 border cursor-pointer rounded-lg shadow-sm'>
      <div className='w-full'>
        <p className='text-gray-400'>{props.title}</p>

        {props.reports === 0 ? (
          <h1 className='font-bold text-2xl' style={{ color: COLORS[Math.floor(Math.random() * COLORS.length)] }}>
            {`${props.sites} Sites`}
          </h1>
        ) : (
          <h1 className='font-bold text-xl' style={{ color: COLORS[Math.floor(Math.random() * COLORS.length)] }}>
            {`${props.reports} Reports`}
          </h1>
        )}
        <button className='float-right mt-4'>
          <ThreeDotsIcon />
        </button>
      </div>
    </div>
  );
}

export default CompanyRecordDetails;
