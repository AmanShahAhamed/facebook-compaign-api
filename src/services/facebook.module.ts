import { Module } from '@nestjs/common';
import { FbService } from './facebook.service';

@Module({
  providers: [FbService],
})
export class FbModule {}
