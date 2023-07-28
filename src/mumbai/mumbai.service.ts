import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import abi from './ABI.json';

const provider = new ethers.JsonRpcProvider(process.env.MUMBAI_NODE);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

@Injectable()
export class MumbaiService {
    async balance(address: string) {
        return ethers.formatEther(await provider.getBalance(address));
    }

    blocknum() {
        return provider.getBlockNumber(); 
    }

    async update(smartcontractaddress: string, walletaddress: string) {
        const contract = new ethers.Contract(smartcontractaddress, abi, provider);

        const connectWallet = contract.connect(wallet);
        const tx = await connectWallet.updateProjectwalletAddress(walletaddress);

        await tx.wait();

        return tx;
    }
}
