import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Aces from '../public/assets/ACES.svg'
import form from '../app/form/page'

const Header = () => {
  return (
    <div className='flex justify-center '>
        
        <div className='header lg:h-screen w-[75%]'>
            {/* <div className='h-[1px] bg-white w-full rotate-[35deg] bg-opacity-50 ml-20'></div>     */}
            {/* <img src="../assets/pngtree.png" className='h-screen w-full' alt="" /> */}
            <div className='flex justify-center lg:justify-between items-center h-20 '>
                <div className='uppercase text-white'><Image src={Aces} alt='svg' className=' h-14 lg:h-20'/></div>
                <div className='hidden lg:block'>
                <ul className='text-gray-400 text-[18px] flex flex-row items-center gap-9 font-mono font-semibold '>
                    <li><Link href="">Home</Link></li>
                    <li><Link href="">Rules</Link></li>
                    <li><Link href="">Register</Link></li>
                    <li><Link href="">Contact</Link></li>
                </ul>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
            <div className=''>
                <div className='text-white leading-none flex justify-center mt-10 lg:mt-28 flex-col'>
                    <div className='flex items-center '>
                <div className='uppercase text-[max(2.5rem,min(5vw,5.2rem))]  htext text-left mb-3 lg:mb-0 '>Hack</div>
                <div className='ml-3 lg:ml-7 text-[max(0.8rem,min(1vw,1.2rem))]  text-white font-mono leading-relaxed font-bold'>
                    <div className='h-[6px] w-28 bg-[#39a7ff] hidden lg:block'></div>
                   <div className='  lg:mt-[6px] flex'> Venue: MJCET <span className='block lg:hidden ml-[4px]'> Hyd.</span> <span className='hidden mx-[8px] lg:block'> Hyderabad.</span></div>
                   <div className='hidden lg:block'><div className='flex '> Date: 17 <span className='block lg:hidden ml-[4px]'> Dec.</span> <span className='hidden mx-[8px] lg:block'> December</span> <span className='hidden lg:block'>2023.</span></div>
                   </div>
                </div>

                </div>
                    <div className='uppercase text-[max(2.5rem,min(5vw,5.2rem))] bg-clip-text text-transparent   bg-gradient-to-br from-white via-gray-200 to-[#0E0F68] htext'>revolution <span className=' text-[#39a7ff] text-[max(2.5rem,min(5.2vw,5.4rem))] '>.</span></div>
                </div>
            
            <div>
                <div className='h-[3px] lg:h-2 w-28 lg:w-72 bg-[#39a7ff] mt-3 lg:mt-6 ml-1'></div>

                <div className='hsmall text-white mt-2 lg:mt-4 font-extrabold ml-1 text-[max(1.1rem,min(2.5vw,2.7rem))] '>Powered by <span className='  text-[max(1.1rem,min(2.7vw,2.7rem))]'>ACES</span></div>
            </div>
           
            </div>
            <div>
                <a className='' href='../form'>
                <div className='flex justify-center items-center px-7 py-3 border-2 border-[#39a7ff] rounded-lg shadows cursor-pointer hover:bg-[#39a7ff] hover:bg-opacity-70 mt-10 lg:mt-20  duration-500'>
                    <div className='text-lg lg:text-xl text-white hsmall flex justify-center items-center font-extrabold'>Register Now <BsArrowRight  className='ml-1'/></div>
                </div>
                </a>
            </div>
            </div>
            

            <div className='flex flex-col justify-center items-center mt-16 mb-3 lg:mb-0 ml-1 gap-3'>
                <div className='font-mono text-gray-400 text-md lg:text-lg leading-snug'>
                    Cash Prizes Worth
                </div>
                <div>
                <span className='htext leading-tight bg-clip-text text-transparent   bg-gradient-to-br from-white via-gray-200 to-[#0E0F68] text-[max(2rem,min(4vw,4.2rem))] '><span className='text-bold '>&#8377; </span>3,00,000</span>
                </div>
            </div>

        </div>

       

        </div>
       
    
  )
}

export default Header