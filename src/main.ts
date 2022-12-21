import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductInterface } from './interfaces';
import { ProductGenerator } from './utils/product.generator';

export let generatedProducts: ProductInterface[];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);

  generatedProducts = new ProductGenerator(3271).generate();
}
bootstrap();
