import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductInterface } from './interfaces/product';
import { BagProductGenerator } from './utils/product-generator/bag-product.generator';
import { KeyboardProductGenerator } from './utils/product-generator/keyboard-product.generator';
import { LaptopProductGenerator } from './utils/product-generator/laptop-product.generator';
import { MemoryProductGenerator } from './utils/product-generator/memory-product.generator';
import { MonitorProductGenerator } from './utils/product-generator/monitor-product.generator';
import { PcGameGenerator } from './utils/product-generator/pc-game-generator';
import { PcProductGenerator } from './utils/product-generator/pc-product.generator';
import { PlayStationGameGenerator } from './utils/product-generator/play-station-game.generator';
import { SmartphoneProductGenerator } from './utils/product-generator/smartphone-product.generator';
import { XboxGameGenerator } from './utils/product-generator/xbox-game.generator';

export const generatedProducts: ProductInterface[] = [];

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(8080);

  let id = 1;
  for (let i = 0; i < 967; i++) {
    const product = new BagProductGenerator(id.toString()).generate();
    generatedProducts.push(product);
    id++;
  }
  for (let i = 0; i < 29; i++) {
    const product = new PcGameGenerator(id.toString()).generate();
    generatedProducts.push(product);
    id++;
  }
  for (let i = 0; i < 234; i++) {
    const product = new KeyboardProductGenerator(id.toString()).generate();
    generatedProducts.push(product);
    id++;
  }
  for (let i = 0; i < 2543; i++) {
    const product = new LaptopProductGenerator(id.toString()).generate();
    generatedProducts.push(product);
    id++;
  }
  for (let i = 0; i < 121; i++) {
    const product = new MemoryProductGenerator(id.toString()).generate();
    generatedProducts.push(product);
    id++;
  }
  for (let i = 0; i < 211; i++) {
    const product = new MonitorProductGenerator(id.toString()).generate();
    generatedProducts.push(product);
    id++;
  }
  for (let i = 0; i < 647; i++) {
    const product = new PcProductGenerator(id.toString()).generate();
    generatedProducts.push(product);
    id++;
  }
  for (let i = 0; i < 12; i++) {
    const product = new PlayStationGameGenerator(id.toString()).generate();
    generatedProducts.push(product);
    id++;
  }
  for (let i = 0; i < 1110; i++) {
    const product = new SmartphoneProductGenerator(id.toString()).generate();
    generatedProducts.push(product);
    id++;
  }
  for (let i = 0; i < 14; i++) {
    const product = new XboxGameGenerator(id.toString()).generate();
    generatedProducts.push(product);
    id++;
  }

}
bootstrap();
