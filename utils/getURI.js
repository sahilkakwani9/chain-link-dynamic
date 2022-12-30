import { ABI, contractAddress } from "./constants";
import { ethers } from "ethers";

const getURI = async () =>{
    try {
        const {ethereum} = window;
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, ABI, signer);
            const nft = contract.tokenURI(1);
            return nft;
        }
    } catch (error) {
        console.error(error);
    }
}

export default getURI;