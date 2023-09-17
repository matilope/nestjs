import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaintingsModule } from './paintings/paintings.module';

@Module({
  imports: [PaintingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
