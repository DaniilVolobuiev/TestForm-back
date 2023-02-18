import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormController } from './form/form.controller';
import { Form } from './typeorm/entities/form';

import { FormModule } from './form/form.module';
import { FormService } from './form/form.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'Testuser12345!',
      database: 'nestjs_test',
      entities: [Form],

      // synchronize: true,
    }),

    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
