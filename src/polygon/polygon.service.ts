import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import 'dotenv/config'

const provider = new ethers.JsonRpcProvider(process.env.POLYGON_NODE);

@Injectable()
export class PolygonService {

    async balance(address: string) {
        return ethers.formatEther(await provider.getBalance(address));
    }

    blocknum() {
        return provider.getBlockNumber();
    }

}