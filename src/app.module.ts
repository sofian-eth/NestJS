import { Module } from '@nestjs/common';
import { PolygonModule } from './polygon/polygon.module';
import { MumbaiModule } from './mumbai/mumbai.module';

@Module({
  imports: [PolygonModule, MumbaiModule]
})
export class AppModule {}
