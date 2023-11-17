import { Module } from '@nestjs/common';
import { MoviesController } from './controller/movies.controller';
import { MoviesService } from './services/movies.service';
import { QrCodeController } from './controller/qr_code.controller';

@Module({
  controllers: [MoviesController, QrCodeController],
  providers: [MoviesService],
})
export class AppModule {}

