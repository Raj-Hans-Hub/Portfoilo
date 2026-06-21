import React from 'react'

const Projects = () => {
    return (
        <>   <hr className='bg-gray-500 h-[1px] mt-20 '/>
            <section id='projects' className=' scroll-mt-11 my-9 max-sm:scroll-mt-25    container mx-auto '>
                <div className='text-start  my-3 text-4xl font-serif max-sm:text-center max-sm:ms-0  '>PROJECTS</div>
                {/* start conding project row */}
                <div className='flex gap-2  my-15 max-sm:my-0 p-5 px-10 flex flex-col justify-center items-center md:flex-row  '>
                    <div className="project_item_box    flex w-full">
                        <div className="project_pic  "><img src={`${import.meta.env.BASE_URL}weather.png`} alt="" className='h-[100px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  font-semibold px-5 w-full">
                            <h2 className='text-blue-400  text-2xl'>Weather Port</h2>
                            <ul className='list-disc p-5 max-sm:p-0'>
                                <li>Creat a Weather port app list using html, css and js</li>
                                <li>Added features like fetch api   </li>
                                <li>
                                <li>  <a href="https://raj-hans-hub.github.io/weather" className='text-blue-700 underline'>Link: https://raj-hans-hub.github.io/weather </a>  </li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="project_item_box flex w-full">
                        <div className="project_pic  "><img src={`${import.meta.env.BASE_URL}todo2.png`} alt="" className='h-[100px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  px-5 font-semibold w-full ">
                            <h2 className='text-blue-400 text-2xl'>Todo List</h2>
                            <ul className='list-disc p-5 max-sm:p-0'>
                                <li>Creat a Todo list using React.js</li>
                                <li>Added features like add , edit and delete  </li>
                                 <li>
                                <li>  <a href="https://raj-hans-hub.github.io/Todo-list" className='text-blue-700 underline'>Link: https://raj-hans-hub.github.io/Todo-list </a>  </li></li>
                                
                            </ul>
                        </div>
                    </div>

                </div>
                {/* end conding project row */}
                {/* start conding project row2 */}
                <div className='flex gap-2 my-15 max-sm:my-0  px-10 flex flex-col justify-center items-center md:flex-row'>

                    <div className="project_item_box  flex w-full">
                        <div className="project_pic  "><img src={`${import.meta.env.BASE_URL}net.png`} alt="" className='h-[100px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  font-semibold px-5 w-full">
                            <h2 className='text-blue-400 text-2xl'>Netflix </h2>
                            <ul className='list-disc p-5 max-sm:p-0'>
                                <li>Clone  a netflix home page clone using html, css </li>
                                
                                <li>  <a href="https://raj-hans-hub.github.io/netflix" className='text-blue-700 underline'>Link: https://raj-hans-hub.github.io/netflix </a>  </li>
  
                            </ul>
                        </div>
                    </div>
                    <div className="project_item_box  flex w-full">
                        <div className="project_pic  "><img src={`${import.meta.env.BASE_URL}tw2.png`} alt="" className='h-[100px] w-[200px] shadow-[0_0_30px_rgba(0,0,0,0.9)]' alt="" srcset="" /></div>
                        <div className="project_detail  px-5 font-semibold w-full ">
                            <h2 className='text-blue-400 text-2xl'>Text editer</h2>
                            <ul className='list-disc p-5 max-sm:p-0'>
                                <li>  a Text Editer </li>
                                
                                <li>
                                <li>  <a href="https://raj-hans-hub.github.io/textediter" className='text-blue-700 underline'>Link: https://raj-hans-hub.github.io/textediter </a>  </li></li>
  
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Projects
