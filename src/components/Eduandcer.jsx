import React from 'react'

const Eduandcer = () => {
  return (
    <>
     <hr className='bg-gray-500 h-[1px] '/>
      <div  id='edu' className='scroll-m-11 max-sm:scroll-mt-20  mx-auto container      pb-9  '>
        <div className='md:text-start    my-9 text-4xl  font-serif max-sm:text-center max-sm:ms-0'>EDUCATION AND CERTIFICECTS</div>
        <div className='flex gap-2 gap-y-5 container mx-auto px-15 flex-col justify-center  items-center md:flex-row'>

        <div className="project_item_box shadow-[0px_0px_10px_white]   flex w-full">
            
            <div className="project_detail  flex font-serif text-3xl justify-center items-center w-full">
                <ul className=' text-center'>
                    <li>Govt.Senior Secondary </li>
                    <li className='text-blue-400'>Losal, Sikar</li>
                </ul>
            </div>
        </div>
        <div className="project_item_box   flex w-full">
            <div className="project_pic mx-auto   "><a href={`${import.meta.env.BASE_URL}stp.pdf`} target='_blank'><img src={`${import.meta.env.BASE_URL}s.jpg`} alt="" className='h-[128px] w-[180px] shadow-[0_0_20px_rgba(255,255,255,0.9)]  pointer-events-none ' alt="" srcset="" /></a></div>
            
        </div>
        <div className="project_item_box  flex w-full">
            <div className="project_pic  mx-auto "><a href={`${import.meta.env.BASE_URL}hub.pdf`} target='_blank'><img src={`${import.meta.env.BASE_URL}h.png`} alt="" className='h-[128px] w-[180px]  pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.9)]' alt="" srcset="" /></a></div>
            
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Eduandcer
