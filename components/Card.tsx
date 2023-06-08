import React from 'react';
import styles from '~/styles';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
    console.log(allcampaign)

    const daysLeft = (deadline) => {
        const difference = new Date(deadline).getTime() - Date.now();
        const remainingDays = difference / (1000 * 3600 * 24);
        return remainingDays.toFixed(0);
    };

    return (
        <div className={`${styles.innerWidth} mx-auto h-[600px] mt-10 mb-10`}>
            <h3>{title}</h3>
            <div className='grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10'>
                <div 
                    onClick={() => (setDonate(campaign), setOpenModel(true))} 
                    className='cursor-pointer border overflow-hidden transition-shadow duration-300 rounded'
                >
                    <Image src={'/hands.jpg'} alt={'image'} height={300} width={400} className='w-full object-cover rounded-t mx-auto'/>
                    <div className='pb-3 pt-0 space-y-2'>
                        <span className='block bg-primary-black bg-opacity-30 rounded-b'>
                            <span className='flex justify-between px-2 py-1'>
                                <span><p className='text-xs sm:text-sm'>Days Left: 30</p></span>
                                <span><p className=' text-xs sm:text-sm'>Raised: 10/30</p></span>
                            </span>
                        </span>
                        <div className='px-2'>
                            <Link href={'/'} aria-label='article' className=''>
                                <h3 className=''>Ocean clean up</h3>
                            </Link>
                            <p className=''>Help us to save the turtles by fishing out plastics</p>
                        </div>
                        
                    </div>
                </div>
                

                {allcampaign?.map((campaign, i) => (
                    <div 
                        onClick={() => (setDonate(campaign), setOpenModel(true))} 
                        key={i + 1}
                        className='cursor-pointer border overflow-hidden transition-shadow duration-300 bg-black rounded'
                    >
                        <Image src={'/hands.jpg'} alt={'image'} height={100} width={100} className='object-cover rounded'/>
                        <div className='py-5 pl-2'>
                            <p>Days Left: {daysLeft(campaign.deadline)}</p>
                            <Link href={'/'} aria-label='article' className='inline-block'>
                                <h3>campaign title{campaign.title}</h3>
                            </Link>
                            <p>campaign description{campaign.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card