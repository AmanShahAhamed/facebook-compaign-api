import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdReportModule } from './ad-report/ad-report.module';
import { ConfigModule } from '@nestjs/config';
import { FbModule } from './services/facebook.module';

@Module({
  imports: [
    AdReportModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
