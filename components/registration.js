import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Registration = () => {
  return (
    
         <div className="flex justify-center flex-col items-center   pt-5    lg:pt-5 mb-10">
      <div className="w-[90%] lg:w-[80%] ">
        <div className="text-white text-center mt-4 mb-7 text-[50px] htext ">
          Registration
        </div>
        <div className='flex flex-col justify-center items-center'>
        <div className="flex flex-col   justify-center items-center">
            {/* <div className='font-sans text-center text-gray-400 font-extrabold hsmall text-2xl mb-5 lg:text-3xl'>Registration Guidelines</div> */}
            <ul className="list-disc text-white hsmall font-extrabold text-sm lg:text-lg leading-7 lg:leading-10 mb-5 ">
                <li>The teams can register through the link </li>
                <li>Teams can submit upto 2 abstracts per track / domain.</li>
                <li>The teams must follow the PPT template provided for idea submission. (Where is the template ?)</li>
                <li>Click Here to download sample PPT</li>
                <li>The registration window will be open from 11th Nov 2023 to 25th Nov 2023</li>
                <li>The teams registering for hardware track should submit a block diagram and list of hardware components that they would like to use along with the abstract. (The organisers will
                     provide 220 V AC power supply, the teams should organise for their own components or batteries as required.)</li>
            </ul>
        </div>
        <div className='flex justify-center items-center px-4 py-3 border-2 border-[#39a7ff] rounded-xl cursor-pointer bg-[#39a7ff] hover:bg-opacity-70 w-[50%] lg:w-[25%]  mt-5 duration-500 animate-bounce hover:animate-none transition delay-300 du'>
                    <div className='text-lg lg:text-[20px] text-white hsmall flex justify-center items-center font-extrabold'>Register Now <BsArrowRight  className='ml-1'/></div>
                </div>
                </div>
    </div>
    </div>
  )
}

export default Registration