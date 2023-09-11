import React,{useState} from 'react'
import SectionHead from '@/components/ui/sectionHead'
import { FaBook, FaPencilAlt,FaTrashAlt,FaToggleOff } from 'react-icons/fa'
import myProfile from '../../../assets/images/Profile.png'
import Image from 'next/image'
export default function index() {
    const tableData = [
        {
            name:'MAHORO Peace',
            role:'Surveyor',
            phone:'+250 788 999 111',
            status:'Active',
            details:'22nd January 2023'
        },
        {
            name:'MAHORO Peace',
            role:'Surveyor',
            phone:'+250 788 999 111',
            status:'Inactive',
            details:'22nd January 2023'        },
        {
            name:'MAHORO Peace',
            role:'Surveyor',
            phone:'+250 788 999 111',
            status:'Active',
            details:'22nd January 2023'        },
        {
            name:'MAHORO Peace',
            role:'Surveyor',
            phone:'+250 788 999 111',
            status:'Inactive',
            details:'22nd January 2023'        },
        {
            name:'MAHORO Peace',
            role:'Surveyor',
            phone:'+250 788 999 111',
            status:'Active',
            details:'22nd January 2023'        },
        {
            
            name:'MAHORO Peace',
            role:'Surveyor',
            phone:'+250 788 999 111',
            status:'Active',
            details:'22nd January 2023'        },
        {
            name:'MAHORO Peace',
            role:'Surveyor',
            phone:'+250 788 999 111',
            status:'Active',
            details:'22nd January 2023'     
             },
       

    ]
    const [addNewMember, setAddNewMember] = useState(false)
    const [updateMember, setUpdateMember] = useState(false)
    const [deleteMember, setDeleteMember] = useState(false)
    return ( 
<div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        {/* <div className="flex items-start justify-between">
         
          <MapSite />
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
    
        </div> */}
        <div className='w-full flex justify-between  bg-white py-4'>
          
          <div className='flex bg-white py-3 rounded-lg gap-6 pl-6 pr-6 shadow-sm shadow-gray-200'>
          <button>Members</button>
          <button>Admins</button>
          </div>
          <div className=''>
            <p><span className='text-gray-400 text-sm'>Total Employees: </span>1000</p>
            <p><span className='text-gray-400 text-sm'>Current used: </span>700</p>
          </div>
          
        </div>
        <div className='flex mt-6 justify-between'>
        <div className='flex gap-6'>
          <h1 className='font-bold text-black text-lg'>Members</h1>
          <button onClick={()=>setAddNewMember(true)} className='bg-[#5160B3] text-white font-bold py-2 pl-4 pr-4 rounded-xl text-sm'>Add new</button>
          <button className='text-black py-2 pl-4 pr-4 shadow-sm shadow-black rounded-xl text-sm'>Import Members</button>
          <button className='text-black py-2 pl-4 pr-4 shadow-sm shadow-black rounded-xl text-sm'>Export members (Excel)</button>
          </div>
          <div>
          <button className='bg-[#5160B3] text-white font-bold py-2 pl-4 pr-4 rounded-xl'>Filter</button>
          </div>
          </div>
      
        <table className="w-full my-6 rounded-md  text-sm overflow-hidden ">
        <thead className="text-left font-sans font-bold rounded-tl-md rounded-tr-md w-full">
          <tr className='border-b-[1px] border-[#C4C4C425] pb-4'>
            <th className="py-3 px-4">Profile</th>
            <th className="py-3 px-4">Member name</th>
            <th className="py-3 px-4">Phone Number</th>
            <th className="py-3 px-4">Role</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Operation</th>
            <th className="py-3  px-4">Details</th>
          </tr>
        </thead>

        <tbody>
            {tableData.map((tableDetail) => (
         <tr className='border-b-[1px] border-[#C4C4C425]'>
                  <td className="py-3 px-4">
                    <Image src={myProfile} alt='The profile' />
                  </td>
                  <td className="py-3 px-4 text-[#6D6D6D]">
                    {tableDetail.name}
                  </td>
                  <td className="py-3 px-4 text-[#6D6D6D]">{tableDetail.phone}</td>
                  <td className="py-3 px-4 text-[#6D6D6D]">{tableDetail.role}</td>
                  
                  <td className="py-3 px-4 text-[#6D6D6D] ">{tableDetail.status == 'Active' ? <button className='text-[#00B86066] bg-[#00B86039] border-2 border-[#00B86066] py-2 text-center px-12 rounded-full'>{tableDetail.status}</button>:<button className='text-[#FF494978] bg-[#FF494978] border-2 border-[#FF494978] py-2 text-center px-12 rounded-full'>{tableDetail.status}</button>}</td>
                  <td className="py-3 px-4 text-[#6D6D6D]">
                    <div className='flex text-[#5160B3] justify-between'>
                        <FaBook />
                        <FaPencilAlt onClick={()=>setUpdateMember(true)} />
                        <FaTrashAlt  onClick={()=> setDeleteMember(true)}/>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[#6D6D6D]">{tableDetail.details}</td>
                  
            
                </tr>
            
            ))}
        </tbody>
      </table>
      </div>
      {addNewMember &&
        <div className='absolute h-screen w-full left-0 top-0 right-0 bg-[#00000025] flex justify-center items-center'>
        <div className='bg-white pt-8 pb-8 w-1/2 rounded-lg shadow-md shadow-gray-200 flex justify-between'>
          
         <div className='ml-6 w-1/3 '>
         <h1 className='text-center font-bold'>New Member</h1>
         <h1 className='text-center font-bold pt-6'>Add Profile Picture</h1>
         <div className='h-32 w-32 rounded-full bg-gray-200 mt-8 ml-12'>
            
         </div>
         <p className='text-center pt-4'><a href="" className='text-[#5160B3]'>Upload a photo</a></p>
         </div>
         <div className='w-1/2 mt-16'>
          <form action="" className=''>
            <div className=''>
            <label htmlFor="" className='text-black font-bold text-sm'>Member name</label>
            <input type="text" name="" placeholder='Ex: John Doe' id="" className='py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4' />
            </div>
            <div>
            <label htmlFor="" className='text-black font-bold text-sm'>Mobile Number</label>
            <input type="tel" name="" placeholder='Ex: 07974857383' id="" className='py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4' />
            </div>
            <div>
            <label htmlFor="" className='text-black font-bold text-sm'>Member Role</label>
            <select name="" id="" className='py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4'>
              <option value="">COMPANY_MANAGER</option>
            </select>
            </div>
            <div className='flex flex-col'>
            <label htmlFor="" className='text-black font-bold text-sm'>Status</label>
            <div className='flex'>
             
            <FaToggleOff className='text-xl mt-1'/>
            <p className='pl-2 text-lg'>Inactive</p>
            </div>
            </div>
            
          </form>
          <div className='gap-6 mt-10 flex justify-end mr-16'>
            <button onClick={()=> setAddNewMember(false)} className='text-[#5160B3] bg-white shadow-xs shadow-gray-200'>Cancel</button>
            <button className='py-2 bg-[#00820D] text-white text-sm font-bold rounded-full pl-6 pr-6'>Save</button>
          </div>
         </div>
        </div>
      </div>

      }
      {updateMember &&
       <div className='absolute h-screen w-full left-0 top-0 right-0 bg-[#00000025] flex justify-center items-center'>
       <div className='bg-white pt-8 pb-8 w-1/3 rounded-lg shadow-md shadow-gray-200'>
        <div className='flex justify-end mr-12'>
        {/* <div className='h-32 w-32 rounded-full bg-gray-200 flex justify-end'>   */}
        <Image src={myProfile} alt='the profile' className='h-32 w-32 rounded-full' />
        {/* </div> */}
        </div>
        <div className='flex justify-end'>
        <p className='pt-4'><a href="" className='text-[#5160B3] pr-14'>Change photo</a></p>
        </div>
        <div className='w-full ml-8 mt-16'>
         <form action="" className=''>
           <div className=''>
           <label htmlFor="" className='text-black font-bold text-sm'>Member name</label>
           <input type="text" name="" placeholder='Ex: John Doe' id="" className='py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4' />
           </div>
           <div>
           <label htmlFor="" className='text-black font-bold text-sm'>Mobile Number</label>
           <input type="tel" name="" placeholder='Ex: 07974857383' id="" className='py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4' />
           </div>
           <div>
           <label htmlFor="" className='text-black font-bold text-sm'>Member Role</label>
           <select name="" id="" className='py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4'>
             <option value="">COMPANY_MANAGER</option>
           </select>
           </div>
           <div className='flex flex-col'>
           <label htmlFor="" className='text-black font-bold text-sm'>Status</label>
           <div className='flex'>
            
           <FaToggleOff className='text-xl mt-1'/>
           <p className='pl-2 text-lg'>Inactive</p>
           </div>
           </div>
           
         </form>
         <div className='gap-6 mt-10 flex justify-end mr-16'>
           <button onClick={()=> setUpdateMember(false)} className='text-[#5160B3] bg-white shadow-xs shadow-gray-200'>Cancel</button>
           <button className='py-2 bg-[#00820D] text-white text-sm font-bold rounded-full pl-6 pr-6'>Save</button>
         </div>
        </div>
       </div>
       </div>

      }
      {deleteMember && 
       <div className='absolute h-screen w-full left-0 top-0 right-0 bg-[#00000025] flex justify-center items-center'>
       <div className='bg-white pt-8 pb-8 w-1/3 rounded-lg shadow-md shadow-gray-200 '>
      
         <h1 className='text-center font-extrabold text-black pt-6 text-lg'>You are about to delete this member</h1>
         <p className='text-center pt-6'>This will remove this member from the list</p>
         <p className='text-center'>Are you sure</p>
         <div className='gap-6 mt-10 flex justify-end mr-16'>.
           <button onClick={()=> setDeleteMember(false)} className='text-[#5160B3] bg-white shadow-xs shadow-gray-200'>Cancel</button>
           <button className='py-2 bg-[#FF4949] text-white text-sm font-bold rounded-full pl-6 pr-6'>Delete</button>
         </div>
       </div>
     </div>
      }
   
    </div>
    
  )
}

