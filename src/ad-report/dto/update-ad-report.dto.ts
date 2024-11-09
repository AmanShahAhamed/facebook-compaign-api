import { PartialType } from '@nestjs/mapped-types';
import { CreateAdReportDto } from './create-ad-report.dto';

export class UpdateAdReportDto extends PartialType(CreateAdReportDto) {}
