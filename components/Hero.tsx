import React, { useState } from 'react'
import Image from 'next/image';
import styles from '~/styles';

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
    <div className={`relative ${styles.yPaddings}`}>
      <Image src={'/hands.jpg'} width={1920} height={1280} alt='hands' />
    </div>
  )
}

export default Hero