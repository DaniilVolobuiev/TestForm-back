import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from 'src/typeorm/entities/form';
import { Repository } from 'typeorm';
import { SendFormParams } from './utils/types';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private formRepository: Repository<Form>,
  ) {}

  sendForm(sendFormDetails: SendFormParams) {
    const newFormData = this.formRepository.create({ ...sendFormDetails });
    this.formRepository.save(newFormData);
  }
}
