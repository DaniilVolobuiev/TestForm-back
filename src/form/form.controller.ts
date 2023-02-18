import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { SendFormDto } from './dto/send-form.dto';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private formService: FormService) {}
  @Post()
  sendFormData(@Body() SendFormDto: SendFormDto) {
    this.formService.sendForm(SendFormDto);
  }
}
