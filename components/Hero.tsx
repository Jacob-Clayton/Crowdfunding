import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '~/styles';
import { Jost } from 'next/font/google';

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
    <div className={` w-full h-screen`}>
      <div className={`relative h-full lg:mt-0 mt-16`}>
        <Image src={'/hands.jpg'} width={1920} height={1200} alt='hands' className='w-full h-full absolute inset-0 object-cover' />        
        <div className='relative bg-primary-black bg-opacity-30 h-full'>
          <img src={'/wave.svg'} className='absolute inset-x-0 bottom-0' />

          <div className={`${styles.innerWidth} absolute flex inset-0 mx-auto justify-center z-10 overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl`}>
          <div className={`flex flex-col lg:mt-0 mt-16 items-center lg:flex-row gap-6 max-w-xl lg:max-w-full`}>
            
            <div className='w-full lg:w-2/3 mx-auto lg:space-y-12 space-y-8'>
              <h1 className={`${jost.variable} font-jost text-off-white lg:w-5/6`}>Transparent Fundraising With Blockchain</h1>
              <p className='lg:w-2/3 text-off-white'>A charity fundraising platform leveraging blockchain technology to enable transparent donations and spending.</p>
              <Link href={'/'} aria-label='Link' className='inline-flex items-center hover-underline-animation-w'>
                <span className='flex gap-2'><p className='text-off-white'>Learn More</p><Image src={'/arrow-right.svg'} alt='question mark' height={14} width={14} /></span>
              </Link>
            </div>

            <div className={`w-full lg:w-1/3`}>
              <div className='bg-off-white bg-opacity-90 rounded shadow-2xl p-6 sm:p-8 '>
                <h3 className={`mb-1 sm:mb-3 sm:text-center`}>Create Campaign</h3>
                <form>

                  <div className=''>
                    <label htmlFor='title' className='inline-block mb-1 px-1 sm:text-sm text-xs'>
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
                      className='sm:text-sm text-xs flex-grow w-full py-2 px-4 mb-2 transition duration-200 border-gray-300 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
                      id='title'
                      name='title'
                    />
                  </div>

                  <div className=''>
                    <label htmlFor='description' className='inline-block mb-1 px-1 sm:text-sm text-xs'>
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
                      className='sm:text-sm text-xs flex-grow w-full py-2 px-4 mb-2 transition duration-200 border-gray-300 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
                      id='description'
                      name='description'
                    />
                  </div>

                  <div className=''>
                    <label htmlFor='amount' className='inline-block mb-1 px-1 sm:text-sm text-xs'>
                      Target Amount
                    </label>
                    <input 
                      onChange={(e) => {
                        setCampaign({
                          ...campaign,
                          amount: e.target.value,
                        })
                      }}
                      placeholder='Amount (ETH)'
                      required
                      type='number'
                      className='sm:text-sm text-xs flex-grow w-full py-2 px-4 mb-2 transition duration-200 border-gray-300 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
                      id='amount'
                      name='amount'
                    />
                  </div>

                  <div className=''>
                    <label htmlFor='date' className='inline-block mb-1 px-1 sm:text-sm text-xs'>
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
                      className='sm:text-sm text-xs flex-grow w-full py-2 px-4 mb-2 transition duration-200 border-gray-300 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
                      id='date'
                      name='date'
                    />
                  </div>

                  <div className='mt-4 mb-2'>
                    <button
                      onClick={(e) => createNewCampaign(e)}
                      type='submit'
                      className='inline-flex items-center justify-center w-full py-3 px-6 transition duration-200 rounded shadow-md text-off-white bg-primary-black hover:-translate-y-[1px]'
                    >
                      Create Campaign
                    </button>
                  </div>
                  <p className='text-xs sm:text-sm text-center'>Start your Web3 fundraiser now</p>
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