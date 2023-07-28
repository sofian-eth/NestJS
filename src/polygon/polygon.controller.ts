import { Body, Controller, Get, Post } from '@nestjs/common';
import { PolygonService } from './polygon.service';
import { BalanceDto } from './balance';

@Controller('polygon')
export class PolygonController {
    constructor(private polygonservice: PolygonService) {}

    @Post('balance')
    balance(@Body() dto: BalanceDto) {
        debugger;
        return this.polygonservice.balance(dto.address);
    }

    @Get('blocknum')
    blocknum() {
        return this.polygonservice.blocknum();
    }
}