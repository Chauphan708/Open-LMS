import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

let app;

export default async function handler(req, res) {
  try {
    if (!app) {
      app = await NestFactory.create(AppModule);
      app.setGlobalPrefix('api');
      await app.init();
    }
    const instance = app.getHttpAdapter().getInstance();
    return instance(req, res);
  } catch (error) {
    console.error('SERVERLESS_FUNCTION_ERROR:', error);
    res.status(500).json({
      statusCode: 500,
      message: 'Internal Server Error',
      error: error.message,
      stack: error.stack
    });
  }
}
