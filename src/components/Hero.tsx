import React from 'react'
import Image from 'next/image'
import { MdOutlineArrowDownward, MdOutlineArrowOutward } from 'react-icons/md'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Hero() {
    return (
        <div className='bg-bgPeach w-[full] flex'>
            <div className='w-[40%] px-[5rem] flex flex-col pt-[15%]'>

                <div className='font-syne flex items-center gap-6'>
                    <hr className='border-fontGrey border-[1px] w-[80px]' />
                    <div className='font-syne text-[30px] font-bold text-fontBlack flex gap-2'>Hello, I'm
                        <Image
                            src='/images/peace.png'
                            width={25}
                            height={30}
                            alt="Picture of the author"
                        /></div>
                </div>

                <div className='font-syne text-[120px] font-bold leading-[90px] text-fontBlack pt-[20px]'>
                    <div className='absolute'>AKASH</div>
                    <div className='bg-primaryYellow w-[80px] h-[80px] rounded-full '></div>

                </div>
                <div className='font-syne text-[20px] font-bold leading-[90px] text-headingGrey'>Website Designer | Based in India</div>

                <div className='flex gap-4'>

                    <div className='flex items-center gap-4 font-dmSans text-[15px] font-bold border bg-fontBlack text-white border-fontBlack rounded-lg px-[28px] py-[18px] cursor-pointer'>
                        Let's Talk
                        <div>
                            <MdOutlineArrowOutward size={20} />
                        </div>
                    </div>

                    <div className='flex items-center gap-4 font-dmSans text-[15px] font-bold border text-fontBlack border-fontBlack rounded-lg px-[28px] py-[18px] cursor-pointer'>
                        My Work
                        <div>
                            <MdOutlineArrowOutward size={20} />
                        </div>
                    </div>
                </div>
                <div className='pt-[2.5rem] flex '>
                    <div className='font-syne w-[11rem] h-[1rem] flex items-center font-bold text-fontGrey text-[16px] border border-r-fontBlack'>Connect with me</div>
                    <div className='px-[1rem] flex items-center h-[1rem] gap-4'>
                        <div className='cursor-pointer'>
                            <FaLinkedinIn size={20} />
                        </div>
                        <div className='cursor-pointer'>
                            <FaInstagram size={20} />
                        </div>
                        <div className='cursor-pointer'>
                            <FaXTwitter size={20} />
                        </div>
                    </div>
                </div>




            </div>

            <div className='w-[60%] flex justify-end'>
                <Image
                    src='/images/hero1.png'
                    width={650}
                    height={632}
                    alt="Picture of the author"
                />
                <div className='absolute top-[90%] left-[70%] flex justify-center items-center w-[160px] h-[160px] border-primaryYellow rounded-full border'>
                    <div className='flex justify-center bg-fontBlack text-white rounded-full w-[160px] h-[160px]'></div>
                    <div className='flex items-center justify-center w-[80px] h-[80px] bg-primaryYellow rounded-full absolute'>
                        <MdOutlineArrowDownward size={30} />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Hero