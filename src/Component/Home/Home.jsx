import React from 'react'
import Typical from 'react-typical'
function Home() {
  return (
       <div>  
          <h1 className='text-[35px] font-medium md:text-[30px] ml-14' >Hello,</h1>
       <div className='flex'>
         <h1 className='text-[35px] font-medium md: ml-14 whitespace-normal'>I am a</h1>
          <h1 className='text-[40px] font-medium text-purple-600 md:whitespace-normal'>
           <Typical 
           loop={Infinity}
           steps={[
             "Ethusiastic dev",
              1000,
             "React Developer",
              1000,
             "Web developer",
              1000,
             "Web app dev",
              1000,
             "React Native",
              1000,
           ]}
           />
          </h1>
       </div>
       
      <p className='text-gray-500 ml-14 w-96 md: whitespace-normal'>I am John tech i am a front-end react web developer and  With a passion for creating innovative and user-friendly websites.</p> 
      <br />
      <div>
      <a href='John Resume.pdf' download='John Resume.pdf'>
      <button className='hover:z-50 transition-all duration-300 ease-in-out  hover:scale-125 bg-purple-600 p-2 rounded-md text-white ml-14 mr-14' >
         Resume
      </button>
      </a>
      <a href='#'>
         <button className='hover:z-50 transition-all duration-300 ease-in-out hover:scale-125 bg-purple-600 p-2 rounded-md text-white'>Hire me</button>
      </a>
      </div>
    </div>
    
  )
}

export default Home