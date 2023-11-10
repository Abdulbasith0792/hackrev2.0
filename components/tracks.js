import React from 'react'

const Tracks = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        {/* <div className='h-10 w-full bg-gray-400 trans'>
            <div className='running'>Important information will be displayed here continuously...</div>
        </div> */}
        <div className='w-[95%] lg:w-[80%] '>
            <div className='text-white text-center mt-5 lg:mt-10 mb-3 lg:mb-7 text-[50px] htext'>Tracks</div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-12' >
                <div className='flex flex-row items-center justify-start gap-4 p-3 border-[#39a7ff] border-[1px] rounded-xl shadows'>
                   <div className='p-4 bg-[#39a7ff] rounded-full'> <img src="../assets/soft.png" className='h-16 w-16' alt="" /></div>
                
                    <div className='w-[80%] text-white'>
                        <div className='hsmall text-xl font-extrabold'>
                            Generic Software
                        </div>
                        <div className='hsmall leading-snug tracking-tight text-sm mt-1 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente, dolorem adipisci recusanda
                            e voluptate culpa, molestias harum, obcaecati aperiam cumque omnis eaque illo veritatis laudantium reprehenderit!
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-start gap-4 p-3 border-[#39a7ff] border-[1px] rounded-xl shadows'>
                   <div className='p-4 bg-[#39a7ff] rounded-full'> <img src="../assets/hard.png" className='h-16 w-16' alt="" /></div>
                
                    <div className='w-[80%] text-white'>
                        <div className='hsmall text-xl font-extrabold'>
                            Generic Hardware
                        </div>
                        <div className='hsmall leading-snug tracking-tight text-sm mt-1 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente, dolorem adipisci recusanda
                            e voluptate culpa, molestias harum, obcaecati aperiam cumque omnis eaque illo veritatis laudantium reprehenderit!
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-start gap-4 p-3 border-[#39a7ff] border-[1px] rounded-xl shadows'>
                   <div className='p-4 bg-[#39a7ff] rounded-full'> <img src="../assets/fintech.png" className='h-16 w-16' alt="" /></div>
                
                    <div className='w-[80%] text-white'>
                        <div className='hsmall text-xl font-extrabold'>
                            Fintech
                        </div>
                        <div className='hsmall leading-snug tracking-tight text-sm mt-1 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente, dolorem adipisci recusanda
                            e voluptate culpa, molestias harum, obcaecati aperiam cumque omnis eaque illo veritatis laudantium reprehenderit!
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-start gap-4 p-3 border-[#39a7ff] border-[1px] rounded-xl shadows'>
                   <div className='p-4 bg-[#39a7ff] rounded-full'> <img src="../assets/healthcare.png" className='h-16 w-16' alt="" /></div>
                
                    <div className='w-[80%] text-white'>
                        <div className='hsmall text-xl font-extrabold'>
                            Health Care
                        </div>
                        <div className='hsmall leading-snug tracking-tight text-sm mt-1 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente, dolorem adipisci recusanda
                            e voluptate culpa, molestias harum, obcaecati aperiam cumque omnis eaque illo veritatis laudantium reprehenderit!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tracks