import React from 'react'
import SkillCard from './SkillCard'
import { MdOutlineArrowOutward } from 'react-icons/md'

function Specialities() {
    return (
        <div className='py-[10rem] px-[5rem]'>
            <div className='grid grid-cols-12'>
                <div className='col-span-6'>
                    <div className='font-syne text-[20px] font-bold text-primaryYellow'>Services</div>
                    <div className='font-syne text-[60px] font-bold leading-[90px] text-fontBlack pt-[20px]'>
                        <div className='absolute'>My Specialities</div>
                        <div className='bg-primaryYellow w-[80px] h-[80px] rounded-full '></div>

                    </div>
                </div>
                <div className='col-span-6 flex items-center text-[18px] text-fontGrey font-dmSans'>Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms</div>
            </div>

            <div className='py-[2rem] grid grid-cols-12 gap-6'>
                <div className='col-span-8'>

                    <div className='grid grid-cols-12 gap-4 pb-2'>
                        <div className='col-span-4'><SkillCard /></div>
                        <div className='col-span-4'><SkillCard /></div>
                        <div className='col-span-4'><SkillCard /></div>

                    </div>
                    <div className='grid grid-cols-12 gap-4 pt-2'>
                        <div className='col-span-4'><SkillCard /></div>
                        <div className='col-span-4'><SkillCard /></div>
                        <div className='col-span-4'><SkillCard /></div>
                    </div>
                </div>
                <div className='col-span-4 py-[2rem] px-[1.5rem] bg-fontBlack rounded-lg flex flex-col justify-between'>
                    <div className='w-full flex justify-end'>
                        <MdOutlineArrowOutward size={50} color='#ffb646' />
                    </div>
                    <div className=''>
                        <div className=' font-dmSans text-[14px] text-primaryYellow'>
                            SAY HELLO!
                        </div>
                        <div className='font-syne font-bold text-[25px] text-white'>
                            hi@akashdevelops.com
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Specialities