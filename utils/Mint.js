import { ABI, contractAddress } from "./Constants";
import { ethers } from "ethers";

const Mint = async () =>{
    try {
        const {ethereum} = window;
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, ABI, signer);
            const Mint = await contract.safeMint(accounts[0]);
            Mint.wait();
        }
    } catch (error) {
        console.error(error);
    }
}

export default Mint;