import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '~/styles';
import { Jost } from 'next/font/google';
import Tooltip from "./Tooltip";

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
})


const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`relative w-full h-screen `}>
      <div className={`relative h-full`}>
        <Image src={'/hands.jpg'} width={1920} height={1200} alt='hands' className='w-full h-full absolute inset-0 object-cover' />        
        <div className='relative bg-primary-black bg-opacity-30 h-full'>
          <img src={'/wave.svg'} className='absolute inset-x-0 bottom-0' />

          <div className={`${styles.innerWidth} absolute flex inset-0 mx-auto justify-center z-10 overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl`}>
          <div className={`flex flex-col items-center lg:justify-between justify-center lg:flex-row gap-6 max-w-xl lg:max-w-full`}>
            
            <div className='w-full lg:w-2/3 mx-auto'>
              <h1 className={`${jost.variable} font-jost text-off-white mb-6 lg:w-5/6`}>Transparent Fundraising with Blockchain</h1>
              <p className='mb-4 lg:w-5/6 text-off-white'>A charity fundraising platform leveraging blockchain technology to enable transparent donations and spending.</p>
              <Link href={'/'} aria-label='Link' className='inline-flex items-center hover-underline-animation-w'>
                <span className='flex gap-1'><p className='text-off-white'>Learn More</p><Image src={'/question.svg'} alt='question mark' height={16} width={16} /></span>
              </Link>
            </div>

            <div className={`w-full max-w-xl lg:w-1/2`}>
              <div className='bg-slate-200 bg-opacity-40 rounded shadox-2xl p-6 sm:p-8 text-off-white'>
                <h3 className='mb-1 sm:mb-3 sm:text-center text-off-white'>Create Campaign</h3>
                <form>

                  <div className=''>
                    <label htmlFor='firstName' className='inline-block mb-1 px-1'>
                      Title
                    </label>
                    <input 
                      onChange={(e) => {
                        setCampaign({
                          ...campaign,
                          title: e.target.value,
                        })
                      }}
                      placeholder='Title'
                      required
                      type='text'
                      className='flex-grow w-full py-2 px-4 mb-2 transition duration-200 bg-primary-black bg-opacity-80 border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
                      id='firstName'
                      name='firstName'
                    />
                  </div>

                  <div className=''>
                    <label htmlFor='lastName' className='inline-block mb-1 px-1'>
                      Description
                    </label>
                    <input 
                      onChange={(e) => {
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        })
                      }}
                      placeholder='Description'
                      required
                      type='text'
                      className='flex-grow w-full py-2 px-4 mb-2 transition duration-200 bg-primary-black bg-opacity-80 border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
                      id='lastName'
                      name='lastName'
                    />
                  </div>

                  <div className=''>
                    <label htmlFor='email' className='inline-block mb-1 px-1'>
                      Target Amount
                    </label>
                    <input 
                      onChange={(e) => {
                        setCampaign({
                          ...campaign,
                          amount: e.target.value,
                        })
                      }}
                      placeholder='Amount'
                      required
                      type='text'
                      className='flex-grow w-full py-2 px-4 mb-2 transition duration-200 bg-primary-black bg-opacity-80 border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
                      id='email'
                      name='email'
                    />
                  </div>

                  <div className=''>
                    <label htmlFor='email' className='inline-block mb-1 px-1'>
                      Deadline
                    </label>
                    <input 
                      onChange={(e) => {
                        setCampaign({
                          ...campaign,
                          deadline: e.target.value,
                        })
                      }}
                      placeholder='Date'
                      required
                      type='date'
                      className='flex-grow w-full py-2 px-4 mb-2 transition duration-200 bg-primary-black bg-opacity-80 border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
                      id='email'
                      name='email'
                    />
                  </div>

                  <div className='mt-4 mb-2 sm:mb-4'>
                    <button
                      onClick={(e) => createNewCampaign(e)}
                      type='submit'
                      className='inline-flex items-center justify-center w-full py-3 px-6 transition duration-200 rounded shadow-md text-off-white bg-primary-black hover:-translate-y-[1px]'
                    >
                      Create Campaign
                    </button>
                  </div>
                  <p className='text-xs sm:text-sm text-center text-off-white'>Start your Web3 fundraiser now</p>

                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero