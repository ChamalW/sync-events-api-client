import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/style-info-sync')
  style(@Body() stylePayload: any): void {
    console.log('*********** STYLE *****************');
    console.log(stylePayload);
    console.log('*********** END OF STYLE *****************');
  }

  @Post('/bom-info-sync')
  apperalBOM(@Body() apperalPayload: any): void {
    console.log('*********** APPEREAL OR PART MATERIAL *****************');
    console.log(apperalPayload);
    console.log('*********** END OF APPEREAL *****************');
  }
}
