import React, { useEffect, useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import Typed from 'typed.js'
const Profile = () => {

  const el= useRef(null);

  useEffect(()=>{
  const typed = new Typed(el.current,{
    strings:["Web Development Learner","Exploring Web Development","Frontend Learner"],
    typeSpeed:50,
    backSpeed:30,
    loop:true,
  });
  return () => {
    typed.destroy();

  };
  
  }, []);

  
   const gitbtnref=useRef();
    const gitbtnclick =() => {
  
      gitbtnref.current.style.boxShadow="0px 0px 20px white";  
      gitbtnref.current.style.borderWidth=" 6px ";  
      
      setTimeout(() => {
        gitbtnref.current.style.borderWidth="1px";  
        gitbtnref.current.style.boxShadow="0px 0px 12px white";  
      }, 500);ut
      
    }
    
    
     const rebtnref=useRef();
      const rebtnclick =() => {
    
        rebtnref.current.style.boxShadow="0px 0px 20px white";  
        rebtnref.current.style.borderWidth=" 6px ";  
        
        setTimeout(() => {
          rebtnref.current.style.borderWidth="1px";  
          rebtnref.current.style.boxShadow="0px 0px 12px white";  
        }, 500);ut
        
      }
      
  return (
    <>
      <div id='home' className='  w-full  scroll-mt-30 container mx-auto md:justify-center md:items-center  md:flex max-sm:my-10  my-20 '>

                {/* start profile name code  */}
        <div className=' w-full    flex gap-4 px-16 flex-col font-serif  text-white  text-start'>
          

        <div className='text-3xl   '> <span className='text-red-700'>MY</span> name is</div>
        <div className='text-8xl max-sm:text-5xl  text-shadow-[0px_0px_15px_white]'>Raj Hans</div>
        <div className='text-2xl  '>and i'm a Frontend <span className='text-red-700'>wab</span> developer (Fresher)</div>
        <div className='text-2xl  h-20  '> <span className='text-indigo-400 ' ref={el}></span></div>
        
        <div className=' h-[60px]  w-full flex gap-2.5  ' >
          <a href="https://github.com/Raj-Hans-Hub" target='_blank' className=''>
          <button className='text-2xl shadow-[0px_0px_12px_white]  bg-blue-950  rounded-full  w-38 px-3 p-1.5  border cursor-pointer   hover:border-6  hover:font-bold flex items-center-safe justify-center gap-2  hover:shadow-[0px_0px_20px_white]' ref={gitbtnref} onClick={gitbtnclick}><FaGithub/> <span>Github</span>
          </button>
          </a>
          
          <a href={`${import.meta.env.BASE_URL}resume.jpeg`} target='_blank'>

          <button className='text-2xl shadow-[0px_0px_12px_white]  bg-blue-950  rounded-full   w-38 px-3 border cursor-pointer p-1.5  hover:border-6  hover:font-bold flex items-center-safe justify-center gap-2  hover:shadow-[0px_0px_20px_white]' ref={rebtnref} onClick={rebtnclick}> <span>Resume</span>
          </button>
          </a>
          
          
          </div>
        
          
        </div>
        {/* end profile name code  */}
        {/* start profile pic code  */}
        <div className='w-full bg-blue-4000  flex justify-center max-md:my-15 '>
        <img src={`${import.meta.env.BASE_URL}a.JPG`}  alt="a" className='md:w-[350px] md:h-[350px] w-[200px] h-[200px] rounded-full border-9 shadow-[0px_0px_10px_white] border-gray-900 rotate-270' />
        </div>

      </div>
    </>
  )
}

export default Profile
