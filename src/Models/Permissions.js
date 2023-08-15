import React from 'react'
import row from '../Images/chevron-down (11).png'
import PermissionSelector from '../Components/PermissionSelector'
import MutibleChoisDropDown from '../Components/MutibleChoisDropDown'



const Permissions = ({onClose, visible}) => {
   if(!visible) return null
 
     const arr=[
{name : "سيرين", id:"1" },
{name : "سارة ", id:"2" },
{name : "سميرة", id:"3" },
{name : "سعاد", id:"4" },

]
  return (
    <div className=' fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
            <div  className='lg:w-[37%] md:w-[50%] w-[80%] sm:w-[70%]  h-[70%] bg-white p-5 pl-10 pr-10'>
             <div className='flex justify-center'>
                <img onClick={onClose} className=' w-[8%] h-[8%] mr-20' src={row} />
                <h2 className='flex justify-center mb-[5%] text-x l mr-20'>تعديل السماحيات</h2>
            </div>
             <h1 className='text-xs text-end'>:إمكانية <span className='text-[#EC1630]'>إلغاء</span> الحجز من قبل</h1>
             <div className='flex justify-center items-center'> 
             <MutibleChoisDropDown paasedarr={arr}/>
             </div>
             <h1 className='text-xs text-end mt-8'>:إمكانية <span className='text-[#EC1630]'>إلغاء</span> الحجز من قبل</h1>
             <div className='flex justify-center items-center'> 
             <PermissionSelector paasedarr={arr}/> 
             </div>
             <div className='flex justify-center'>
             <div className='flex justify-center items-center bg-gradient-to-b  from-[#FFD7A6] to-[#E3AB67] mt-16 p-3 border w-[80%]'>
              <button className='text-white'>حفظ </button>
               </div>
               </div>
           
    </div>
    </div>
  )
}

export default Permissions
