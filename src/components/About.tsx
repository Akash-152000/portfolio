import Image from 'next/image'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

function About() {
    return (
        <div className='px-[2rem] gap-[215px]'>
            <div className='grid grid-cols-12'>
                <div className=' col-span-6'>
                    <Image
                        src='/images/about1.png'
                        width={517}
                        height={512}
                        alt="Picture of the author"
                    />
                </div>
                <div className='col-span-6 '>
                    <div className='font-syne text-[20px] font-bold text-primaryYellow'>Hello I'm</div>
                    <div className='font-syne text-[60px] font-bold leading-[90px] text-fontBlack pt-[20px]'>
                        <div className='absolute text-balance'>Akash Yadav,</div>
                    </div>
                    <div className='bg-primaryYellow w-[80px] h-[80px] rounded-full '></div>
                    <div className='font-syne font-semibold py-[1rem] text-fontBlack text-[1.3rem]'>
                        <div className=' h-[2rem] text-balance'>Fullstack Web Application Developer [Nextjs]</div>
                        <div className=' h-[2rem] text-balance'>Wordpress Developer</div>
                        <div className=' h-[2rem] text-balance'>Social Media Marketing and Management</div>
                    </div>
                    <div className=' flex items-center text-[18px] text-fontGrey font-dmSans font-[400] text-balance pt-[1rem]'>I help business by Developing them Perfect Business Websites that Increases that conversion rate, I also develop software solutions like Customer Portal or CRM. I help service based businesses by generating leads through Social Media. I also help them increase there conversion changes through Whatsapp Marketing</div>

                    <div className='flex justify-between py-[2rem]'>
                        <div className=''>
                            <div className='font-syne font-bold text-[2rem]'>o4</div>
                            <div className='text-[18px] text-fontGrey font-dmSans font-[400]'> Softwares in Production</div>
                        </div>
                        <div className=''>
                            <div className='font-syne font-bold text-[2rem]'>3k+</div>
                            <div className='text-[18px] text-fontGrey font-dmSans font-[400]'> Leads Generated</div>
                        </div>
                        <div className=''>
                            <div className='font-syne font-bold text-[2rem]'>o8</div>
                            <div className='text-[18px] text-fontGrey font-dmSans font-[400]'> Websites Delivered</div>
                        </div>
                    </div>

                    <div className='bg-fontBlack w-[18rem] flex justify-center items-center p-[1rem] gap-2 rounded-lg cursor-pointer'>
                        <div className='font-syne font-bold text-[1.1rem] text-white'>Checkout My Work</div>
                        <MdOutlineArrowOutward size={20} color='white' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About