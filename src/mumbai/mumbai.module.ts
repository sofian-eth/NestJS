import { Module } from '@nestjs/common';
import { MumbaiController } from './mumbai.controller';
import { MumbaiService } from './mumbai.service';

@Module({
  controllers: [MumbaiController],
  providers: [MumbaiService]
})
export class MumbaiModule {}
