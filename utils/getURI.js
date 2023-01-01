import { ABI, contractAddress } from "./constants";
import { ethers } from "ethers";

const getURI = async () =>{
    try {
        const {ethereum} = window;
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, ABI, signer);
            const total = await contract.totalSupply();
            const nft = await contract.tokenURI(1);
            return {
                nft: nft,
                total: total
            };
        }
    } catch (error) {
        console.error(error);
    }
}

export default getURI;