import React, { useEffect, useState } from 'react'
import getNFT from '../utils/getNft';
import getURI from '../utils/getURI'

function dashboard() {
    const [nft, setNft] = useState({});
    const [supply, setSupply] = useState([]);
    useEffect(()=>{
        resolveURI();
    },[nft])

    const resolveURI = async() => {
        try {
            const result = await getURI();
            const res = await getNFT(result.nft);
            setNft(res);
            populateArray(parseInt(result.total._hex, 16));
        } catch (error) {
            console.error(error)
        }
    }

    const populateArray = (i) =>{
        const num=[];
        for (let x = 0; x < i; x++){
            num[x] = x;
        }
        setSupply(num)
    }

    const allNFT = () =>{
        for(let i=0; i<=2; i++) {
            console.log(2);
            return (<div className='flex justify-between items-center px-40 mt-12 flex-wrap gap-y-8'>
            <div className='text-left'>
            <div className='w-80 h-48'>
                <img src={nft.image} className='h-[100%] w-full rounded-md shadow-lg shadow-gray-400' />
            </div>
            <div>
                <h3 className='font-Two font-bold text-red-400 text-lg'>{nft.name}{i}</h3>
                <p className='font-One text-sm font-extralight text-black'>{nft.description}</p>
            </div>
            </div>
            
        </div>)
        }
    }

  return (
    <div className='min-h-screen bg-[#85d7d9]'>
        <div className='text-center'>
            <h2 className='text-7xl font-One font-bold pt-16 text-gray-700'>Live <span className='underline text-[#6b63de]'>NFT's</span></h2>
            <div className='flex justify-between items-center px-40 mt-12 flex-wrap gap-y-8'>
            {
                nft && supply.map((i)=>{
                   return (
                    <div className='text-left'>
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