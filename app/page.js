import Eligibility from '@/components/eligibility'
import Header from '@/components/header'
import Registration from '@/components/registration'
import Timeline from '@/components/timline'
import Tracks from '@/components/tracks'
import Image from 'next/image'

export default function Home() {
  return (
   <div >
    <div className='bg-gradient-radial from-[#0E0F68] to-[#18141c]'>
    <Header  />
    <Tracks />
    </div>
    {/* <div className='bg-gradient-radial from-[#0E0F68] to-[#18141c]'> */}
    
    {/* </div> */}
   
    <div className='bg-gradient-radial from-[#0E0F68] to-[#18141c]'>
    <Eligibility />
    <Timeline />
    </div>
    <div className='bg-gradient-radial from-[#0E0F68] to-[#18141c]'>
    <Registration />
    </div>
    
    
   </div>
  )
}
