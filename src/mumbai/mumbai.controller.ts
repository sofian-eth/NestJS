import { Body, Controller, Get, Post } from '@nestjs/common';
import { MumbaiService } from './mumbai.service';
import { BalanceDto, UpdateProjectAddressDto } from './balance';

@Controller('mumbai')
export class MumbaiController {
    constructor(private mumbaiservice: MumbaiService) {}

    @Post('balance')
    balance(@Body() dto: BalanceDto) {
        debugger;
        return this.mumbaiservice.balance(dto.address);
    }

    @Get('blocknum')
    blocknum() {
        return this.mumbaiservice.blocknum();
    }

    @Post('update-project-wallet')
    update(@Body() dto: UpdateProjectAddressDto) {
        return this.mumbaiservice.update(dto.smartcontractaddress, dto.walletaddress);
    }
}
