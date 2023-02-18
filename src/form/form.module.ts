import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './../typeorm/entities/form';

@Module({
  imports: [TypeOrmModule.forFeature([Form])],

  providers: [FormService],
  controllers: [FormController],
})
export class FormModule {}
