import { Module } from '@nestjs/common';
import { AdReportService } from './ad-report.service';
import { AdReportController } from './ad-report.controller';

@Module({
  controllers: [AdReportController],
  providers: [AdReportService],
})
export class AdReportModule {}
