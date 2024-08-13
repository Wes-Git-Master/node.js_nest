import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Wes app')
    .setDescription('The API description')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      docExpansion: 'list',
      persistAuthorization: true,
      defaultModelsExpandDepth: 7,
    },
  });
  const port = 3000;
  const host = 'localhost';
  await app.listen(port, () => {
    Logger.log(`server running on http://${host}:${port}`);
    Logger.log(`Swagger running on http://${host}:${port}/docs`);
  });
}

void bootstrap();
