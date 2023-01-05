import React, { useEffect, useState } from 'react'
import GetNFT from '../utils/GetNFT';
import GetURI from '../utils/GetURI';

function dashboard() {
    const [nft, setNft] = useState({});
    const [supply, setSupply] = useState([]);
    useEffect(()=>{
        resolveURI();
    },[nft])

    const resolveURI = async() => {
        try {
            const result = await GetURI();
            const res = await GetNFT(result.nft);
            setNft(res);
            populateArray(parseInt(result.total._hex, 16));
        } catch (error) {
            console.error(error);
        }
    }

    const populateArray = (i) =>{
        const num=[];
        for (let x = 0; x < i; x++){
            num[x] = x;
        }
        setSupply(num)
    }

  return (
    <div className='min-h-screen bg-[#85d7d9]'>
        <div className='text-center'>
            <div className='flex justify-between h-26 pt-6 px-4'>
            <h2 className='text-7xl font-One font-bold text-gray-700'>Live <span className='underline text-[#6b63de]'>NFT's</span></h2>
            <button className='hidden md:block text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-lg text-2xl px-9 py-5 text-center mr-2 mb-2'>Mint New</button>
            </div>
            <div className='flex justify-between items-center mt-12 flex-wrap gap-y-8'>
            {
                nft && supply.map((i)=>{
                   return (
                    <div className='text-left mx-auto'>
                    <div className='w-80 h-48'>
                        <img src={nft.image} className='h-[100%] w-full rounded-md shadow-lg shadow-gray-400' />
                    </div>
                    <div>
                        <h3 className='font-Two font-bold text-red-400 text-lg'>{nft.name}</h3>
                        <p className='font-One text-sm font-extralight text-black'>{nft.description}</p>
                    </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default dashboard