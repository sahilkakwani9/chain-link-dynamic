import React, { useEffect, useState } from 'react'
import getNFT from '../utils/getNft';
import getURI from '../utils/getURI'

function dashboard() {
    const [nft, setNft] = useState({});
    useEffect(()=>{
        resolveURI();
    })

    const resolveURI = async() => {
        try {
            const uri = await getURI();
            const res = await getNFT(uri);
            setNft(res);
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='min-h-screen bg-[#85d7d9]'>
        <div className='text-center'>
            <h2 className='text-7xl font-One font-bold pt-16 text-gray-700'>Live <span className='underline text-[#6b63de]'>NFT's</span></h2>
            {
                nft && (<div className='flex justify-between items-center px-40 mt-12 flex-wrap gap-y-8'>
                <div className='text-left'>
                <div className='w-80 h-48'>
                    <img src={nft.image} className='h-[100%] w-full rounded-md' />
                </div>
                <div>
                    <h3 className='font-Two font-bold text-red-400 text-lg'>{nft.name}</h3>
                    <p className='font-One text-sm font-extralight text-black'>{nft.description}</p>
                </div>
                </div>
                <div className='text-left'>
                <div className='w-80 h-48'>
                    <img src={nft.image} className='h-[100%] w-full rounded-md' />
                </div>
                <div>
                    <h3 className='font-Two font-bold text-red-400 text-lg'>{nft.name}</h3>
                    <p className='font-One text-sm font-extralight text-black'>{nft.description}</p>
                </div>
                </div>
                <div className='text-left'>
                <div className='w-80 h-48'>
                    <img src={nft.image} className='h-[100%] w-full rounded-md' />
                </div>
                <div>
                    <h3 className='font-Two font-bold text-red-400 text-lg'>{nft.name}</h3>
                    <p className='font-One text-sm font-extralight text-black'>{nft.description}</p>
                </div>
                </div>
                <div className='text-left'>
                <div className='w-80 h-48'>
                    <img src={nft.image} className='h-[100%] w-full rounded-md' />
                </div>
                <div>
                    <h3 className='font-Two font-bold text-red-400 text-lg'>{nft.name}</h3>
                    <p className='font-One text-sm font-extralight text-black'>{nft.description}</p>
                </div>
                </div>
            </div>)
            }
        </div>
    </div>
  )
}

export default dashboard