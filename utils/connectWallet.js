import { ethers } from "ethers";
const connectWallet = async (walletConnected,setWalletConnected,setCurrentAccount) => {
    try {
        const { ethereum } = window;
        if (!ethereum) {
            alert("Please Install Metamask");
        }
        else {
            const getAccount = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            let provider = new ethers.providers.Web3Provider(ethereum, "any");
            let signer = provider.getSigner();
            let chaindId = await signer.getChainId();
            console.log(chaindId)
            if (chaindId !== 5) {
                setWalletConnected(false)
                signer.getChainId().then(async (res) => {
                    if (res !== 5) {
                        const polygon = await ethereum.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: "0x5" }]
                        })
                        const accounts = await ethereum.request({
                            method: 'eth_requestAccounts',
                        });
                        signer = provider.getSigner();
                        setCurrentAccount(accounts[0]);
                        setWalletConnected(true);
                        // state.setCurrentAccount(accounts[0])
                    }
                })
            }
            if (chaindId == 5) {
                setWalletConnected(true);
                setCurrentAccount(getAccount[0]);
                // state.setCurrentAccount(getAccount[0]);
            }
        }
    } catch (err) {
      console.log(err)
    }

  }

export default connectWallet;