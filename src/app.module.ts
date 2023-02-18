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
      host: 'us-cdbr-east-06.cleardb.net',
      port: 3306,
      username: 'b3258cba791ec3',
      password: 'bd4e5751',
      database: 'heroku_5f6a41592c018c0',
      entities: [Form],

      // synchronize: true,
    }),

    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
