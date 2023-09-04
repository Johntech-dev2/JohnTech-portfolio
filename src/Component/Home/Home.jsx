import React from 'react'
import Typical from 'react-typical'
function Home() {
  return (
    <div>
       <div>  
          <h1 className='text-[35px] font-medium md:text-[30px] ml-14' >Hello,</h1>
       </div>
       <div className='flex'>
         <h1 className='text-[35px] font-medium md: ml-14 flex-wrap'>I am a</h1>
          <h1 className='text-[40px] font-medium text-purple-600'>
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
    </div>
  )
}

export default Home