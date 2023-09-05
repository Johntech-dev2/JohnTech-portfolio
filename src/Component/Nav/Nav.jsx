import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

function Nav() {
  return (
    // <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
    //  <img src='logo.png' className='h-32' />
    //  <ul className='flex hidden no-underline'>
    //     <li className='p-4'><a href='#Home'>Home</a></li>
    //     <li className='p-4'><a href=''>About me</a></li>
    //     <li className='p-4'><a href=''>Skills</a></li>
    //     <li className='p-4'><a href=''>Companies</a></li>
    //     <li className='p-4'><a href=''>Contact us</a></li>
    //  </ul>
    //  <div>
    //     <AiOutlineMenu size={20}/>
    //  </div>
    //  <div className=''>
    //     <ul className=''>
    //     <li className='p-4'><a href='#Home'>Home</a></li>
    //     <li className='p-4'><a href=''>About me</a></li>
    //     <li className='p-4'><a href=''>Skills</a></li>
    //     <li className='p-4'><a href=''>Companies</a></li>
    //     <li className='p-4'><a href=''>Contact us</a></li>
    //     </ul>
    //  </div>
    // </div>
    <div>
        <div  className='flex justify-between'>
            <img src='logo.png' className='h-28' />
            <div>
                <ul className='flex flex-row'>
                    <li className='mr-4 transition-all ease-in-out hover:scale-110'>Home</li>
                    <li className='mr-4 transition-all ease-in-out hover:scale-110'>About me</li>
                    <li className='mr-4 transition-all ease-in-out hover:scale-110'>Skills</li>
                    <li className='mr-4 transition-all ease-in-out hover:scale-110'>Portfolio</li>
                    <li className='mr-4 transition-all ease-in-out hover:scale-110'>Companies</li>
                    <li className='mr-4 transition-all ease-in-out hover:scale-110'>Contact us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav
