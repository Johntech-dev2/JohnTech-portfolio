import React from 'react'
import Typical from 'react-typical'
function Home() {
  return (
    <div>
       <div className='text-xl'>  
          Hello, I'M
       </div>
       <div>
          <h1 className='text-4xl'>
           <Typical 
           loop={Infinity}
           steps={[
             "Ethusiastic developer",
              1000,
             "React Developer",
              1000,
             "Web developer",
              1000,
             "Web app developer",
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