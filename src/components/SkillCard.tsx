import React from 'react'
import { MdComputer, MdOutlineArrowOutward } from 'react-icons/md'

function SkillCard() {
    return (
        <div className='bg-bgGrey rounded-lg p-5'>
            <div>
                <div className=' w-[4rem] h-[4rem] bg-white rounded-full flex items-center justify-center'>
                    <MdComputer size={20} />
                </div>
                <div className='grid grid-cols-12 pt-4'>
                    <div className='col-span-10 font-syne font-bold text-[25px]'>
                        Website Design
                    </div>
                    <div className='col-span-2 flex justify-end items-end'>
                        <MdOutlineArrowOutward size={30} color='#655d57' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCard