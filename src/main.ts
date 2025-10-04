import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
  console.log(`🎃 Application is running on:  \x1b[35mhttp://localhost:${process.env.PORT ?? 3000}\x1b[0m
----------------------------------------------------------`); 
  console.log(`📜 Documentation is running on:  \x1b[32mhttp://localhost:${process.env.PORT ?? 3000}/api\x1b[0m`); 
}
bootstrap();
