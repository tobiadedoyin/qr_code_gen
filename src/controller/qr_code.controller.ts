import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as QRCode from 'qrcode';
import { MoviesService } from '../services/movies.service';

@Controller()
export class QrCodeController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('qrcode')
  async generateQRCode(@Res() res: Response) {
    const movies = this.moviesService.getMovies();
    const url = 'http://localhost:3000/movies';
    const qrCodeData = await QRCode.toDataURL(url);
    res.header('Content-Type', 'image/png');
    res.send(Buffer.from(qrCodeData.split(',')[1], 'base64'));
  }
}
