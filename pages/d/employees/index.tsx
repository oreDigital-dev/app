import React from 'react'
import SectionHead from '@/components/ui/sectionHead'
export default function index() {
    const tableData = [
        {
            name:'MAHORO Peace',
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        },
        {
            name:'MAHORO Peace',
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        },
        {
            name:'MAHORO Peace',
            
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        },
        {
            name:'MAHORO Peace',
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        },
        {
            name:'MAHORO Peace',
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        },
        {
            
            name:'MAHORO Peace',
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        },
        {
            name:'MAHORO Peace',
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        },
        {
            name:'MAHORO Peace',
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        },
        {

            name:'MAHORO Peace',
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        },
        {
            name:'MAHORO Peace',
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        },
        {
            name:'MAHORO Peace',
            address:'Muhanga, Gihanga',
            phone:'+250 788 999 111',
            empId:'ZBM23334',
            salary:'50, 000 Frw'
        }

    ]
    return (
<div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex items-start justify-between">
         
          {/* <MapSite /> */}
          <SectionHead
            title="Employees"
            desc="All people Employeed by your company."
          />
        <div className='flex'>
           <p className=''>Site:</p>
            <select className='bg-[#F3F2F5] w-28 ml-2 py-1'>
                <option value="all">All</option>
                <option value="p">Danger</option>
            </select>
        </div>
    
        </div>
      
        <table className="w-full my-6 rounded-md  text-sm overflow-hidden ">
        <thead className="text-left font-sans font-bold rounded-tl-md rounded-tr-md w-full">
          <tr className='border-b-[1px] border-[#C4C4C425] pb-4'>
            <th className="py-3 px-4">#</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Address</th>
            <th className="py-3 px-4">Phone Number</th>
            <th className="py-3 px-4">Employee ID</th>
            <th className="py-3 px-4">Salary</th>
          </tr>
        </thead>

        <tbody>
            {tableData.map((tableDetail) => (
         <tr className='border-b-[1px] border-[#C4C4C425]'>
                  <td className="py-1 px-4"><div className="h-6 w-6 bg-gray-200 rounded-md"></div></td>
                  <td className="py-3 px-4 text-[#6D6D6D]">
                    {tableDetail.name}
                  </td>
                  <td className="py-3 px-4 text-[#6D6D6D]">{tableDetail.address}</td>
                  <td className="py-3 px-4 text-[#6D6D6D]">{tableDetail.phone}</td>
                  <td className="py-3 px-4 text-[#6D6D6D] ">{tableDetail.empId}</td>
                  <td className="py-3 px-4 text-[#6D6D6D]">{tableDetail.salary}</td>
                  
            
                </tr>
            
            ))}
        </tbody>
      </table>
      </div>
   
    </div>
    
  )
}

