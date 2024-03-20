import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
  }); 

  const config = new DocumentBuilder()
  .setTitle('PIZZA-TIME')
  .setDescription('PIZZA-TIME API description')
  .setVersion('1.0')
  // .addTag('Aures')
  .build();
  app.setGlobalPrefix('api');
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);




  await app.listen(3001);
}
bootstrap();
