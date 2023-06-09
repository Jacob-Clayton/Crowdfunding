import React, { useState, useEffect } from 'react';

const PopUp = ({ setOpenModel, donate, donateFunction, getDonations }) => {
  const [amount, setAmount] = useState("");
  const [allDonationData, setAllDonationData] = useState();

  const createDonation = async () => {
    try {
      const data= await donateFunction(donate.pId, amount);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const donationsListData = getDonations(donate.pId);
      const donationData = await donationsListData;
      setAllDonationData(donationData);
    };
    fetchData();

    return () => {
    };
  }, []);

  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/* Content */}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none'>
            {/* Header */}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3>{donate.title}</h3>
              <button 
                onClick={() => setOpenModel(false)}
                className='p-1 ml-auto bg-transparent border-0 opactiy-5 float-right outline-none focus:outline-none'>
                  <span className='bg-transparent opacity-5 h-6 w-6 outline-none focus:outline-none block'>x</span>
                </button>
            </div>
            {/* Body */}
            <div className='relative p-6 flex-auto'>
              <div className='my-4'>
                <p className='text-off-white'>{donate.description}</p>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder='amount'
                  required
                  type='text'
                  id="firstName"
                  name="firstName"
                  className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-200 rounded shadow-sm appearance-none focus:outline-none'
                >
                  {allDonationData?.map((donate, i) => (
                    <p>{i + 1}: {donate.donation} {""} {donate.donator.slice(0, 35)}</p>
                  ))}
                </input>
              </div>
            </div>
            {/* Footer */}
            <div className='flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b'>
              <button 
                onClick={() => setOpenModel(false)}
                type="button"
                className='text-red-500 bg-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
              >Close</button>
              <button
                className='bg-black text-off-white px-6 py-2 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => createDonation()}
              >Donate</button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-primary-black' />
    </>
  )
}

export default PopUp