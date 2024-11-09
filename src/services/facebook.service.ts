import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as adsSdk from 'facebook-nodejs-business-sdk';

@Injectable()
export class FbService {
  constructor(private readonly configService: ConfigService) {
    const fbAccount = this.configService.getOrThrow<string>('FB_ACCOUNT_ID');
    const AdAccount = adsSdk.AdAccount;
    const account = new AdAccount(fbAccount);
    console.log(account.id); //
  }
}
