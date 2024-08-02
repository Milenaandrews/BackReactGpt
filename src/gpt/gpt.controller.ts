import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrthographyDto } from './dtos';

//! los controladores sirver para escuchar e imitir respuestas

@Controller('gpt')
export class GptController {

  //inyecciones de dependecias, inyecta la clase en el controller 
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  //nombre del metodo
  orthographyCheck(
    @Body() orthographyDto: OrthographyDto,

  ){
    return orthographyDto ;
    //return this.gptService.orthographyCheck();
  }




}
